"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Service {
  id: number;
  name: string;
  color?: string;
}

interface ServiceColumnProps {
  services: Service[];
  columnIndex: number;
  currentTime: number;
}

function ServiceColumn({ services, columnIndex, currentTime }: ServiceColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * services.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentService = services[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-32 overflow-hidden md:h-20 md:w-56"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentService.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <div 
            className={`text-lg md:text-xl font-bold ${currentService.color || 'text-blue-600'} px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm`}
          >
            {currentService.name}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface TextCarouselProps {
  columns?: number;
  services: Service[];
}

export function TextCarousel({ columns = 2, services }: TextCarouselProps) {
  const [serviceColumns, setServiceColumns] = useState<Service[][]>([]);
  const [time, setTime] = useState(0);

  const distributeServices = useCallback(
    (services: Service[]) => {
      const shuffled = [...services].sort(() => Math.random() - 0.5);
      const result: Service[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((service, index) => {
        result[index % columns].push(service);
      });

      const maxLength = Math.max(...result.map((col) => col.length));
      for (const col of result) {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      }

      return result;
    },
    [columns]
  );

  useEffect(() => {
    setServiceColumns(distributeServices(services));
  }, [services, distributeServices]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 py-8">
      {serviceColumns.map((columnServices, index) => (
        <ServiceColumn
          key={index}
          services={columnServices}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
} 
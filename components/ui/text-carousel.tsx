"use client";

import { useCallback, useEffect, useState } from "react";

interface Service {
  id: number;
  name: string;
  color?: string;
}

interface ServiceItemProps {
  service: Service;
}

function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`text-md md:text-lg font-bold text-center ${service.color || 'text-blue-600'} px-2 py-2 rounded-lg border border-gray-200 bg-white shadow-sm w-full`}
      >
        {service.name}
      </div>
    </div>
  );
}

interface TextCarouselProps {
  columns?: number;
  services: Service[];
}

export function TextCarousel({ columns = 2, services }: TextCarouselProps) {
  const [serviceColumns, setServiceColumns] = useState<Service[][]>([]);

  const distributeServices = useCallback(
    (services: Service[]) => {
      const result: Service[][] = Array.from({ length: columns }, () => []);

      services.forEach((service, index) => {
        result[index % columns].push(service);
      });

      return result;
    },
    [columns]
  );

  useEffect(() => {
    setServiceColumns(distributeServices(services));
  }, [services, distributeServices]);

  return (
    <div className="max-w-xs mx-auto grid grid-cols-2 items-center md:grid-cols-4 md:max-w-2xl py-4">
      {services.map((service) => (
        <ServiceItem
          key={`service-${service.id}`}
          service={service}
        />
      ))}
    </div>
  );
} 
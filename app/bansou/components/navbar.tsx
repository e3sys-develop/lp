"use client";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ href: "#about", label: "BANSOUとは" },
		{ href: "#case-study", label: "事例" },
		{ href: "#features", label: "機能" },
		{ href: "#pricing", label: "価格" },
		{ href: "https://share.hsforms.com/1P1QwdXqTQ-2uufI7qNRbsAsw9sc", label: "お問い合わせ" },
	];

	const pathname = usePathname();
	const isBansouPath = pathname === "/bansou";

	return (
		<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/bansou" className="text-2xl font-bold">
							BANSOU
						</Link>
					</div>

					{isBansouPath && (
						<>
							<div className="hidden md:flex items-center space-x-8">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-gray-600 hover:text-gray-900 transition-colors"
									>
										{item.label}
									</Link>
								))}
							</div>

							<div className="md:hidden flex items-center">
								<button
									onClick={() => setIsOpen(!isOpen)}
									type="submit"
									className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								>
									<Menu className="h-6 w-6" />
								</button>
							</div>
						</>
					)}
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="block px-3 py-2 text-gray-600 hover:text-gray-900"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

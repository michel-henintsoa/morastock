"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { XIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigationItems = [
	{ label: "Dashboard", route: "/dashboard" },
	{ label: "Chat", route: "/chat" },
	{ label: "Stock", route: "/stock" },
	{ label: "Employee", route: "/employee" }
];

export default function Navbar() {
	const router = useRouter();
	const pathname = usePathname();

	// Trouve le label correspondant à la route courante
	const currentNav = navigationItems
    .find(item => item.route === pathname)?.label || "Chat";
	const [activeNav, setActiveNav] = useState(currentNav);
	const [searchQuery, setSearchQuery] = useState("");

	// Redirige vers /chat si la route n'est pas reconnue
	useEffect(() => {
		if (!navigationItems.some(item => item.route === pathname)) {
			router.replace("/chat");
		}
	}, [pathname, router]);

	const handleNavClick = (label: string) => {
		setActiveNav(label);
		const route =
			navigationItems.find(item => item.label === label)?.route || "/chat";
		router.push(route);
	};
    const [searchClick, setSearchClick] = useState(false);

	return (
		<header className="after:w-full after:h-[1px] after:rounded-full after:absolute after:bottom-0 after:bg-zinc-500 relative pb-1 w-full mt-2 flex justify-between">
			{/* Logo */}
			<div id="icon" className="grid grid-cols-2 grid-rows-1 w-[150] align-center">
				<div className="w-[40] h-[40] bg-[#1D1C24] rounded">
                    <span className="flex items-center justify-center w-full h-full font-bold sm:visible md:invisible lg:invisible xl:invisible">MS</span>
                </div>
				<div className="w-[100] h-[60] font-inter align-bottom font-bold md:visible lg:visible xl:visible invisible">
					<h4>Mora</h4>
					<h4>Stokage</h4>
				</div>
			</div>
			{/* Navigation Items */}
			<div className="flex items-end space-x-2">
				{navigationItems.map(item => (
					<button
						key={item.label}
						onClick={() => handleNavClick(item.label)}
						className={`text-lg transition-colors p-0.5 px-2 lg:visible invisible ${
							activeNav === item.label
								? "text-blue-600 bg-zinc-100 rounded border-r"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						{item.label}
					</button>
				))}
				{/* Search Bar */}
				<div className="relative w-64 md:visible invisible">
					<Input
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						placeholder="Search..."
						className="w-full rounded-full bg-gray-50 pl-4 pr-10 text-zinc-800"
					/>
					{searchQuery && (
						<Button
							variant="ghost"
							size="sm"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
							onClick={() => setSearchQuery("")}
						>
							<XIcon className="w-4 h-4 text-black" />
						</Button>
					)}
				</div>
                <div>
                    <Button 
                        className="bg-zinc-100 hover:bg-zinc-200"
                        onClick={(e)=>{setSearchClick(!searchClick)}}
                    >
                        <Search className="text-zinc-800"/>
                    </Button>
                    {searchClick && <Input/>}
                    
                </div>
			</div>
            {/** sm and md screen */}

		</header>
	);
}
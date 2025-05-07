"use client";
import Link from 'next/link';
import { InfoIcon, SendIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [activeNav, setActiveNav] = useState('Chat');
  const [searchQuery, setSearchQuery] = useState('');
  const navigationItems = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "Chat", route: "/chat" },
    { label: "Stock", route: "/stock" },
    { label: "Employee", route: "/employee" }
  ];
  const handleNavClick = (label: string) => {
    setActiveNav(label);
    console.log(`Navigate to ${label}`);
  };
  return (
    <>
      <header 
      className=
        {`
          after:w-full after:h-[1px] after:rounded-full after:absolute after:bottom-0 after:bg-zinc-500
          relative pb-1 w-full mt-2 flex justify-between
          `}
      >
        {/* Logo */}
        <div id="icon" className="grid grid-cols-2 grid-rows-1 w-[150] align-center">
          <div className="w-[40] h-[40] bg-[#1D1C24] rounded"></div>
          <div className="w-[100] h-[60] font-inter align-bottom font-bold">
            <h4>Mora</h4>
            <h4>Stokage</h4>
          </div>
        </div>
        {/* Navigation Items */}
        <div className="flex items-end space-x-2">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.label)}
              className={`text-lg transition-colors p-0.5 px-2 ${
                activeNav === item.label
                  ? 'text-blue-600 bg-zinc-100 rounded border-r'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Search Bar */}
          <div className="relative w-64">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-full bg-gray-50 pl-4 pr-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
                onClick={() => setSearchQuery('')}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>
    </>

  );
}

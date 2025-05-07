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
        "after:bg-gray-900 after:w-full after:h-[3px] after:rounded-full after:absolute after:bottom-0 relative pb-2 w-full mt-2"
      >
        <div id="icon" className="grid grid-cols-2 grid-rows-1 w-[150] align-center">
          <div className="w-[40] h-[40] bg-[#1D1C24] rounded"></div>
          <div className="w-[100] h-[60] font-inter align-bottom font-bold">
            <h4>Mora</h4>
            <h4>Stokage</h4>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.label)}
              className={`text-lg font-medium transition-colors ${
                activeNav === item.label
                  ? 'text-blue-600'
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

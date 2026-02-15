"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { SelectProps } from "@/types";

export function Select({ options, onChange, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getOptionLabel = (id: string) =>
    options.find((o) => o.id === id)?.label ?? id;

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none group"
      >
        <span>{getOptionLabel(value)}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          strokeWidth={3}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 min-w-30 bg-[#212121] border border-white/10 rounded-xl py-1.5 shadow-xl z-50">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onChange(option.id);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-200 hover:bg-white/5 transition-colors"
            >
              {option.label}
              {value === option.id && (
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const NewsUpdate = () => {
  const updates = [
    {
      title: "Enroll today!",
      details: "We are open from Monday-Saturday 8am to 4pm."
    },
    {
      title: "SUMMER CLASS ADMISSION OPEN",
      details: "✨Our SUMMER CLASSES 2026 are officially OPEN! 🎉"
    },
    {
      title: "VISIT US TODAY",
      details: "At Seya Business Center Prk 8 Poblacion, Nabunturan, DDO (same building with Mr. DIY)"
    }
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    if (firstItemRef.current) {
      setItemHeight(firstItemRef.current.clientHeight);
    }
  }, []);

  const scrollNext = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemHeight) return;

    const totalHeight = itemHeight * updates.length;
    const nextTop = container.scrollTop + itemHeight;

    if (nextTop >= totalHeight) {
      container.scrollTo({ top: totalHeight, behavior: 'smooth' });
      window.setTimeout(() => {
        if (container.scrollTop >= totalHeight) {
          container.scrollTop = container.scrollTop - totalHeight;
        }
      }, 400);
    } else {
      container.scrollTo({ top: nextTop, behavior: 'smooth' });
    }
  }, [itemHeight, updates.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !itemHeight) return;

    const intervalId = window.setInterval(scrollNext, 4500);
    return () => window.clearInterval(intervalId);
  }, [itemHeight, scrollNext]);

  return (
    <div className="w-full bg-linear-to-r from-violet-700 to-fuchsia-600 text-white shadow-sm overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative">
        <div className="md:w-3/4 overflow-hidden relative h-14 flex items-center justify-center">
          <div ref={containerRef} className="w-full h-full overflow-hidden">
            <div className="flex flex-col w-full">
              {[...updates, ...updates].map((item, index) => (
                <div
                  key={index}
                  ref={index === 0 ? firstItemRef : null}
                  className="h-14 flex flex-col justify-center items-center px-8 shrink-0 text-center"
                >
                  <span className="text-2xl font-extrabold tracking-tight uppercase leading-none">
                    {item.title}
                  </span>
                  <span className="text-base font-light opacity-90 italic mt-1 truncate">
                    {item.details}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center p-2 border-2 border-white rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Scroll news updates"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdate;

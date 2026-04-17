"use client";

import React from 'react';

const ActivitiesShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our School Activities
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          From hands-on activities to joyful discoveries, our little learners grow 
          with confidence, creativity, and excitement every day.
        </p>

        {/* Portrait Video Showcase Section */}
        <div className="flex justify-center mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 w-full max-w-[400px] aspect-[9/16]">
            {/* The 'aspect-[9/16]' utility ensures the container stays in portrait mode.
               'max-w-[400px]' prevents it from becoming too large on desktop screens.
            */}
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/activity_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
           
          </div>
        </div>

        {/* Closing Invitation */}
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 max-w-3xl mx-auto">
          <p className="text-xl text-blue-900 italic font-medium leading-relaxed">
            &quot;Come and experience a place where learning feels like play and every child is inspired to shine!&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesShowcase;
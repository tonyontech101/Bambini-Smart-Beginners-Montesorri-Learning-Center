'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const heroImages = [
  '/images/hero.jpg',
  '/images/hero1.jpg',
  '/images/hero3.jpg',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Clone first image for smooth loop
  const slides = [...heroImages, heroImages[0]]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
      setIsTransitioning(true)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Reset instantly when reaching cloned slide
  useEffect(() => {
    if (index === heroImages.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setIndex(0)
      }, 1000) // match transition duration
    }
  }, [index])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* SLIDER */}
      <div
        className={`absolute inset-0 flex ${
          isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="relative h-full w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Hero ${i}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl text-white">
          
          <div className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold backdrop-blur">
            🌟 Montessori-Certified Learning
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight md:text-6xl">
            Where Little Minds <br />
            <span className="text-violet-300">Naturally Grow</span>
          </h1>

          <p className="mb-8 text-white/85">
            At Bambini Smart Beginners, we follow your child&apos;s natural curiosity —
            learning by touching, exploring, and experimenting for deeper understanding.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-7 py-3.5 font-extrabold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700 hover:shadow-lg"
            >
              Enroll Your Child
            </Link>

            <Link
              href="/about"
              className="rounded-full border-2 border-white px-7 py-3 font-extrabold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              Take a Tour
            </Link>

            
          </div>
          {/* INDICATORS */}
<div className="mt-8 flex justify-center gap-2">
  {heroImages.map((_, i) => (
    <button
      key={i}
      onClick={() => {
        setIndex(i)
        setIsTransitioning(true)
      }}
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        index % heroImages.length === i
          ? 'bg-white scale-110'
          : 'bg-white/40'
      }`}
    />
  ))}
</div>
        </div>
      </div>
    </section>
  )
}
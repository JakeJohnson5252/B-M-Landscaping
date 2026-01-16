"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [phoneMode, setPhoneMode] = useState(false);

  const primaryButton =
    "rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 hover:shadow-md";

  const outlineButton =
    "rounded-md border border-emerald-300/60 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900";

  return (
    <div
      className={`mx-auto min-h-screen flex-col bg-gradient-to-b from-emerald-50/40 to-zinc-50 font-sans text-zinc-900 dark:from-zinc-950 dark:to-black dark:text-zinc-100
        ${
          phoneMode
            ? "max-w-[375px] border-x border-emerald-300 dark:border-zinc-800"
            : ""
        }
      `}
    >
      {/* Header */}
      <header className="border-b border-emerald-200/60 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
            B&amp;M Landscaping
          </h1>

          <div className="flex items-center gap-6">
          {/* Mode Toggle Group */}
          <div className="flex gap-2">
            <button
              onClick={() => setPhoneMode(false)}
              className={phoneMode ? outlineButton : primaryButton}
            >
              Computer
            </button>

            <button
              onClick={() => setPhoneMode(true)}
              className={phoneMode ? primaryButton : outlineButton}
            >
              Phone
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link href="/quote" className={primaryButton}>
              Request a Quote
            </Link>

            <Link href="/login" className={primaryButton}>
              Admin Dashboard
            </Link>
          </div>
        </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-transparent to-emerald-100/40 dark:from-emerald-900/10 dark:to-emerald-900/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <h2
            className={`mb-4 font-bold tracking-tight ${
              phoneMode ? "text-3xl" : "text-4xl"
            }`}
          >
            Reliable. Professional.{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Beautiful Results.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Residential and commercial landscaping delivering clean,
            high-quality work that transforms outdoor spaces.
          </p>

          {/* Phone-only CTA */}
          {phoneMode && (
            <div className="mx-auto mt-8 max-w-sm">
              <Link href="/quote" className={primaryButton + " block text-center"}>
                Get a Free Quote
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-14 text-center text-4xl font-bold tracking-tight">
            <span className="border-b-4 border-emerald-500 pb-2">
              Gallery
            </span>
          </h3>

          {/* Podium Image */}
          <div className="mx-auto mb-16 max-w-sm">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-emerald-500 bg-white shadow-lg dark:bg-zinc-950">
              <Image
                src="/car.jpeg"
                alt="B&M Landscaping service vehicle"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Before & After Gallery */}
          <div className="space-y-16">
            {/* Row 1 */}
            <div className="grid gap-10 md:grid-cols-2">
              <div className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="/before.jpg"
                  alt="Before landscaping"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-white">
                  Before
                </span>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-xl border border-emerald-300 bg-white shadow-sm dark:border-emerald-700 dark:bg-zinc-950">
                <Image
                  src="/after.jpg"
                  alt="After landscaping"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  After
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

            {/* Row 2 */}
            <div className="grid gap-10 md:grid-cols-2">
              <div className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="/pwbefore.jpeg"
                  alt="Before pressure washing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-white">
                  Before
                </span>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-xl border border-emerald-300 bg-white shadow-sm dark:border-emerald-700 dark:bg-zinc-950">
                <Image
                  src="/pwafter.jpeg"
                  alt="After pressure washing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  After
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-200/60 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mt-12 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} B&amp;M Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

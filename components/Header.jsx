"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const resultsUrl = "https://www.servlab.tn/login.php";

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.bookAppointment, href: resultsUrl, external: true },
    { name: t.nav.locations, href: "/locations" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 lg:gap-3 group shrink-0"
          >
            <div
              className="w-10 h-10 bg-linear-to-br from-fuchsia-600 to-purple-600
 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden"
            >
              <Image
                src="/images/labo-logo.png"
                alt="Laboratoire Ben Hassen"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-lg lg:text-xl font-bold gradient-text bg-linear-to-br from-fuchsia-600 to-purple-600
 whitespace-nowrap"
            >
              LABO BEN HASSEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors relative group text-sm whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors relative group text-sm whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ),
            )}
          </div>

          {/* CTA Buttons + Language Switcher */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <a
              href={resultsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block"
            >
              <Button variant="primary" size="sm" className="whitespace-nowrap">
                {t.nav.bookNow}
              </Button>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-neutral-100 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-neutral-200 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

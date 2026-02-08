"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const resultsUrl = "https://www.servlab.tn/login.php";

  const features = [
    {
      icon: "📅",
      title: t.home.features.easyBooking.title,
      description: t.home.features.easyBooking.desc,
    },
    {
      icon: "🔒",
      title: t.home.features.securePortal.title,
      description: t.home.features.securePortal.desc,
    },
    {
      icon: "⚡",
      title: t.home.features.fastTurnaround.title,
      description: t.home.features.fastTurnaround.desc,
    },
    {
      icon: "✓",
      title: t.home.features.certified.title,
      description: t.home.features.certified.desc,
    },
  ];

  const services = [
    {
      title: t.services.categories.bloodTests.title,
      description: t.services.categories.bloodTests.desc,
      icon: "🩸",
      tests: "150+ " + t.common.tests,
    },
    {
      title: t.services.categories.urineAnalysis.title,
      description: t.services.categories.urineAnalysis.desc,
      icon: "🧪",
      tests: "30+ " + t.common.tests,
    },
    {
      title: t.services.categories.molecular.title,
      description: t.services.categories.molecular.desc,
      icon: "🧬",
      tests: "50+ " + t.common.tests,
    },
    {
      title: t.services.categories.packages.title,
      description: t.services.categories.packages.desc,
      icon: "📦",
      tests: "15+ " + t.common.tests,
    },
  ];

  const stats = [
    { value: "500K+", label: t.home.stats.testsPerformed },
    { value: "50K+", label: t.home.stats.happyPatients },
    { value: "15+", label: t.home.stats.locations },
    { value: "24/7", label: t.home.stats.support },
  ];

  const testimonials = t.home.testimonialsList.map((item) => ({
    ...item,
    rating: 5,
  }));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-[25%] md:bg-center"
        style={{ backgroundImage: "url('/images/hero-section.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900/40"></div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn text-white">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  ✓ {t.home.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {t.home.heroTitle}{" "}
                <span className="gradient-text">
                  {t.home.heroTitleHighlight}
                </span>
              </h1>
              <p className="text-xl text-neutral-100 leading-relaxed">
                {t.home.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={resultsUrl} target="_blank" rel="noreferrer">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {t.home.viewResults}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {t.home.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl transform -rotate-3 opacity-10"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {t.home.heroCardTitle}
                  </h3>
                  <p className="text-neutral-600">{t.home.heroCardDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.home.whyChoose}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t.home.whyChooseDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.home.ourServices}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t.home.ourServicesDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <span className="text-sm font-medium text-blue-600">
                    {service.tests}
                  </span>
                  <Link
                    href="/services"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {t.home.learnMore} →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg">
                {t.home.viewAllServices}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.home.howItWorks}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t.home.howItWorksDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t.home.steps.book.title}
              </h3>
              <p className="text-neutral-600">{t.home.steps.book.desc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t.home.steps.visit.title}
              </h3>
              <p className="text-neutral-600">{t.home.steps.visit.desc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t.home.steps.results.title}
              </h3>
              <p className="text-neutral-600">{t.home.steps.results.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.home.readyToStart}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.home.readyToStartDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={resultsUrl} target="_blank" rel="noreferrer">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
              >
                {t.home.viewResults}
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                {t.home.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

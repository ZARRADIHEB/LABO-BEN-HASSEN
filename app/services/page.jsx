"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const resultsUrl = "https://www.servlab.tn/login.php";
  const categories = [
    {
      id: "blood-tests",
      title: t.services.categories.bloodTests.title,
      icon: "🩸",
      description: t.services.categories.bloodTests.desc,
      tests: t.services.tests.bloodTests,
    },
    {
      id: "urine-analysis",
      title: t.services.categories.urineAnalysis.title,
      icon: "🧪",
      description: t.services.categories.urineAnalysis.desc,
      tests: t.services.tests.urineAnalysis,
    },
    {
      id: "molecular",
      title: t.services.categories.molecular.title,
      icon: "🧬",
      description: t.services.categories.molecular.desc,
      tests: t.services.tests.molecular,
    },
    {
      id: "packages",
      title: t.services.categories.packages.title,
      icon: "📦",
      description: t.services.categories.packages.desc,
      tests: t.services.tests.packages,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.services.title}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {t.services.description}
          </p>
          <a href={resultsUrl} target="_blank" rel="noreferrer">
            <Button variant="primary" size="lg">
              {t.home.viewResults}
            </Button>
          </a>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container-custom">
          {categories.map((category, index) => (
            <div key={category.id} className={index > 0 ? "mt-20" : ""}>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">{category.icon}</div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {category.title}
                  </h2>
                  <p className="text-lg text-neutral-600">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tests.map((test, testIndex) => (
                  <Card key={testIndex} hover>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold flex-1">
                        {test.name}
                      </h3>
                      {test.badge && (
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                          {test.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-neutral-600 mb-4">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {test.time}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.services.whyChoose}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">
                {t.services.features.fastResults.title}
              </h3>
              <p className="text-neutral-600">
                {t.services.features.fastResults.desc}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3">
                {t.services.features.certified.title}
              </h3>
              <p className="text-neutral-600">
                {t.services.features.certified.desc}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">
                {t.services.features.pricing.title}
              </h3>
              <p className="text-neutral-600">
                {t.services.features.pricing.desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.services.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.services.cta.desc}
          </p>
          <a href={resultsUrl} target="_blank" rel="noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              {t.home.viewResults}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

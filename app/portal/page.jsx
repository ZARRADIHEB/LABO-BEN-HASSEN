"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function PatientPortalPage() {
  const { t } = useLanguage();
  const securityIcons = ["🔐", "✓", "🛡️"];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen py-20">
      <div className="container-custom max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">{t.portal.title}</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              {t.portal.description}
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "🔒",
                  title: t.portal.secureAccess,
                  desc: t.portal.secureAccessDesc,
                },
                {
                  icon: "📊",
                  title: t.portal.viewResults,
                  desc: t.portal.viewResultsDesc,
                },
                {
                  icon: "📥",
                  title: t.portal.downloadReports,
                  desc: t.portal.downloadReportsDesc,
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Info Card */}
          <Card>
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">
                {t.portal.unavailableTitle}
              </h2>
              <p className="text-neutral-600">{t.portal.unavailableBody}</p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full">
                  {t.portal.contactCta}
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Security Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.portal.securityFeatures.map((feature, index) => (
            <Card key={feature.title} className="text-center">
              <div className="text-4xl mb-3">{securityIcons[index]}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

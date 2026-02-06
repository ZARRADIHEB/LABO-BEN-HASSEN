"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const resultsUrl = "https://www.servlab.tn/login.php";

  const values = [
    {
      icon: "🎯",
      title: t.about.values.accuracy.title,
      description: t.about.values.accuracy.desc,
    },
    {
      icon: "🤝",
      title: t.about.values.compassion.title,
      description: t.about.values.compassion.desc,
    },
    {
      icon: "⚡",
      title: t.about.values.efficiency.title,
      description: t.about.values.efficiency.desc,
    },
    {
      icon: "🔒",
      title: t.about.values.privacy.title,
      description: t.about.values.privacy.desc,
    },
  ];

  const certifications = [
    { name: t.about.certificationsList[0], icon: "✓" },
    { name: t.about.certificationsList[1], icon: "🔒" },
    { name: t.about.certificationsList[2], icon: "⭐" },
    { name: t.about.certificationsList[3], icon: "✓" },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: t.about.medicalDirector,
      credentials: "MD, PhD",
    },
    {
      name: "Dr. James Chen",
      role: t.about.chiefPathologist,
      credentials: "MD, FCAP",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: t.about.labDirector,
      credentials: "PhD, DABCC",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.about.title}{" "}
              <span className="gradient-text">{t.about.titleHighlight}</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                {t.about.ourMission}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </Card>
            <Card>
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                {t.about.ourVision}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t.about.visionText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t.about.ourValues}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-neutral-600">
                {t.about.yearsOfExcellence}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">500K+</div>
              <div className="text-neutral-600">
                {t.home.stats.testsPerformed}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-neutral-600">
                {t.home.stats.happyPatients}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">15</div>
              <div className="text-neutral-600">{t.home.stats.locations}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t.about.certifications}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-semibold">{cert.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t.about.meetOurTeam}
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-neutral-600">{member.credentials}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.home.readyToStart}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.home.readyToStartDesc}
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

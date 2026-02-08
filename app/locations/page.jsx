"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function LocationsPage() {
  const { t } = useLanguage();
  const resultsUrl = "https://www.servlab.tn/login.php";
  const locations = [
    {
      name: t.locations.labName,
      address: t.locations.addressLine1,
      city: t.locations.addressLine2,
      phone: "73 460 274",
      email: "labo.benhassen@gmail.com",
      hours: {
        weekday: t.locations.weekdayHoursShort,
        weekend: t.locations.weekendHoursShort,
      },
      services: [
        t.locations.allTests,
        t.locations.homeCollection,
        t.locations.urgentResults,
      ],
      featured: true,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.locations.title}{" "}
            <span className="gradient-text">{t.locations.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {t.locations.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              {t.locations.findNearest}
            </Button>
            <a href={resultsUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg">
                {t.home.viewResults}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-neutral-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title={t.locations.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.2082946154374!2d10.826975076383286!3d35.77025942507726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302134ab5468f0d%3A0x806d570263c274fc!2sLaboratoire%20d&#39;analyses%20m%C3%A9dicales%20Salem%20Ben%20Hassen!5e0!3m2!1sen!2stn!4v1770297644793!5m2!1sen!2stn"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">
            {t.locations.allLocations}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card
                key={index}
                hover
                className={location.featured ? "border-2 border-blue-500" : ""}
              >
                {location.featured && (
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    ⭐ {t.locations.mainLocationBadge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{location.name}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-500">📍</span>
                    <div>
                      <div>{location.address}</div>
                      <div className="text-neutral-600">{location.city}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">📞</span>
                    <span className="text-blue-600">{location.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-500">🕐</span>
                    <div>
                      <div>{location.hours.weekday}</div>
                      <div className="text-neutral-600">
                        {location.hours.weekend}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-neutral-200 pt-4 mb-4">
                  <div className="text-xs font-medium text-neutral-600 mb-2">
                    {t.locations.availableServicesLabel}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, i) => (
                      <span
                        key={i}
                        className="bg-teal-50 text-teal-700 px-2 py-1 rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    {t.common.getDirections}
                  </Button>
                  <a
                    href={resultsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" size="sm" className="w-full">
                      {t.home.viewResults}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Collection */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏠</div>
            <h2 className="text-4xl font-bold mb-6">
              {t.locations.homeCollectionTitle}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              {t.locations.homeCollectionDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold mb-1">
                  {t.locations.homeCollectionFeatures.safe.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t.locations.homeCollectionFeatures.safe.desc}
                </p>
              </Card>
              <Card>
                <div className="text-3xl mb-2">⏰</div>
                <h3 className="font-semibold mb-1">
                  {t.locations.homeCollectionFeatures.flexible.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t.locations.homeCollectionFeatures.flexible.desc}
                </p>
              </Card>
              <Card>
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold mb-1">
                  {t.locations.homeCollectionFeatures.affordable.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t.locations.homeCollectionFeatures.affordable.desc}
                </p>
              </Card>
            </div>
            <a href={resultsUrl} target="_blank" rel="noreferrer">
              <Button variant="primary" size="lg">
                {t.home.viewResults}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.locations.visitCtaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.locations.visitCtaDesc}
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

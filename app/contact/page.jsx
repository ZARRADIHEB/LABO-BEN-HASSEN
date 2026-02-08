"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contact.formSuccess);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: "📞",
      title: t.contact.contactMethods.phone.title,
      details: [
        t.contact.contactMethods.phone.line1,
        t.contact.contactMethods.phone.line2,
        t.contact.contactMethods.phone.line3,
      ],
    },
    {
      icon: "✉️",
      title: t.contact.contactMethods.email.title,
      details: [
        t.contact.contactMethods.email.line1,
        t.contact.contactMethods.email.line2,
        t.contact.contactMethods.email.line3,
      ],
    },
    {
      icon: "💬",
      title: t.contact.contactMethods.liveChat.title,
      details: [
        t.contact.contactMethods.liveChat.line1,
        t.contact.contactMethods.liveChat.line2,
        t.contact.contactMethods.liveChat.line3,
      ],
    },
    {
      icon: "🏥",
      title: t.contact.contactMethods.visit.title,
      details: [
        t.contact.contactMethods.visit.line1,
        t.contact.contactMethods.visit.line2,
        t.contact.contactMethods.visit.line3,
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-neutral-600 text-sm">
                    {detail}
                  </p>
                ))}
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t.contact.sendMessage}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    className="input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formPhone}
                  </label>
                  <input
                    type="tel"
                    className="input"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formSubject}
                  </label>
                  <select
                    className="input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  >
                    <option value="">{t.contact.subjectPlaceholder}</option>
                    <option value="general">
                      {t.contact.subjectOptions.general}
                    </option>
                    <option value="results">
                      {t.contact.subjectOptions.results}
                    </option>
                    <option value="billing">
                      {t.contact.subjectOptions.billing}
                    </option>
                    <option value="complaint">
                      {t.contact.subjectOptions.complaint}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    className="input min-h-[150px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {t.contact.formSubmit}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t.contact.visitTitle}
              </h2>
              <Card>
                <div className="aspect-video bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    title={t.locations.mapTitle}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.2082946154374!2d10.826975076383286!3d35.77025942507726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302134ab5468f0d%3A0x806d570263c274fc!2sLaboratoire%20d&#39;analyses%20m%C3%A9dicales%20Salem%20Ben%20Hassen!5e0!3m2!1sen!2stn!4v1770297644793!5m2!1sen!2stn"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t.locations.labName}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {t.locations.addressLine1}
                  <br />
                  {t.locations.addressLine2}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold text-neutral-800">
                    {t.contact.hoursTitle}
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">
                      {t.contact.hoursWeekdays}
                    </span>
                    <span className="text-neutral-600">
                      {t.contact.hoursWeekdaysTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">
                      {t.contact.hoursSaturday}
                    </span>
                    <span className="text-neutral-600">
                      {t.contact.hoursSaturdayTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">
                      {t.contact.hoursHolidays}
                    </span>
                    <span className="text-neutral-600">
                      {t.contact.hoursHolidaysTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{t.common.phone}:</span>
                    <span className="text-neutral-600">73 460 274</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{t.common.email}:</span>
                    <span className="text-neutral-600">
                      labo.benhassen@gmail.com
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps?ll=35.770031,10.830316&z=14&t=m&hl=en-US&gl=US&mapclient=embed&q=Av.+18+janvier+1952+Monastir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" size="md" className="w-full mt-6">
                    {t.common.getDirections}
                  </Button>
                </a>
              </Card>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold mb-2">
                  {t.contact.emergencyTitle}
                </h4>
                <p className="text-sm text-neutral-700">
                  {t.contact.emergencyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.contact.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.contact.faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-neutral-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

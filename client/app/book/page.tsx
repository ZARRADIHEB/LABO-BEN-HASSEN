"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useLanguage } from "@/lib/LanguageContext";

export default function BookAppointmentPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const services = t.book.services;

  const LOCATION_VALUE =
    "Laboratoire Ben Hassen - Rue du 18 Janvier, 5000 Monastir";
  const locationDisplay = t.book.locationDisplay;

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  const timeSlotLabels = t.book.timeSlots;

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // Fetch booked time slots when date changes
  useEffect(() => {
    const fetchAvailability = async () => {
      if (formData.date) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `${API_URL}/api/appointments/availability`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                location: LOCATION_VALUE,
                date: formData.date,
              }),
            },
          );

          if (response.ok) {
            const data = await response.json();
            setBookedTimes(data.bookedTimes || []);
          }
        } catch (error) {
          console.error("Error fetching availability:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setBookedTimes([]);
      }
    };

    fetchAvailability();
  }, [formData.date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (step < 4) {
      setStep(step + 1);
    } else {
      // Handle final submission - book appointment
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, location: LOCATION_VALUE }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message || t.common.appointmentSuccess);
          // Reset form
          setFormData({
            service: "",
            location: "",
            date: "",
            time: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dob: "",
          });
          setStep(1);
        } else {
          setError(data.error || t.common.bookingFailed);
          alert(data.error || t.common.slotTaken);
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        setError(t.common.bookingFailed);
        alert(t.common.bookingFailed);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[
              t.book.selectService,
              t.book.dateLabel,
              t.book.personalInfo,
              t.book.reviewConfirm,
            ].map((label, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-bold ${
                    step > index + 1
                      ? "bg-teal-600 text-white"
                      : step === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-300 text-neutral-600"
                  }`}
                >
                  {step > index + 1 ? "✓" : index + 1}
                </div>
                <div
                  className={`text-sm ${
                    step === index + 1
                      ? "text-blue-600 font-semibold"
                      : "text-neutral-600"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-teal-600 transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <Card>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t.book.selectService}
                </h2>
                <div className="space-y-3">
                  {services.map((service: string) => (
                    <label
                      key={service}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.service === service
                          ? "border-blue-600 bg-blue-50"
                          : "border-neutral-200 hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="mr-3"
                      />
                      <span className="font-medium">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t.book.chooseDateTime}
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.book.dateLabel}
                    </label>
                    <input
                      type="date"
                      className="input"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.book.timeLabel}
                    </label>
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="ml-3 text-neutral-600">
                          {t.common.loadingTimes}
                        </span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-3">
                        {timeSlots.map((time) => {
                          const isBooked = bookedTimes.includes(time);
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() =>
                                !isBooked && setFormData({ ...formData, time })
                              }
                              disabled={isBooked}
                              className={`p-3 border-2 rounded-lg font-medium transition-all ${
                                isBooked
                                  ? "border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed"
                                  : formData.time === time
                                    ? "border-blue-600 bg-blue-50 text-blue-600 cursor-pointer"
                                    : "border-neutral-200 hover:border-blue-300 cursor-pointer"
                              }`}
                            >
                              {timeSlotLabels[time] ?? time}
                              {isBooked && (
                                <span className="block text-xs mt-1">
                                  {t.common.booked}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t.book.personalInfo}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.book.firstNameLabel}
                    </label>
                    <input
                      type="text"
                      className="input"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.book.lastNameLabel}
                    </label>
                    <input
                      type="text"
                      className="input"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.book.emailLabel}
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
                      {t.book.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      className="input"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      {t.book.dobLabel}
                    </label>
                    <input
                      type="date"
                      className="input"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t.book.reviewConfirm}
                </h2>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                  <div>
                    <div className="text-sm text-neutral-600">
                      {t.book.service}
                    </div>
                    <div className="font-semibold">{formData.service}</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-neutral-600">
                        {t.book.location}
                      </div>
                      <div className="font-semibold">{locationDisplay}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600">
                        {t.book.dateTime}
                      </div>
                      <div className="font-semibold">
                        {formData.date} {t.common.at}{" "}
                        {timeSlotLabels[formData.time] ?? formData.time}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-600">
                      {t.book.patientName}
                    </div>
                    <div className="font-semibold">
                      {formData.firstName} {formData.lastName}
                    </div>
                    <div className="text-sm">
                      {formData.email} • {formData.phone}
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-sm text-teal-800">
                    ✓ {t.book.bookingNote}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={isLoading}
                >
                  ← {t.common.back}
                </Button>
              )}
              <Button
                type="submit"
                variant="primary"
                className={step === 1 ? "ml-auto" : ""}
                isLoading={isLoading}
                disabled={
                  isLoading ||
                  (step === 1 && !formData.service) ||
                  (step === 2 &&
                    (!formData.location || !formData.date || !formData.time))
                }
              >
                {step === 4 ? t.book.confirmBooking : `${t.common.continue} →`}
              </Button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const initialState = { name: "", email: "", message: "" };

function loadRecaptcha(siteKey: string) {
  return new Promise<void>((resolve, reject) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[data-hostao-recaptcha="${siteKey}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA failed to load.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.dataset.hostaoRecaptcha = siteKey;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("reCAPTCHA failed to load."));
    document.head.appendChild(script);
  });
}

export default function ContactForm({
  recaptchaSiteKey,
  source = "hostao-contact-page",
  submitLabel = "Send",
  successMessage = "Thanks — your message was sent successfully.",
}: {
  recaptchaSiteKey?: string;
  source?: string;
  submitLabel?: string;
  successMessage?: string;
}) {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; message: string }>({ type: "idle", message: "" });

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setSubmitting(true);

    let token = "";
    if (recaptchaSiteKey) {
      try {
        await loadRecaptcha(recaptchaSiteKey);
      } catch {
        setSubmitting(false);
        setStatus({ type: "error", message: "reCAPTCHA failed to load. Please try again." });
        return;
      }

      const grecaptcha = window.grecaptcha;
      if (!grecaptcha) {
        setSubmitting(false);
        setStatus({ type: "error", message: "reCAPTCHA is still loading. Please try again." });
        return;
      }

      try {
        token = await new Promise<string>((resolve, reject) => {
          grecaptcha.ready(() => {
            grecaptcha
              .execute(recaptchaSiteKey, { action: "hostao_contact_submit" })
              .then(resolve)
              .catch(reject);
          });
        });
      } catch {
        setSubmitting(false);
        setStatus({ type: "error", message: "reCAPTCHA verification failed. Please try again." });
        return;
      }

      if (!token) {
        setSubmitting(false);
        setStatus({ type: "error", message: "reCAPTCHA verification failed. Please try again." });
        return;
      }
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token, source }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send your message.");
      }

      setForm(initialState);
      setStatus({ type: "success", message: successMessage });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Failed to send your message." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0056A7] focus:ring-2 focus:ring-blue-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0056A7] focus:ring-2 focus:ring-blue-50"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0056A7] focus:ring-2 focus:ring-blue-50 resize-none"
        />
      </div>
      {status.type !== "idle" ? (
        <div className={`text-sm text-center ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </div>
      ) : null}
      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

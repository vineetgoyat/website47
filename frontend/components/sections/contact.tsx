"use client";

import * as React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactEmail, offices } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending that — please try again in a moment, or email us directly instead."
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
            Contact
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Tell us what you're building.
          </h2>
          <p className="mt-3 max-w-sm text-muted-foreground">
            We usually reply within a day — no sales queue, just whoever
            picks it up first.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <Mail size={15} />
              </span>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a href={`mailto:${contactEmail}`} className="text-sm text-muted-foreground hover:text-primary">
                  {contactEmail}
                </a>
              </div>
            </div>
            {offices.map((o) => (
              <div key={o.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <MapPin size={15} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{o.label}</p>
                  <p className="text-sm text-muted-foreground">{o.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" name="firstName" placeholder="Ada" />
            <Field label="Last name" name="lastName" placeholder="Lovelace" />
          </div>
          <div className="mt-4">
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send message"}
            <Send size={15} />
          </Button>

          {status === "success" && (
            <p className="mt-3 text-sm text-primary">
              Thanks — that landed in our inbox. We'll reply within a day.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-destructive">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

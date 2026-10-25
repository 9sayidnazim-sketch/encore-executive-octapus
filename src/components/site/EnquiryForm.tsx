import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BUSINESS, whatsappLink, SERVICES, FLEET } from "@/lib/site";
import { Icon } from "./Shell";

type JourneyType = "One Way" | "Hourly" | "Airport Transfer";

const field =
  "w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-3 text-body-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-container focus:bg-white focus:outline-none";
const label =
  "block text-label-eyebrow font-label-eyebrow text-neutral-500 uppercase tracking-wider mb-1.5";

/**
 * Builds a structured booking enquiry and hands it to Encore via WhatsApp (the
 * contact channel published on the original website). Nothing is confirmed until Encore replies.
 */
export function EnquiryForm({
  mode = "booking",
  defaultService,
}: {
  mode?: "booking" | "contact";
  defaultService?: string | undefined;
}) {
  const formId = useId();
  const [type, setType] = useState<JourneyType>(
    defaultService === "airport-transfers" ? "Airport Transfer" : "One Way",
  );
  const [ret, setRet] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("name") || !v("phone")) return setError("Please add your name and a contact number.");
    if (!f.get("privacy")) return setError("Please confirm you have read the Privacy Policy.");
    if (
      mode === "booking" &&
      ret &&
      `${v("returnDate")}T${v("returnTime")}` <= `${v("date")}T${v("time")}`
    ) {
      setError("Return date and time must be after your outward journey.");
      return;
    }
    setError("");
    const lines =
      mode === "contact"
        ? [
            "Encore enquiry",
            `Name: ${v("name")}`,
            `Phone: ${v("phone")}`,
            v("email") && `Email: ${v("email")}`,
            `Topic: ${v("service")}`,
            "",
            v("message"),
          ]
        : [
            `Encore booking enquiry: ${type}`,
            `Name: ${v("name")}`,
            `Phone: ${v("phone")}`,
            v("email") && `Email: ${v("email")}`,
            `Service: ${v("service")}`,
            `Pickup: ${v("from")}`,
            type !== "Hourly" && `Destination: ${v("to")}`,
            type === "Hourly" && `Hours required: ${v("hours")}`,
            `Date & time: ${v("date")} ${v("time")}`,
            `Passengers: ${v("pax")}`,
            v("bags") && `Luggage: ${v("bags")}`,
            type === "Airport Transfer" && v("flight") && `Flight number: ${v("flight")}`,
            `Vehicle preference: ${v("vehicle")}`,
            ret && `Return journey: ${v("returnDate")} ${v("returnTime")}`,
            v("message") && `Notes: ${v("message")}`,
          ];
    window.open(whatsappLink(lines.filter(Boolean).join("\n")), "_blank", "noopener");
    setSent(true);
  }

  if (sent)
    return (
      <div className="bg-white text-neutral-900 rounded-[24px] p-8 md:p-10 space-y-4 border border-neutral-100">
        <span className="w-12 h-12 rounded-full bg-primary-container/15 text-primary-container flex items-center justify-center">
          <Icon name="mark_chat_read" />
        </span>
        <h3 className="text-headline-sm font-headline-sm">Your enquiry is ready to send</h3>
        <p className="text-body-md text-neutral-600">
          We have opened WhatsApp with your details. Press send to share them with Encore. Your
          journey is not booked until Encore confirms it with you. If WhatsApp did not open, please
          call{" "}
          <a href={BUSINESS.phoneHref} className="font-bold text-primary-container">
            {BUSINESS.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-label-button font-label-button text-primary-container"
        >
          Edit my enquiry
        </button>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white text-neutral-900 rounded-[24px] p-6 md:p-10 border border-neutral-100 shadow-[0_24px_54px_-10px_rgba(0,0,0,0.45)] space-y-6"
    >
      {mode === "booking" && (
        <div className="inline-flex flex-wrap p-1 bg-neutral-100 rounded-full border border-neutral-200">
          {(["One Way", "Hourly", "Airport Transfer"] as JourneyType[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`px-5 py-2 rounded-full text-label-button font-label-button ${type === t ? "orange-gradient-cta text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className={label} htmlFor={formId + "-name"}>
            Full name *
          </label>
          <input id={formId + "-name"} name="name" className={field} autoComplete="name" required />
        </div>
        <div>
          <label className={label} htmlFor={formId + "-phone"}>
            Phone / mobile *
          </label>
          <input
            id={formId + "-phone"}
            name="phone"
            type="tel"
            className={field}
            autoComplete="tel"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor={formId + "-email"}>
            Email
          </label>
          <input
            id={formId + "-email"}
            name="email"
            type="email"
            className={field}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={label} htmlFor={formId + "-service"}>
            Service
          </label>
          <select
            id={formId + "-service"}
            name="service"
            className={field}
            defaultValue={SERVICES.find((s) => s.slug === defaultService)?.title ?? "Not sure yet"}
          >
            <option>Not sure yet</option>
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            {mode === "contact" && <option>Business account</option>}
          </select>
        </div>
        {mode === "booking" && (
          <div>
            <label className={label} htmlFor={formId + "-vehicle"}>
              Vehicle preference
            </label>
            <select
              id={formId + "-vehicle"}
              name="vehicle"
              className={field}
              defaultValue="No preference"
            >
              <option>No preference</option>
              {FLEET.map((v) => (
                <option key={v.slug}>
                  {v.name} (up to {v.passengers})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {mode === "booking" && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={label} htmlFor={formId + "-from"}>
                {type === "Airport Transfer" ? "Pickup (address or airport)" : "Pickup location"}
              </label>
              <input
                id={formId + "-from"}
                name="from"
                required
                className={field}
                placeholder="e.g. Horbury, Wakefield"
              />
            </div>
            {type === "Hourly" ? (
              <div>
                <label className={label} htmlFor={formId + "-hours"}>
                  Hours required
                </label>
                <select id={formId + "-hours"} name="hours" className={field}>
                  {[2, 3, 4, 5, 6, 8, 10, 12].map((h) => (
                    <option key={h}>{h} hours</option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className={label} htmlFor={formId + "-to"}>
                  Destination
                </label>
                <input
                  id={formId + "-to"}
                  name="to"
                  required
                  className={field}
                  placeholder="e.g. Manchester Airport T2"
                />
              </div>
            )}
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <div>
              <label className={label} htmlFor={formId + "-date"}>
                Date
              </label>
              <input
                id={formId + "-date"}
                name="date"
                type="date"
                required
                min={new Date().toLocaleDateString("en-CA")}
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor={formId + "-time"}>
                Time
              </label>
              <input id={formId + "-time"} name="time" type="time" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor={formId + "-pax"}>
                Passengers
              </label>
              <select id={formId + "-pax"} name="pax" className={field}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor={formId + "-bags"}>
                Luggage
              </label>
              <input
                id={formId + "-bags"}
                name="bags"
                className={field}
                placeholder="e.g. 2 large"
              />
            </div>
          </div>
          {type === "Airport Transfer" && (
            <div className="md:w-1/2">
              <label className={label} htmlFor={formId + "-flight"}>
                Flight number
              </label>
              <input
                id={formId + "-flight"}
                name="flight"
                className={field}
                placeholder="e.g. BA1234"
              />
            </div>
          )}
          <label className="flex items-center gap-2 text-body-sm text-neutral-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={ret}
              onChange={(e) => setRet(e.target.checked)}
              className="rounded border-neutral-300"
            />{" "}
            Return journey required
          </label>
          {ret && (
            <div className="grid gap-4 grid-cols-2 md:w-1/2">
              <div>
                <label className={label} htmlFor={formId + "-returnDate"}>
                  Return date
                </label>
                <input
                  id={formId + "-returnDate"}
                  name="returnDate"
                  type="date"
                  required
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor={formId + "-returnTime"}>
                  Return time
                </label>
                <input
                  id={formId + "-returnTime"}
                  name="returnTime"
                  type="time"
                  required
                  className={field}
                />
              </div>
            </div>
          )}
        </>
      )}

      <div>
        <label className={label} htmlFor={formId + "-message"}>
          {mode === "contact" ? "Your message" : "Additional notes"}
        </label>
        <textarea id={formId + "-message"} name="message" rows={4} className={field} />
      </div>

      <label className="flex items-start gap-2 text-body-sm text-neutral-600 cursor-pointer">
        <input type="checkbox" name="privacy" className="mt-0.5 rounded border-neutral-300" />
        <span>
          I have read and agree to the{" "}
          <Link to="/privacy-policy" className="underline text-neutral-900">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && (
        <p role="alert" className="text-body-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="orange-gradient-cta text-neutral-900 font-label-button text-label-button px-8 py-3.5 rounded-full inline-flex items-center gap-2"
        >
          {mode === "contact" ? "Send Enquiry" : "Send Booking Enquiry"}{" "}
          <Icon name="arrow_forward" className="text-[18px]" />
        </button>
        <span className="text-body-sm text-neutral-500">
          Sent via WhatsApp. Prefer to talk? Call{" "}
          <a href={BUSINESS.phoneHref} className="font-bold text-neutral-900">
            {BUSINESS.phone}
          </a>
        </span>
      </div>
    </form>
  );
}

import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EnquiryForm } from "@/components/site/EnquiryForm";
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));
vi.mock("@/components/site/Shell", () => ({ Icon: () => <span /> }));
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe("Enquiry handoff", () => {
  it("requires booking details and validates optional email", () => {
    render(<EnquiryForm />);
    expect(screen.getByLabelText("Pickup location")).toBeRequired();
    expect(screen.getByLabelText("Destination")).toBeRequired();
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "invalid" } });
    expect(screen.getByLabelText("Email")).toBeInvalid();
  });
  it("prepares the chosen journey for WhatsApp without confirming a booking", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    const { container } = render(<EnquiryForm />);
    fireEvent.click(screen.getByRole("button", { name: "Hourly" }));
    expect(screen.queryByLabelText("Destination")).toBeNull();
    fireEvent.change(screen.getByLabelText("Full name *"), { target: { value: "Test Traveller" } });
    fireEvent.change(screen.getByLabelText("Phone / mobile *"), {
      target: { value: "07700000000" },
    });
    fireEvent.click(container.querySelector('[name="privacy"]')!);
    fireEvent.submit(container.querySelector("form")!);
    expect(open).toHaveBeenCalledTimes(1);
    const url = String(open.mock.calls[0]![0]);
    expect(decodeURIComponent(url)).toContain("Encore booking enquiry: Hourly");
    expect(decodeURIComponent(url)).toContain("Hours required: 2 hours");
    expect(screen.getByText(/Your journey is not booked/)).toBeInTheDocument();
  });
});

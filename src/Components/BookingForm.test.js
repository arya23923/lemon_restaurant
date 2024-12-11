import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the static heading in BookingForm", () => {
    render(<BookingForm availableTimes={[]} dispatchAvailableTimes={() => {}} />);

    const headingElement = screen.getByText(/Book reservation/i);
    expect(headingElement).toBeInTheDocument();


    const dateInput = screen.getByText(/Pick a date/i);
    expect(dateInput).toBeInTheDocument();

});

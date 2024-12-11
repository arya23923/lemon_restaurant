import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatchAvailableTimes }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [people, setPeople] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (date) => {
        setStartDate(date);

        dispatchAvailableTimes({ type: "UPDATE", date });
    };

    return (
        <div className="form-reservation">
            <form>
                <h1>Book reservation</h1>
                <div className="spanning">
                    <label htmlFor="date">Pick a date: </label>
                    <DatePicker
                        selected={startDate}
                        minDate={new Date()}
                        onChange={handleDateChange}
                        required
                    />
                    <br />
                </div>
                <div className="spanning">
                    <label htmlFor="time">Select Time: </label>
                    <select id="res-time">
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <br />
                </div>
                <div className="spanning">
                    <label htmlFor="res-guests">Number of guests: </label>
                    <input
                        type="number"
                        placeholder="1"
                        min={1}
                        max={10}
                        id="guest"
                        value={people}
                        className="noscroll"
                        onChange={(e) => setPeople(e.target.value)}
                        required
                    />
                    <br />
                </div>
                <div className="spanning">
                    <label htmlFor="occasion">Occasion: </label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                    <br />
                </div>
                <button type="submit">Make your reservation</button>
            </form>
        </div>
    );
};

export default BookingForm;

import React, { useState }  from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css'

const Booking = () => {
    const initialTimes = [
        "17:00 PM",
        "18:00 PM",
        "19:00 PM",
        "20:00 PM",
        "21:00 PM",
        "22:00 PM"
    ];
    const [availableTimes, setAvailableTimes] = useState([...initialTimes]);
    const [startDate, setStartDate] = useState(new Date());
    const [people, setPeople] = useState(1);
    const [occasion, setOccasion] = useState("");

    return(
        <div className="form-reservation">
            <form>
                <div className="spanning">
                    <label htmlFor="date">Pick a date : </label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required/><br />
                </div>
                <div className="spanning">
                    <label htmlFor="time">Select Time : </label>
                    <select id="res-time" value={availableTimes} onChange={(time) => setAvailableTimes(time)}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select><br />
                </div>
                <div className="spanning">
                    <label htmlFor="res-guests">Number of guests : </label>
                    <input type="number" placeholder="1" min={1} max={10} id="guest" value={people} className="noscroll" onChange={(number) => setPeople(number)} required/><br />
                </div>
                <div className="spanning">
                    <label htmlFor="occasion">Occasion : </label>
                    <select id="occasion" value={occasion} onChange={(occasion) => setOccasion(occasion)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select><br />
                </div>
                <button type="submit">Make your reservation</button>
            </form>
        </div>
    )
};

export default Booking;
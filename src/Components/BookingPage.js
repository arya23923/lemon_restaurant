import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const initialTimes = [
    "17:00 PM",
    "18:00 PM",
    "19:00 PM",
    "20:00 PM",
    "21:00 PM",
    "22:00 PM"
];


export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE":

            return initialTimes;
        default:
            return state;
    }
};

const BookingPage = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatch}
            />
        </>
    );
};

export default BookingPage;

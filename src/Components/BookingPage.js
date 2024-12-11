import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import {fetchAPI} from "../fakeAPI"

const initialTimes = [
    "17:00 PM",
    "18:00 PM",
    "19:00 PM",
    "20:00 PM",
    "21:00 PM",
    "22:00 PM"
];


const updateTimes = (date) => {
    return async (dispatch) => {
        const availableTimes = fetchAPI(date);

        dispatch({
            type: 'UPDATE_TIMES',
            payload: availableTimes
        });
    };
};

const BookingPage = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    return (
        <>
            <BookingForm
                availableTimes={initialTimes}
                dispatchAvailableTimes={dispatch}
            />
        </>
    );
};

export default BookingPage;

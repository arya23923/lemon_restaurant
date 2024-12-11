import { initializeTimes, updateTimes } from "./BookingPage";

// describe("initializeTimes", () => {
//     test("should return the correct initial times array", () => {
//         const expectedTimes = [
//             "17:00 PM",
//             "18:00 PM",
//             "19:00 PM",
//             "20:00 PM",
//             "21:00 PM",
//             "22:00 PM"
//         ];
//         const result = initializeTimes();
//         expect(result).toEqual(expectedTimes);
//     });
// });

describe("updateTimes", () => {
    test("should return the same state when provided with an UPDATE action", () => {
        const initialState = [
            "17:00 PM",
            "18:00 PM",
            "19:00 PM",
            "20:00 PM",
            "21:00 PM",
            "22:00 PM"
        ];
        const action = { type: "UPDATE", date: new Date() };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });

    test("should return the current state for an unknown action type", () => {
        const initialState = [
            "17:00 PM",
            "18:00 PM",
            "19:00 PM",
            "20:00 PM",
            "21:00 PM",
            "22:00 PM"
        ];
        const action = { type: "UNKNOWN_ACTION" };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });
});

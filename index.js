"use strict";
function calculateAgeDetailed(birthDate) {
    // Get today's date
    const today = new Date();
    // Check for invalid birthDate (future date)
    if (birthDate > today) {
        throw new Error("Invalid birth date. Cannot be in the future.");
    }
    // Calculate time difference in milliseconds
    const timeElapsed = today.getTime() - birthDate.getTime();
    // Calculate years
    const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
    // Calculate remaining milliseconds after years
    const remainingMilliseconds = timeElapsed % (1000 * 60 * 60 * 24 * 365);
    // Calculate months (consider 30 days per month for simplicity)
    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
    // Calculate remaining milliseconds after months
    const remainingDaysMilliseconds = remainingMilliseconds % (1000 * 60 * 60 * 24 * 30);
    // Calculate days
    const days = Math.floor(remainingDaysMilliseconds / (1000 * 60 * 60 * 24));
    // Return age object
    return { years, months, days };
}
const birthDate0 = new Date(2007, 1, 11); // Year, Month (0-indexed), Day
const age0 = calculateAgeDetailed(birthDate0);
console.log("Age:", age0); // { years: 33, months: 6, days: 2 }

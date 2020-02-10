"use strict";

module.exports = function isPremium(client) {
    if (client.location === "Paris" && client.lastYearCAInEuros > 150000) {
        return false;
    }
    
    return client.lastYearCAInEuros > 50000 
        || client.location === "Paris"
        || client.firstName.toLowerCase() === "camille";
}
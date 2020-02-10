"use strict";

const isPremium = require("./isPremium");

describe("isPremium", () => {
    it("should return true if the client realized more than 50K of CA", () => {
        
        // given
        const clientWithMoreThan50K = {
            firstName: "Georges",
            lastYearCAInEuros: "51000",
            location: "Dijon"
        };

        // when
        const res = isPremium(clientWithMoreThan50K);

        // then
        expect(res).toBe(true);
    });

    it("should return true if the client is named Camille", () => {
        
        // given
        const Camille = {
            firstName: "Camille",
            lastYearCAInEuros: "2000",
            location: "Dijon"
        };

        // when
        const res = isPremium(Camille);

        // then
        expect(res).toBe(true);
    });

    it("should return true if the client is named camille", () => {
        
        // given
        const Camille = {
            firstName: "camille",
            lastYearCAInEuros: "2000",
            location: "Dijon"
        };

        // when
        const res = isPremium(Camille);

        // then
        expect(res).toBe(true);
    });

    it("should return true if the client is named CAMILLE", () => {
        
        // given
        const Camille = {
            firstName: "camille",
            lastYearCAInEuros: "2000",
            location: "Dijon"
        };

        // when
        const res = isPremium(Camille);

        // then
        expect(res).toBe(true);
    });

    it("should return true if the client lives in Paris", () => {
        
        // given
        const livesInParis = {
            firstName: "Goerges",
            lastYearCAInEuros: "2000",
            location: "Paris"
        };

        // when
        const res = isPremium(livesInParis);

        // then
        expect(res).toBe(true);
    });

    it("should return false if the client lives in Paris and made more than 150k of CA", () => {
        
        // given
        const livesInParis = {
            firstName: "Goerges",
            lastYearCAInEuros: "160000",
            location: "Paris"
        };

        // when
        const res = isPremium(livesInParis);

        // then
        expect(res).toBe(false);
    });
});
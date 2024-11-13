const axios = require("axios");

const BASE_URL = "https://swapi.dev/api/";

describe("Star Wars API Tests", () => {
    test("1. Retrieve all planets", async () => {
        const response = await axios.get(`${BASE_URL}planets/`);
        expect(response.status).toBe(200);
        expect(response.data.results.length).toBeGreaterThan(0);
    });

    test("2. Retrieve a specific planet (Tatooine)", async () => {
        const response = await axios.get(`${BASE_URL}planets/1/`);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("Tatooine");
    });

    test("3. Retrieve all starships", async () => {
        const response = await axios.get(`${BASE_URL}starships/`);
        expect(response.status).toBe(200);
        expect(response.data.results.length).toBeGreaterThan(0);
    });

    test("4. Retrieve a specific starship (Millennium Falcon)", async () => {
        const response = await axios.get(`${BASE_URL}starships/10/`);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("Millennium Falcon");
    });

    test("5. Retrieve all films", async () => {
        const response = await axios.get(`${BASE_URL}films/`);
        expect(response.status).toBe(200);
        expect(response.data.results.length).toBeGreaterThan(0);
    });

    test("6. Retrieve a specific film (A New Hope)", async () => {
        const response = await axios.get(`${BASE_URL}films/1/`);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe("A New Hope");
    });

    test("7. Test a non-existent route (heroes)", async () => {
        try {
            await axios.get(`${BASE_URL}heroes/`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test("8. Retrieve characters from a film", async () => {
        const response = await axios.get(`${BASE_URL}films/1/`);
        expect(response.status).toBe(200);
        expect(response.data.characters.length).toBeGreaterThan(0);
    });

    test("9. Retrieve vehicles", async () => {
        const response = await axios.get(`${BASE_URL}vehicles/`);
        expect(response.status).toBe(200);
        expect(response.data.results.length).toBeGreaterThan(0);
    });

    test("10. Verify a character's details (Luke Skywalker)", async () => {
        const response = await axios.get(`${BASE_URL}people/1/`);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("Luke Skywalker");
    });
});

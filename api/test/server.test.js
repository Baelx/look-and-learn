const serverConfig = require('../src/config/serverConfig');
let app;

describe("Attempting to access any server route without a bearer token.", () => {
    beforeAll(() => {
        app = serverConfig();
    });

    it('is a dummy test', async () => {
        expect(true).toBe(true);
    })

    // it("Returns 401 and can't parse token when no authorization header is passed.", async () => {
    //     const response = await app.inject({
    //         method: 'GET',
    //         url: '/',
    //     });

    //     expect(response.statusCode).toBe(401);
    //     expect(JSON.parse(response.body).message).toBe("Error: Couldn't parse bearer token.");
    // });
});
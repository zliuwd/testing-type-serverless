import { app } from '../../../index';
import * as request from "supertest";

describe("GET testMsg", () => {
    it("/restful/test route", async () => {
        const expectedMsg = 'this is the restful api return msg'
        const result = await request(app).get("/restful/test");
        expect(result.status).toEqual(200);
        expect(result.text).toEqual(expectedMsg);
    });
});

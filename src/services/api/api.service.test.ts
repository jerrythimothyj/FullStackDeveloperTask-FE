import { ajaxPost, instance } from "./api.service"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(instance)

describe('APIService', () => {
    afterEach(() => {
        mock.reset()
    })

    it("it should be able to call a post api based on the given url and body", async () => {
        mock.onPost('http://localhost:4100/api/search').reply(200);
        const apiResponse = await ajaxPost('search', { "name": "test", "salary": "123", "age": "23" })
        expect(apiResponse.status).toBe(200);
    })
})
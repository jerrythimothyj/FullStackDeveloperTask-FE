import { fetchGithubUsers } from "./github.service"
import MockAdapter from "axios-mock-adapter"
import { instance } from "../api/api.service"

const mock = new MockAdapter(instance)

describe('Github service', () => {
    afterEach(() => {
        mock.reset()
    })

    it("it should be able to call a get api based on the given url", async () => {
        mock.onPost('http://localhost:4100/api/' + "search").reply(200, [{ id: 1, employee_name: "AAA" }]);
        const apiResponse = await fetchGithubUsers('jerrythimothy', 'users', 1, 9)
        expect(apiResponse.data.length).toBe(1);
    })
})
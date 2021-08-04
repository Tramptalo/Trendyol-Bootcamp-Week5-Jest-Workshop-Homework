import sinon from 'sinon';
import axios from 'axios';
import { getAllPosts } from '../../services/post-provider';

let sandbox = sinon.createSandbox(); 

describe('Post provider tests', function() {

    beforeEach(() => {
        sandbox;
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('should return empty array if there is no data', () => {

        const expectedData = [];
        const expectedStatusCode = 200;

        sandbox.stub(axios, 'get').resolves(Promise.reject({ status: expectedStatusCode }));

        return getAllPosts().then(result => {
            expect(result).toEqual(expectedData);
        })
    })

    it('should return empty array when 3rd service is giving Not OK Status codes', () => {

        const expectedData = [];
        const expectedStatusCode = 500;

        sandbox.stub(axios, 'get').rejects(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

        return getAllPosts().then(result => {
            expect(result).toEqual(expectedData);
        })
    })

    it('should return data if the status 200 and the service has data', () => {

        const expectedData =  [
            {
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            },
            {
            'userId': 1,
            'id': 2,
            'title': 'qui est esse',
            'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
            }
        ]

        const expectedStatusCode = 200;

        sandbox.stub(axios, 'get').resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData }));

        return getAllPosts().then(result => {
        expect(result).toEqual(expectedData);
        })
    })
})
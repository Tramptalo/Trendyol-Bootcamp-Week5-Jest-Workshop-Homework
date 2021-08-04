import sinon from 'sinon';
import axios from 'axios';

import { getAllPosts } from '../../services/post-provider';
import { getUserPostedMost } from '../../services/post-service';

let sandbox = sinon.createSandbox(); 

describe('Post service tests', function() {

    beforeEach(() => {
        sandbox;
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('should return titles of the posts which belongs to user that posted most', async () => {
        const expectedData = ([
          { userId: 1, id: 1, title: 'sunt aut facere repellat provident', body: 'delectus reiciendis molestia' },
          { userId: 1, id: 2, title: 'ea molestias quasi exercitationem', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 3, title: 'eum et est occaecati', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 4, title: 'nesciunt quas odio', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 5, title: 'magnam facilis', body: 'delectus reiciendis molestia' },
          { userId: 3, id: 6, title: 'optio molestias id quia', body: 'delectus reiciendis molestia' },
          { userId: 3, id: 7, title: 'et ea vero quia', body: 'delectus reiciendis molestia' },
        ]);

        const expectedStatusCode = 200;

        sandbox.stub(axios, 'get').resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

         const posts = await getUserPostedMost();

          expect(posts).toEqual(['eum et est occaecati', 'nesciunt quas odio', 'magnam facilis']);
    })

    it('should return last most posted users title if users have same number of post', async () => {
        const expectedData = ([
          { userId: 1, id: 1, title: 'sunt aut facere repellat provident', body: 'delectus reiciendis molestia' },
          { userId: 1, id: 2, title: 'ea molestias quasi exercitationem', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 3, title: 'eum et est occaecati', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 4, title: 'nesciunt quas odio', body: 'delectus reiciendis molestia' },
          { userId: 2, id: 5, title: 'magnam facilis', body: 'delectus reiciendis molestia' },
          { userId: 3, id: 6, title: 'optio molestias id quia', body: 'delectus reiciendis molestia' },
          { userId: 3, id: 7, title: 'et ea vero quia', body: 'delectus reiciendis molestia' },
          { userId: 3, id: 7, title: 'vero quia', body: 'delectus reiciendis molestia' },
        ]);

        const expectedStatusCode = 200;

        sandbox.stub(axios, 'get').resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

         const posts = await getUserPostedMost();

          expect(posts).toEqual(['optio molestias id quia', 'et ea vero quia', 'vero quia']);
    })

    it('should return empty array if nobody posted', async () => {

        const expectedData = [];

        const expectedStatusCode = 200;

        sandbox.stub(axios, 'get').resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

         const posts = await getUserPostedMost();

          expect(posts).toEqual([]);
    })
    
})

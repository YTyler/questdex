import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    /* 
    For the first argument to rest.get(), you can use notation like 
        - endpoint/* (would cover endpoint/quests, endpoint/items, etc)
        - endpoint/**
        - etc
    instead of a string you could also use regex
    */
    rest.get('some/endpoint/for/getrequests', (req, res, ctx) => res(
        ctx.status(200), 
        ctx.json({
            somekey: 'somevalue',
        },
    )),

    rest.post('some/endpoint/for/postrequests/:param', (req, res, ctx) => { 
        const { myParam } = req.params; // if you wanted to access the parameter for some reason
        return res(
            ctx.status(200),
        ); // for post requests you might not need to return any response
    })),

    rest.get('*', (req, res, ctx) => {
        console.log(`No handler implemented for GET requests for ${req.url}`)
        return res(
            ctx.status(404)
        );
    }),
);

const handleApiCall = (method, endpoint = '*', jsonResponse = {}, statusCode = '200') => {
    server.use( 
        rest[method](endpoint, (req, res, ctx) => res(
            ctx.status(statusCode), 
            ctx.json(jsonResponse),
        )
    ));
};

const handleRequest = {
    get: (endpoint, jsonResponse, statusCode) => handleApiCall('get', endpoint, jsonResponse, statusCode),
    post: (endpoint, jsonResponse, statusCode) => handleApiCall('post', endpoint, jsonResponse, statusCode),
    put: (endpoint, jsonResponse, statusCode) => handleApiCall('put', endpoint, jsonResponse, statusCode),
    delete: (endpoint, jsonResponse, statusCode) => handleApiCall('delete', endpoint, jsonResponse, statusCode),
}

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest, handleApiCall, handleRequest };
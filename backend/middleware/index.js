import nextConnect from 'next-connect';
import databaseMiddleware from './database';

//define all middlwares here that will add to or modify the request object for all API calls

const route = nextConnect().use(nextConnect().use(databaseMiddleware));

export default route;
import { connectToDb } from "../../../server/middleware/database";
import bcrypt from "bcrypt";

const INVALID_CREDENTIALS_ERROR = "Invalid username or password";
const NO_CREDENTIALS_PROVIDED_ERROR = "You must provide a username and password to login.";

export default async function authenticate(username: String, password: String) {
    //Connect to DB. We have to instantiate a connection without using middleware because this route will be used as a function rather than as a HTTP request handler.
    const db = await connectToDb();

    if (!username || !password ) throw NO_CREDENTIALS_PROVIDED_ERROR; 

    const user = await db.collection("users").findOne({"username": username})
    
    //User didn't exist with supplied username
    if (!user) throw INVALID_CREDENTIALS_ERROR;

    //Compare given password with stored password
    if (await bcrypt.compare(password, user.password)) return {};
    else throw INVALID_CREDENTIALS_ERROR;
}
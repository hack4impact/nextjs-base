import bcrypt from 'bcrypt';
import Controller from './Controller';

export default class UserController extends Controller {
    constructor(req, res){
        super(req, res);
    }

    signup() {
        const saltRounds = 5;
        const { body: {username, password} } = this.req;
        if (!username || !password) {
            return this.sendClientError("You must provide a username or password to signup.");
        }

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            await this.db.collection("users").insertOne({
                "username": username,
                "password": hash
            })
            return this.sendMessage("User successfully registered.")
        })

    }
}

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
            // Here, we pass back  error messages to the client via  a query parameter. 
            return this.res.redirect("/auth/signup?error=You must provide a username and password to signup.");
        }

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            await this.db.collection("users").insertOne({
                "username": username,
                "password": hash
            })
            // redirect to login page upon successful registration
            return this.res.redirect("/auth/login");
        })

    }
}

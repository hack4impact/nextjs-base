import bcrypt from 'bcrypt';
import Controller from './Controller';
import * as EmailValidator from 'email-validator';

export default class UserController extends Controller {
    constructor(req, res) {
        super(req, res);
    }

    async signup() {
        const saltRounds = 5;

        // We don't register first name and last name into the database, but you can add that as you see fit
        // If you do, add the necessary validation below.
        const { body: { username, password } } = this.req;

        // Here, we check for any validation errors in the email and password
        const errorMessage = await this.validate(username, password);
        if (errorMessage) {
            // Here, we pass back error messages to the client via a query parameter. 
            return this.res.redirect(`/auth/signup?error=${errorMessage}`);
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

    // Validate email and password, add more validation as you see fit
    async validate(email: string, password: string) {
        const emailValidation = await this.validateEmail(email);
        const passwordValidation = this.validatePassword(password);
        return emailValidation || passwordValidation;
    }

    async validateEmail(email: string) {
        if (!EmailValidator.validate(email)) {
            return "Please provide a valid email address."
        } else if (await this.db.collection("users").findOne({ username: email })) {
            return "This account is already registered. Please log in instead."
        }
        return null;
    }

    validatePassword(password: string) {
        if (password.length < 8) {
            return "Password must be at least 8 characters long."
        }
        return null;
    }


}
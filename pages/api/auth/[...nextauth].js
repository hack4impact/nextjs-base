import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import authenticate from '../users/login';

const options = {
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username"},
                password: { label: "Password", type: "password"}
            },
            authorize: async (credentials) => {
                const { username, password } = credentials;
                try {
                    const user = await authenticate(username, password);
                    return Promise.resolve({});
                }
                catch(error) {
                    return Promise.reject(`/auth/login?error=${error}`);
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        redirect: async(url, baseUrl) => {
            return Promise.resolve("/dashboard");
        }
    }
}

export default (req, res) => NextAuth(req, res, options)


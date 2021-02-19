# nextjs-base
A NextJS boilerplate repo with authentication already baked in.

## Local Development
Out of the box, this full stack web application template has the functionality and views to sign users up, log users in, and track sessions. The only configuration that is required to get this working is to register your own MongoDB instance on a cloud provider of your choice, and then to register the database credentials locally.

I recommend https://cloud.mongodb.com/ as a cloud provider of choice for hobby MongoDB databases.

After creating a database, find the mongodb srv connection string to connect to your database.

Then, replace `<YOUR_DB_URI_HERE>` in the `sample.env.local` file in the root directory with your connection string. Replace `<YOUR_DB_NAME_HERE>` with the name of the database you setup. Finally, rename `sample.env.local` to `env.local`.

Now, the application should be fully operational. Run it in development mode with the command `npm run dev`. 

## Docs
See https://github.com/hack4impact/nextjs-base/wiki/Getting-Started for more documentation.

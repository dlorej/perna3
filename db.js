const Pool = require("pg").Pool;

const proConfig = process.env.DATABASE_URL; //heroku addons
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV === "production" ? proConfig : devConfig,
    ssl: { rejectUnauthorized: false },
});

module.exports = pool;

const Pool = require("pg").Pool;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;

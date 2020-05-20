// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production:{
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL, //give value to url with step 10 inside .env, uri is there and extra stuff in file ?SSL = true
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  }
};

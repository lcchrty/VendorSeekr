const { Pool } = require("pg");
const PG_URI =
  "postgres://gtbolndd:P9ZttUvzONDbjSZLPPeVGxwOlQtMLEuh@stampy.db.elephantsql.com/gtbolndd";

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

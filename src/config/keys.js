module.exports = {
  PORT: process.env.PORT,
  secretKey: process.env.SECRET_KEY,
  maxAge: 24*60*60*1000,
  connectionString: process.env.DB_CONNECT,
  pageLimit: 8
};

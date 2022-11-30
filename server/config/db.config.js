module.exports = {
  HOST: "localhost",
  USER: "shrek",
  PASSWORD: "test-password",
  DB: "swamp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

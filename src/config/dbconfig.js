module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: `#senhaforteformulario$`,
  database: "postgres",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
};

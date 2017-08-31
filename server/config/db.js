let config = {
  dev: {
    username: "",
    password: "",
    database: "database_development",
    dialect: "sqlite",
    storage: "dev_books.sqlite",
    db: 'oi',
    define: {
      underscored: true
    }
  }
}

module.exports = config
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
 'node',
 'root',
 '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

const db = {}

db.Book = require("../models/book")(sequelize,DataTypes)
db.students = require("../models/students")(sequelize,DataTypes)
db.products = require("../models/products")(sequelize,DataTypes)

module.exports = db
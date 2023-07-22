module.exports = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    });
     return Book
  }
  
  
  
module.exports = (sequelize,DataTypes)=>{
    const products = sequelize.define("products", {
        ProductName: {
            type: DataTypes.STRING,
            allowNull: false
          },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        Quntity: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    });
     return products
  }
  
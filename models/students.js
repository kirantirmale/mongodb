module.exports = (sequelize,DataTypes)=>{
    const students = sequelize.define("students", {
       FirstName: {
            type: DataTypes.STRING,
            allowNull: false
          },
       LastName: {
            type: DataTypes.STRING,
            allowNull: false
          },
       RollNo: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    });
     return students
  }
  
  
  
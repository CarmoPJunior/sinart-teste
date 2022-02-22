// import {
//   Model, UUIDV4
// } from "sequelize";

// interface UserAttributes {
//   id: string;
//   name: string;
// }

// module.exports = (sequelize: any, DataTypes: any) => {
//   class User extends Model<UserAttributes>
//     implements UserAttributes {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//   };
//   User.init({
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: "User"
//   });
//   return User;
// };

https:// betech.info/perform-crud-operation-in-nodejs-using-ms-sql-server/

module.exports = (sequelize: any, DataTypes: any) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};

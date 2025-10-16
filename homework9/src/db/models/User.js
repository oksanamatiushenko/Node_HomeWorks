import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

import { email } from "../../constants/validation.js";

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email already exist",
    },
    validate: {
      is: {
        args: email.value,
        msg: email.message,
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mustChangePassword: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user",
  },
});

// User.sync();
// User.sync({alter: true});
// User.sync({force:true}); //удаляет полностью таблицу

export default User;

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
    unique: { args: true, msg: "E-Mail existiert bereits!" },
    validate: { is: { args: email.value, msg: email.message } },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
});

// User.sync({force:true});

export default User;

import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Product.sync();
// Product.sync({alter:true});
// Product.sync({force:true});

export default Product;

import { DataTypes } from "sequelize";

import sequelize from "../../db/sequelize.js";

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Book.sync();
// Book.sync({alter:true}); //изменяет структуру таблицы 
// Book.sync({force:true}); //удаляет полностью таблицу

// await Book.create({title: "Clean Code", author: "Robert C. Martin", year: 2008})
// await Book.create({title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999})
// await Book.create({title: "You Don't Know JS Yet", author: "Kyle Simpson", year: 2020})
// await Book.create({title: "Atomic Habits", author: "James Clear", year: 2018})
// await Book.create({title: "Deep Work", author: "Cal Newport", year: 2016})

export default Book;
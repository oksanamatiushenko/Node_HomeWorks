import { DataTypes } from "sequelize";

import sequelize from "../../db/sequelize.js";

const App = sequelize.define("app", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// App.sync();
// App.sync({alter:true}); //изменяет структуру таблицы (пустой таблицы - легко, заполненной таблицы - идет проверка полей)
// App.sync({force:true}); //удаляет полностью таблицу

// await App.create({name: "Telegram", size: 500})
// await App.create({name: "Viber", size: 400})

export default App;
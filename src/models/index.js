const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.Users = require('./users.model')(sequelize, Sequelize)
db.Profiles = require('./profiles.model')(sequelize, Sequelize)
db.Pets = require('./pets.model')(sequelize, Sequelize)
db.Medias = require('./medias.model')(sequelize, Sequelize)
db.Posts = require('./posts.model')(sequelize, Sequelize)
db.Albums = require('./albums.model')(sequelize, Sequelize)
db.Comments = require('./comments.model')(sequelize, Sequelize)
db.Friends = require('./friends.model')(sequelize, Sequelize)
db.Histories = require('./histories.model')(sequelize, Sequelize)

module.exports = db;

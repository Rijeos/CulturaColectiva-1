/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize('db_cc',config.sequelize.user, config.sequelize.password,config.sequelize.options)
};

// Insert models below
db.VersionPost = db.sequelize.import('../api/versionPost/versionPost.model');
db.Post = db.sequelize.import('../api/post/post.model');
db.User = db.sequelize.import('../api/user/user.model');


db.Post.belongsTo(db.User,{as: 'Autor',foreignKey:'cveAutor'});
db.Post.hasMany(db.VersionPost,{foreignKey:'idArticulo'});

db.User.hasMany(db.Post,{as:"Autor",foreignKey:'cveAutor'});


db.VersionPost.belongsTo(db.Post,{foreignKey:'idArticulo'});
export default db;

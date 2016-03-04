/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.database,
                           config.sequelize.user, 
                           config.sequelize.password,
                           {host:'108.168.213.75', port:3306},
                           {
                              timestamps: true,
                              createdAt: false,
                              updatedAt: 'updateTimestamp',
                              deletedAt: 'destroyTime',
                              paranoid: true
                            })
};

// Insert models below
db.ViewLastVersionPost = db.sequelize.import('../api/viewLastVersionPost/viewLastVersionPost.model');
db.VersionPost = db.sequelize.import('../api/versionPost/versionPost.model');
db.Post = db.sequelize.import('../api/post/post.model');
db.User = db.sequelize.import('../api/user/user.model');


db.Post.belongsTo(db.User,{as: 'Autor',foreignKey:'cveAutor'});
db.Post.hasMany(db.VersionPost,{foreignKey:'idArticulo'});

db.User.hasMany(db.Post,{as:"Autor",foreignKey:'cveAutor'});


db.VersionPost.belongsTo(db.Post,{foreignKey:'idArticulo'});
export default db;

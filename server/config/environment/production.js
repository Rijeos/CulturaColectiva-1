'use strict';

// Production specific configuration
// =================================
module.exports = {

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          22729,

  // Sequelize connecton opions
  sequelize: {
    database:'db_culturacolectiva',
    user: 'cc',
    password:'CC-dvlpmnt'
  }
};

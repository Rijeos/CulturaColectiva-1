'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    idArticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cveAutor: DataTypes.INTEGER,
    fechaPublicacion: DataTypes.DATE,
    idEstatus: DataTypes.INTEGER    
  },{
    timestamps:false,
    freezeTableName:true,
    tableName:"articulo"
  });
}

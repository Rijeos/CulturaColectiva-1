'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    idArticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fechaPublicacion: DataTypes.DATE,
    idEstatus: DataTypes.STRING    
  },{
    timestamps:false,
    freezeTableName:true,
    tableName:"articulo"
  });
}

'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('VersionPost', {
    cveArticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    contenido: DataTypes.STRING,
    urlArticulo: DataTypes.STRING,
    fechaModificacion: DataTypes.DATE,
    metaKeywords: DataTypes.STRING,
    idEstatus: DataTypes.INTEGER,
    revision: DataTypes.INTEGER
  },{
    timestamps:false,
    freezeTableName:true,
    tableName: "versionarticulo"
  });
}

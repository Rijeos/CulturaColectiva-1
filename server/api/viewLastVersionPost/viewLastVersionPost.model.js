'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('ViewLastVersionPost', {
   cveArticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idArticulo:DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    fechaModificacion: DataTypes.DATE,
    contenido:DataTypes.STRING,
    noEtiqueta: DataTypes.INTEGER,
    nombreAutor:DataTypes.STRING 
  },{
    timestamps:false,
    freezeTableName:true,
    tableName: "ultimaversionarticulo"
  });
}


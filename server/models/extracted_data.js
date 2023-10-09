'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class extracted_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  extracted_data.init({
    image_src: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'extracted_data',
  });
  return extracted_data;
};
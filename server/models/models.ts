import { DataTypes, Model, Optional } from 'sequelize';
import { Sequelize } from 'sequelize';

interface ExtractedDataAttributes {
  id: number;
  image_src: string;
  title: string;
}

interface ExtractedDataCreationAttributes extends Optional<ExtractedDataAttributes, 'id'> {}

class ExtractedData extends Model<ExtractedDataAttributes, ExtractedDataCreationAttributes> implements ExtractedDataAttributes {
  public id!: number;
  public image_src!: string;
  public title!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

function initExtractedData(sequelize: Sequelize) {
  ExtractedData.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image_src: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'extracted_data',
    }
  );
}

export { ExtractedData, initExtractedData };

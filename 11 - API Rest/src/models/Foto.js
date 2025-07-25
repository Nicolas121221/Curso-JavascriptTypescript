import Sequelize, { Model } from "sequelize";
import appConfig from '../config/app'


export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field original name can not be null'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field filename can not be null'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return  `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      }
    }, {
      sequelize,
      tableName: 'fotos',
      underscored: true
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
  }
};

import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must have more than 3 characters and less than 255'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must have more than 3 characters and less than 255'
          }
        },
      },
      email: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuando'
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuando'
          },
        },
      },
    }, {
      sequelize,
      tableName: 'alunos',
      underscored: true
    });

    return this;
  }

}

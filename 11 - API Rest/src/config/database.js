require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true,
    'createAt': 'create_at',
    'updatedAt': 'updated_at'
  },
  dialectOptinos: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}

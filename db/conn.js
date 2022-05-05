const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '123123', {
  host: 'localhost',
  dialect: 'mysql',
})

//try {
//  sequelize.authenticate()
//} catch (error) {
//  console.error('Não foi possível conectar:', error)
//}

module.exports = sequelize
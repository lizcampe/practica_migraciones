'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Mascotas', 'peso', Sequelize.INT,{
        AFTER:'TAMAÑO'
    });
}


  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Mascotas', 'peso')
  }
};
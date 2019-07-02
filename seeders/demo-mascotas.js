'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInserte('Mascotas', 
    [
      {
           raza: '',
           precio: 200,
           type: 'escape',
           tamaño: 'chico',
           color: 'negro',
           sexo: 'hembra',
           createdAt:new Date(),
           updateAt: new Date()
    },
    {
      raza: 'perro',
      precio: 200,
      type: 'escape',
      tamaño: 'chico',
      color: 'negro',
      sexo: 'hembra',
      createdAt:new Date(),
      updateAt: new Date()
},
{
  raza: 'tortuga',
  precio: 600,
  type: 'escape',
  tamaño: 'chico',
  color: 'verde',
  sexo: 'macho',
  createdAt:new Date(),
  updateAt: new Date()
},
{
  raza: 'oso',
  precio: 2000000,
  type: 'nop',
  tamaño: 'grande',
  color: 'blanco y negro',
  sexo: 'hembra',
  createdAt:new Date(),
  updateAt: new Date()
},
{
  raza: 'jirafa',
  precio: 400000,
  type: 'escape',
  tamaño: 'grande',
  color: 'naranja',
  sexo: 'macho',
  createdAt:new Date(),
  updateAt: new Date()
},
  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mascotas', null, {});
  }
};
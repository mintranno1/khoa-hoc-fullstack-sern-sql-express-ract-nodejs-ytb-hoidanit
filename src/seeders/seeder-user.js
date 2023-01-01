'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'mintran.hcms@gmail.com',
      password: 'Admin@123',
      firstName: 'Min',
      lastName: 'tran',
      address: 'Ho Chi Minh',
      gender: 1,  
      image: 'https://www.image.com',               
      phoneNumber: '0932507713',   
      roleId: '',    
      positionId: '',                  
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

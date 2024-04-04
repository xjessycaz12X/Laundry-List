const sequelize = require('sequilize');
const { User, Project, Task } = require('../models');

const seedUserData = require('./userData');
const seedTaskData = require('./taskData');
const seedProjectData = require('./projectData');

const seedAll = async () => {
    try {
      await sequelize.sync({ force: true });
      await seedUserData();
      await seedTaskData();
      await seedProjectData();
      console.log('Database seeded successfully.');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      sequelize.close(); // Close the database connection
      process.exit(0); // Exit the process
    }
  };
  
  seedAll();


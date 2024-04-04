const { User } = require('../models');

const userData = [
    {
        name: "Michelle",
        email: "michelle@gmail.com",
        password: "password123"
        
    },
];

const seedUserData = async () => {
    try {
        await User.bulkCreate(userData);
        console.log('User data seeded successfully.');
    } catch (error) {
        console.error('Error seeding user data:', error);
    }
};

module.exports = seedUserData;

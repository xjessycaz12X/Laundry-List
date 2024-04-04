const { Task } = require('../models');

const taskData =[
    {
        name: "Sign-up Sheet",
        description: "Get co-workers to sign up",
        due_date: "2024-05-24",
        priority: 2,
        user_id: 1,
        project_id: 1,
        status: "new",
    },
    {
        name: "Posters",
        description: "Make posters for the pups",
        due_date: "2024-05-5",
        priority: 1,
        user_id: 1,
        project_id: 2,
        status: "new",
    },
    {
        name: "Preparation",
        description: "Get files",
        due_date: "2024-04-15",
        priority: 3,
        user_id: 1,
        project_id: 1,
        status: "new",
    },
    {
        name: "Preparation",
        description: "pack",
        due_date: "2024-04-16",
        priority: 2,
        user_id: 1,
        project_id: 1,
        status: "new",
    },
];

const seedTaskData = async () => {
    try {
        await Task.bulkCreate(taskData);
        console.log('Task data seeded successfully.');
    } catch (error) {
        console.error('Error seeding task data:', error);
    }
};

module.exports = seedTaskData;

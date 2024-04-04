const { Project } = require('../models');

const projectData = [
    {
        name: "Beach Cleanup",
        description: "Company host a beach cleanup day",
        due_date: "2024-06-08",
        user_id: 1,
    },
    {
        name: "Pup Adoption",
        description: "Volunteering @ Griffith",
        due_date: "2024-05-11",
        user_id: 1,
    },
    {
        name: "Meeting Trip",
        description: "Chicago",
        due_date: "2024-04-18",
        user_id: 1,
    },
];

const seedProjectData = async () => {
    try {
        await Project.bulkCreate(projectData);
        console.log('Project data seeded successfully.');
    } catch (error) {
        console.error('Error seeding project data:', error);
    }
};

module.exports = seedProjectData;

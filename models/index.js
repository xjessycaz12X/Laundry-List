const User = require('./user');
const Project = require('./project');
const Task = require('./task');

User.hasMany(Project, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Task, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Project.hasMany(Task, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
});

Project.belongsTo(User, {
    foreignKey: "user_id",
});
Task.belongsTo(Project, {
    foreignKey: "project_id",
});

Task.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Project, Task };



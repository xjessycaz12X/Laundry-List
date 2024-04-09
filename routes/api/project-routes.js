const router = require('express').Router();
const { User, Project, Task } = require('../../models');
const withAuth = require('../../utils/auth');

// Create project
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete project
router.delete("/:id", async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!projectData) {
      res.status(200).json({ message: "No project found with this id!" });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(projectData);
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [User, Task],
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one project
router.get("/:id", async (req, res) => {
  try {
    const projects = await Project.findOne({
      where: { id: req.params.id },
      include: [User, Task],
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update one project
router.put("/:id", async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
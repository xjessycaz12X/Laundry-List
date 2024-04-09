const router = require('express').Router();
const { User, Project, Task } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a task
router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
      status: "new",
    });

    res.status(200).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [User, Project],
    });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get one task
router.get("/:id", async (req, res) => {
  try {
    const tasks = await Task.findOne({
      where: { id: req.params.id },
      include: [User, Project],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update one task
router.put("/:id", async (req, res) => {
  try {
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
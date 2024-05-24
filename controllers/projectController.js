const { Project } = require('../models');
const redis = require('../cache');

exports.insertProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const cacheKey = 'projects';
    const cachedProjects = await redis.get(cacheKey);

    if (cachedProjects) {
      return res.json(JSON.parse(cachedProjects));
    }

    const projects = await Project.findAll();
    await redis.set(cacheKey, JSON.stringify(projects), 'EX', 60); // Cache for 60 seconds
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const ticketController = require('../controllers/ticketController');

// Project routes
router.post('/projects', projectController.insertProject);
router.delete('/projects/:id', projectController.deleteProject);
router.get('/projects', projectController.getProjects);

// Ticket routes
router.post('/tickets', ticketController.insertTicket);
router.delete('/tickets/:id', ticketController.deleteTicket);
router.get('/tickets', ticketController.getTickets);

module.exports = router;

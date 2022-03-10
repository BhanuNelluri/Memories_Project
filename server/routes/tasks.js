import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();
import {  getAllTasks, createTask, deleteTask, updateTask } from '../controllers/tasks.js'

// router.get('/myday',auth, getAllTodaytasks);
router.get('/:id/tasks', getAllTasks);
// router.get('/important',auth, getAllImportant);
router.post('/newTask', auth, createTask);
router.delete('/:id/delete', auth, deleteTask);
router.patch('/update', auth, updateTask);

export default router;
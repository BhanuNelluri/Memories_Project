import mongoose from 'mongoose';
import Task from '../models/tasks.js';
import User from '../models/user.js';

export const getAllTasks = async (req, res) => {
    const {id} = req.params;
    try {
        const tasks = await User.findById(id).populate('tasks');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createTask = async (req, res) => {
    console.log(req.userId);
    const task = req.body;
    const id = req.userId;
    try {
        const newtask = new Task(task);
        const user = await User.findById(id);
        user.tasks.push(newtask);
        await newtask.save();
        await user.save(); 
        const tasks = await User.findById(req.userId).populate('tasks');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}



export const deleteTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { tasks: id } });
        await Task.findByIdAndDelete(id);
        res.json("Deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const task = req.body;
    if (!mongoose.Types.ObjectId.isValid(task._id)) return res.status(404).send('No task with that id');
    try {
        await Task.findByIdAndUpdate(task._id, task, { new: true });
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { tasks: task._id } });
        user.tasks.push(task);
        await user.save();
        res.json(task);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

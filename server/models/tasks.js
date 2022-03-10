import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = Schema({
   todo: {
       type:String,
       required:true
   },
   Important: {
      type:Boolean,
      default:false
   },
   Completed: {
      type:Boolean,
      default:false
   },
    created: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
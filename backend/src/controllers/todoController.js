const todo = require('../models/Todo.js');

const getAllTodos = async (req, res) => {
  try{
    const todos = await todo.find();
    res.status(200).json(todos);
  }
  catch(error){
    res.status(500).json({message: "Server error:", error:error.message});
  }
};

const createTodo = async (req, res) => {
  try{
  const newTodo = new todo(req.body);
  await newTodo.save();
  res.status(201).json(newTodo);
  }
  catch(error){
    const statusCode = error.name === 'ValidationError' ? 400 : 500;
    res.status(statusCode).json({ message: "Error creating todo", error: error.message });
  }
};

const deleteTodo = async (req, res) => {

  try{
    const deletedTodo = await todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      console.log("That todo was not found");
    }
    res.status(200).json({
      success: true,
      message: "Succesfully deleted: ", deletedTodo
    })
  }
  catch(error){
    res.status(404).json({message:"Not Found:", error:error.message});
  }
};

const updateTodo = async (req, res) => {

  try{
    const updatedTodo = await todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTodo) {
      console.log('Could not update Todo');
    }
    res.status(200).json({
      success:true,
      message: "Succesfully updated: ", updatedTodo
    })
  }
  catch(error){
    res.status(404).json({message:"Not Found:", error:error.message});
  }
};

const getATodo = async (req, res) => {
  try{
  const oneTodo = await todo.findById(req.params.id);

  if (!oneTodo){
    return res.status(404).json({message: "Todo not found:", oneTodo});
  }
  res.status(200).json({message: "Found the todo!", oneTodo});
}
  catch(error){
    res.status(500).json({message: "server error:", error:error.message});
  }
}

module.exports = {getAllTodos, updateTodo, deleteTodo, createTodo, getATodo};

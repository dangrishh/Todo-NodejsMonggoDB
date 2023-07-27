const router = require('express').Router()
const Todo = require('../models/Todo');

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({todo})

    // save the todo
      newTodo.save()
      .then(() => {
        console.log("Successfully added Task!")
        res.redirect("/") 
      })
      .catch((err) => console.log(err));
})

.get("/delete/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id }) 
  .then(() => {
    console.log("Deleted Task Successfully!")
    res.redirect("/")
  })
  .catch((err) => console.log(err));
})




/* router.post('/todos', (req, res, next) => {
    if(req.body.action){
        Todo.create(req.body)
          .then(data => res.json(data)) 
          .catch(next)
      }else {
        res.json({
          error: "The input field is empty"
        })
      } 
});

router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({"_id": req.params.id}) 
    .then(data => res.json(data))
    .catch(next)
})  */

module.exports = router;
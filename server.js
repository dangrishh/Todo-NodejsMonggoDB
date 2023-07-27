const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000

/* middleware */
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(express.static("public"))
app.set("view engine", "ejs")


/* routes */  
app.use(require("./routes/index"));
app.use(require("./routes/todo"));



/* connecting mongodb using atlas cloud */  
  mongoose.connect('mongodb+srv://admin:admin@crudnodejs.ydtzqky.mongodb.net/TodoList-NODE?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB is Already Connected!');

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch((error) => { 
    console.log(error); 
});
const express = require('express')
require('./db')
const taskRouter = require('./routes/task.routes')
const postRouter = require('./routes/post.routes')
const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/tasks', taskRouter)
app.use('/api/posts', postRouter)

app.get('/', (req, res)=>{
    res.send("Hello Bace");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});
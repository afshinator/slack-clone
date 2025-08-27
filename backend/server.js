import express from "express";


const app = express();

app.get('/', (req,res) => {
  res.send("hello world 42")
})

app.listen(5001, () => {
  console.log("Server started on port:", 5001);
});
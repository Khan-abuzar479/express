const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());//this is middleware and this is used for send data Frontend to Backend.
app.use(express.urlencoded({ extended: true }));//this is also middleware. 
//this is middedlware use .
app.use((req, res, next) => {
  console.log("this is middleare");
  next();
 
})
app.use((req, res, next) => {
  console.log("this is middleare and this is more imortant .");
  next();
 
})
app.get('/',  (req, res)=> {
  res.send('Hello World kase ho')
})

app.get("/kon", (req,res)=> {
  res.send("hum thik ha");
})
app.get("/party", (req, res) => {
  res.send("this is is party in the home ")
})
app.get("/party", (req, res, next) => {
  return next(new Error("this is most importtan tutotial"))
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke! and this very')
});
app.get("/Hel", (req, res,next) => {
  return next(new Error("hello ha asad khan kase ho aur kahan rhte ho"));
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke! and this very')
});
//this is error handling;
app.get("/add", (req, res, next) => {
  return next(new Error("Something is wrong and this"))//this is part show on console.
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')//this is show in browser after url change.
})
app.listen(port, () => {
  console.log("this is listin port${port}");
  
});
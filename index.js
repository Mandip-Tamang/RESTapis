const express  = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req , res) => {
  req.send("Welcome to my webpage");
  
});

app.listen(PORT,() =>{
    console.log(`port running in ${PORT}`);
})

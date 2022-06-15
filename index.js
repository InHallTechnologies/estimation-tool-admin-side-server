const express = require("express");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

const staticFolder = express.static(path.join(__dirname, 'public'));
app.use(staticFolder);
asdasdasdnasdas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`)
});

const express = require("express");
const path = require("path");

const app = express();

app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('', 'index.html'));
});

app.listen(process.env.PORT || 5060, () => { console.log("Server running...") });
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

const port = process.env.Port || 8080;

app.listen(port, () => console.log(`App running on port ${port}`));

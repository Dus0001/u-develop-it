const express = require('express');
const PORT = process.env.PORT || 3005;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
});
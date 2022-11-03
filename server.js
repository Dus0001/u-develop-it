const { dirxml } = require('console');
const express = require('express');
const PORT = process.env.PORT || 3005;
const app = express();
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connections')
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port  = 8000;

app.use(express.json());

// app.use('/api');
app.post('/test', (req, res) => {
    res.status(200).json({
        status: 1,
        message: "API's are working",
        data: req.body
    })
})

app.listen(port, () => {
    console.log(`App is up and running on http://localhost:${port}`)
});
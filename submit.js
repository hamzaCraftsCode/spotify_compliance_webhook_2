const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request body

app.post('/submit', (req, res) => {
    const { name, description } = req.body;
    res.status(200).json({ status: 200, message: "Request received successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

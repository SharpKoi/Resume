const express = require("express");
const app = express();
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile('hw1-0612201-李俞鋒.html', { root: '.' });
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Running on port ${port}');
});
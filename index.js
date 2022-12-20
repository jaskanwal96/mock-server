const express = require('express');
const app = express();
const port = 3000;

const categories = ['mobile', 'phone', 'cat', 'dog', 'qwerty', 'water', 'ice', 'sugar'];

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

app.get('/user', (req, res) => {
    res.send({
        categories: categories.slice(getRandom(3), getRandom(7)),
        id: getRandom(100),
        imgUrl: ' https://picsum.photos/500',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

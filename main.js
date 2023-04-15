const express = require("express");
// require('express-ws')(express());

const app = express();
// app.use(express.json());

app.get('/', (req, res) => {
    res.send('Fast response 🔥🔥🔥');
});

app.get('/print/:msg', (req, res) => {
    res.send(req.params.msg);
})

// app.ws('/echo', (ws, req) => {
//     ws.on('message', msg => {
//         ws.send(msg)
//     })
// });

app.listen(3000, () => console.log('Server started at port 3000'));

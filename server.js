const express = require('express');
const app = express();

app.use('/js',express.static(__dirname + '/js'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });

app.listen(3000, function(){
    console.log('app is listeninig on port 3000');
});
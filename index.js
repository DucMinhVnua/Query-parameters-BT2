const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

var lists = [
  'Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học Code trên CoderX'
]

app.get('/', function (req, res) {
  res.render('todos', {
    lists: lists
  });
})

app.get('/todos', function (req, res) {
  var query = req.query.q;

  var filter = lists.filter(function (x) {
    return x.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  console.log(query);
  res.render('todos', {
    lists: filter,
    value: query
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

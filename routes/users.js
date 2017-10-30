var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/*  get user list*/
router.get('/userlist', function (req,res) {
  var db= req.db;
  var collection = db.get('userlist');
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/* ****  Post to add user*/
router.post('/adduser',function(req,res){
    var db = req.db;
    var collection = db.get('userlist')
    collection.insert(req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
    });
});


module.exports = router;




//Answer3) The function when the email is already exists the name will updated

router.get('/save',function(req,res){
  var uname = req.query.username;
  var em = req.query.email;


  var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sherrydb"
  });

  con.query('select * from loginn where email="'+em+'" ', (err, result) => {
    if (err) throw err;
    if (result.length>0){
      res.send("user already registered");
    }
    else{
      var conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"sherrydb"
      });
      conn.query('insert into loginn(name,  email,) VALUES("' + uname + '","' +  em +  '")',function(err,rows,fields){
        console.log(rows);
        res.send("inserted");
    });
    conn.end();

    }
  });
  con.end();
  });
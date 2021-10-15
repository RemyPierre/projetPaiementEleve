const mysql = require('mysql');
const express = require('express');
var app = express();
var http=require("http");
const bodyparser = require('body-parser');
const cors = require("cors"); 
app.use(bodyparser.json());
const { request, response } = require("express");

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ges_paiement',
    multipleStatements: true
});



//middleware
app.use(cors());
app.use(express.json()); //req.body





mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(5000, () => console.log('Express server is runnig at port no : 5000'));



  

    //Get all eleve actif
app.get('/eleve', (req, res) => {
    mysqlConnection.query(`SELECT eleve.id, eleve.nom,eleve.prenom,eleve.sexe,eleve.adresse,eleve.num_tel,eleve.date_naissance,eleve.lieu_naissance,eleve.personne_resp,eleve.tel_resp,eleve.etablissement_precedent,eleve.status,eleve_has_class.class_id,eleve_has_class.eleve_id,eleve_has_class.anneeacademique,class.niveau from eleve INNER JOIN eleve_has_class on eleve.id=eleve_has_class.eleve_id INNER JOIN class on class.id=eleve_has_class.class_id where status='actif'`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

  

//Get an eleve actif
app.get('/eleve/:id', (req, res) => {
    mysqlConnection.query(`SELECT eleve.id, eleve.nom,eleve.prenom,eleve.sexe,eleve.adresse,eleve.num_tel,eleve.date_naissance,eleve.lieu_naissance,eleve.personne_resp,eleve.tel_resp,eleve.etablissement_precedent,eleve.status,eleve_has_class.class_id,eleve_has_class.eleve_id,eleve_has_class.anneeacademique,class.niveau from eleve INNER JOIN eleve_has_class on eleve.id=eleve_has_class.eleve_id INNER JOIN class on class.id=eleve_has_class.class_id where status='actif' AND prenom  LIKE CONCAT('%', ?,  '%')`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
 



   //Get all eleve inactif
   app.get('/eleves', (req, res) => {
    mysqlConnection.query(`SELECT eleve.id, eleve.nom,eleve.prenom,eleve.sexe,eleve.adresse,eleve.num_tel,eleve.date_naissance,eleve.lieu_naissance,eleve.personne_resp,eleve.tel_resp,eleve.etablissement_precedent,eleve.status,eleve_has_class.class_id,eleve_has_class.anneeacademique,class.niveau from eleve INNER JOIN eleve_has_class on eleve.id=eleve_has_class.eleve_id INNER JOIN class on class.id=eleve_has_class.class_id where status='inactif'`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Get an eleve inactif
app.get('/eleves/:id', (req, res) => {
    mysqlConnection.query(`SELECT eleve.id, eleve.nom,eleve.prenom,eleve.sexe,eleve.adresse,eleve.num_tel,eleve.date_naissance,eleve.lieu_naissance,eleve.personne_resp,eleve.tel_resp,eleve.etablissement_precedent,eleve.status,eleve_has_class.class_id,eleve_has_class.anneeacademique,class.niveau from eleve INNER JOIN eleve_has_class on eleve.id=eleve_has_class.eleve_id INNER JOIN class on class.id=eleve_has_class.class_id where status='inactif' AND prenom  LIKE CONCAT('%', ?,  '%')`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



//Insert an eleve
app.post('/eleve', (req, res) => {
  
    let el = req.body;
    
    var sql = "SET @nom = ?;SET @prenom = ?;SET @sexe = ?;SET @adresse = ?;SET @num_tel = ?;SET @date_naissance = ?;SET @lieu_naissance = ?; SET @personne_resp = ? ; SET @tel_resp = ?;SET @etablissement_precedent = ?;SET @class_id = ?;SET @anneeacademique = ?;\
    CALL inscription (@nom,@prenom,@sexe,@adresse,@num_tel,@date_naissance,@lieu_naissance,@personne_resp,@tel_resp,@etablissement_precedent,@class_id,@anneeacademique);";
    mysqlConnection.query(sql, [el.nom, el.prenom, el.sexe, el.adresse, el.num_tel, el.date_naissance, el.lieu_naissance, el.personne_resp, el.tel_resp, el.etablissement_precedent, el.class_id, el.anneeacademique], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send(' eleve inserer id : '+element[0].id);
            });
        else
            console.log(err);
            res.json(rows)
    })
    
});



//Modifier Eleve 
app.put('/eleve/:id', function (request, res) {
    mysqlConnection.query('UPDATE `eleve` SET `nom`=?,`prenom`=?,`sexe`=?,`adresse`=?,`num_tel`=?,`date_naissance`=?,`lieu_naissance`=? ,`personne_resp`=?,`tel_resp`=? ,`etablissement_precedent`=?,`status`=?   where `id`=?', 
    [request.body.nom, request.body.prenom, request.body.sexe, request.body.adresse, request.body.num_tel, request.body.date_naissance, request.body.lieu_naissance, request.body.personne_resp, request.body.tel_resp, request.body.etablissement_precedent, request.body.status ,request.params.id], function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
  });


 
//Delete Eleve |modifier status
app.put('/eleveDelete/:id', function (request, res) {
    mysqlConnection.query("UPDATE `eleve` SET `status`=?   where `id`=?", 
    [request.body.status ,request.params.id], function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
  });


  //Inserer paiement
app.post("/paiement", function (request, response) {
    mysqlConnection.query('insert into paiement (montant_verser,date_versement,id_transaction_bancaire,eleve_has_class_eleve_id,eleve_has_class_class_id) values (?,?,?,?,?)',
    [request.body.montant_verser, request.body.date_versement,request.body.id_transaction_bancaire, request.body.eleve_has_class_eleve_id,request.body.eleve_has_class_class_id],
    function(err,rows){
      response.end(JSON.stringify(rows));
    });
  });


    //Get all eleve_class. Intermediaire table
app.get('/eleve_has_class_data/:id',(req,res)=>{
  mysqlConnection.query('SELECT eleve_has_class.eleve_id, eleve_has_class.class_id,eleve_has_class.anneeacademique,class.niveau FROM  eleve_has_class,class WHERE eleve_has_class.class_id=class.id AND eleve_has_class.eleve_id=? order by eleve_has_class.eleve_id desc limit 1;',[req.params.id], (err, rows,fields)=>{
  if(!err)
  res.send(rows);
  else 
  console.log(err);
  })
  });


  //somme chak annee
app.get('/sommeEachAnnee/:id',(req,res)=>{
    mysqlConnection.query('select frais_annuel,frais_inscription, sum(frais_annuel+frais_inscription) as "somme" from class where id=?',[req.params.id], (err, rows,fields)=>{
    if(!err)
    res.send(rows);
    else 
    console.log(err);
    })
    });

    
//montant total versee par chaque eleve
app.get('/sommetotalversee/:id',(req,res)=>{
    mysqlConnection.query('SELECT  eleve.id,eleve.prenom, eleve.nom,eleve.prenom, sum(paiement.montant_verser) as "montantverser" FROM eleve, paiement WHERE eleve.id=paiement.eleve_has_class_eleve_id AND eleve.id=? GROUP BY eleve.nom,eleve.id;',[req.params.id], (err, rows,fields)=>{
    if(!err)
    res.send(rows);
    else 
    console.log(err);
    })
    });



      //Liste Niveau
      app.get('/niveau', (req, res) => {
        mysqlConnection.query(`SELECT * from class`, (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
    });


    
//Modifier Niveau 
app.put('/niveau/:id', function (request, res) {
    mysqlConnection.query('UPDATE `class` SET `frais_inscription`=?,`frais_annuel`=?  where `id`=?', 
    [request.body.frais_inscription, request.body.frais_annuel,request.params.id], function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
  });


    //Inserer Niveau
app.post("/niveau", function (request, response) {
    mysqlConnection.query('insert into class (niveau,frais_inscription,frais_annuel) values (?,?,?)',
    [request.body.niveau, request.body.frais_inscription,request.body.frais_annuel],
    function(err,rows){
      response.end(JSON.stringify(rows));
    });
  });


  //list paiement  versee par chaque eleve
app.get('/paiementuni/:id',(req,res)=>{
    mysqlConnection.query('SELECT eleve.nom, eleve.prenom ,paiement.id,paiement.montant_verser,paiement.date_versement, paiement.id_transaction_bancaire from eleve,paiement where eleve.id=paiement.eleve_has_class_eleve_id and eleve_has_class_eleve_id=?;',[req.params.id], (err, rows,fields)=>{
    if(!err)
    res.send(rows);
    else 
    console.log(err);
    })
    });

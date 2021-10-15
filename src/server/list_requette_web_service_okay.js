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
    mysqlConnection.query(`SELECT * FROM eleve WHERE status='Actif' `, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Get an eleve actif
app.get('/eleve/:id', (req, res) => {
    mysqlConnection.query(`SELECT * FROM eleve WHERE status='Actif' AND prenom  LIKE CONCAT('%', ?,  '%')`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


   //Get all eleve inactif
   app.get('/eleves', (req, res) => {
    mysqlConnection.query(`SELECT * FROM eleve WHERE status='Inactif' `, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Get an eleve inactif
app.get('/eleves/:id', (req, res) => {
    mysqlConnection.query(`SELECT * FROM eleve WHERE status='Inactif' AND prenom  LIKE CONCAT('%', ?,  '%')`, [req.params.id], (err, rows, fields) => {
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
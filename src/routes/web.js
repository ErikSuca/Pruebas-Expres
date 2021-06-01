const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
});
 
router.get('/babbage', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/babbage.html'))
});

router.get('/berners-lee', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/berners-lee.html'))
});

router.get('/clarke', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/clarke.html'))
});

router.get('/hamilton', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/hamilton.html'))
});

router.get('/hopper', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/hopper.html'))
});

router.get('/lovelace', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/lovelace.html'))
});

router.get('/turing', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './../views/turing.html'))
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/home', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

// router.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './../views/'))
// });

module.exports = router;
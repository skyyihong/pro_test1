/*
 *Created by hongyan on 2021/7/21
 */
const express=require('express')
const router=express.Router()
const static=express.static("./clock")

router.get('/getuser',(req,res) => {
    res.send("getuser")
})

router.get('/index.html',(req,res) => {
    res.send("index.html")
})

router.post('/setuser',(req,res) => {
    res.send("getuser")
})

router.static

module.exports={
    router:router,
    static:static,
}
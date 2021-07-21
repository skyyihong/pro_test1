/*
 *Created by hongyan on 2021/7/10
 */

// const express = require("express")
// const app = express()
// app.listen("80", (req, res) => {
//     // console.log(req,res)
//     console.log("server is running.")
// })
// app.get("/user/:id/:dis", (req, res) => {
//     // console.log(req,res)
//     console.log(req.query)
//     console.log(req.params)
//     res.send(req.query)
// })
//
// app.post("/user/:ids_:test", (req, res) => {
//     // console.log(req,res)
//     console.log(JSON.stringify(req.query))
//     console.log(req.params)
//     res.send(req.query)
// })
// // require("fsdafs")

//
const express = require("express")
const app = express()
const json=express.json()
function fn(req, res, next) {
    console.log("这个第一个函数")
    next()
}

app.use(fn)
app.use(json)
app.use(express.urlencoded({"extended":false}))

app.post("/", (req, res) => {
    console.log(req.body)
    res.send("get index.html")
})

app.listen("81", () => {
    console.log("server is running")
})

app.use((err, req, res, next) => {
    console.log("错误")
    throw new Error("---------------")
    res.send(err.message)
})
app.use((err, req, res, next) => {
    console.log("sfafdsafdsfadsf")
    res.send("ffafdsfadsfa")
})
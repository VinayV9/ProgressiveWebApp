const jwt = require('jsonwebtoken')
const Post = require('../models/post')
const config = require('../config/config')
const userSvc = {}

module.exports = userSvc


userSvc.insertPost = function(req, res){
    post = req.body.post
    post.created_by = req.userId
    post = new Post(post)

    post.save(function(err, post){
        if(err){
            throw err
        }else{
            res.status(200).send("post saved")
        }
    }) 
}

userSvc.updatePost = function(req, res){
    post = req.body.post
    res.status(200).send("post saved")
}

userSvc.deletePost = function(req, res){
    post = req.body.post
    res.status(200).send("post saved")
}

userSvc.getPosts = function(req, res){
    post = req.body.post
    Post.find((err, posts)=>{
        if(err){
            throw err
        }else{
            res.status(200).send(posts)
        }
    })
    res.status(200).send("post saved")
}
const jwt = require('jsonwebtoken')
const Post = require('../models/post')
const config = require('../config/config')
const userSvc = {}

module.exports = userSvc


userSvc.insertPost = function(req, res){
    post = req.body
    post.userId = req.userId

    post = new Post(post)
    console.log(post)
    post.save(function(err, post){
        if(err){
            throw err
        }else{
            res.status(200).send({error:false})
        }
    }) 
}

userSvc.updatePost = function(req, res){
    post = req.body
    res.status(200).send({error:false})
}

userSvc.deletePost = function(req, res){
    post = req.body
    res.status(200).send({error:false})
}

userSvc.getPosts = function(req, res){
    Post.find((err, posts)=>{
        if(err){
            throw err
        }else{
            res.status(200).send(posts)
        }
    })
}
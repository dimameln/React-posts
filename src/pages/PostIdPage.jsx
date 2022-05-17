import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    async function fetchPostById() {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    }

    async function fetchCommentsByPostId() {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    }

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsByPostId(params.id)
    })


    return (
    <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        <h3>Комментарии:</h3>
        <div>
            {comments.map()}
        </div>
    </div>
    )
}

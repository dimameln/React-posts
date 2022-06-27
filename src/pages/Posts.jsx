import React, { useEffect, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import PostFIlter from '../components/PostFIlter';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyLoader from '../components/UI/Loader/MyLoader';
import { getPageCount } from '../utils/pages';
import { useRef } from 'react';
import { useObserver } from '../hooks/useObserver';

function Posts() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'dd'},
        {id: 2, title: 'jfg', body: 'hh 2'},
        {id: 3, title: 'pp', body: 'aa 3'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const lastElement = useRef()

    async function fetchPosts() {
        setIsLoading(true)
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1)
    })


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>GET</MyButton>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFIlter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            <div ref={lastElement} style={{height: '20px'}}/>
            {isLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            }
        </div>
    );
}

export default Posts;
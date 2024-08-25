import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
    };

    const selectPost = async (id) => {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setSelectedPost(response.data);
    };

    return (
        <div>
            <header>
                <h1>Blog</h1>
            </header>
            <main>
                <PostForm fetchPosts={fetchPosts} />
                <PostList posts={posts} selectPost={selectPost} />
                <PostDetail post={selectedPost} />
            </main>
            <footer>
                <p>Simple Blog App</p>
            </footer>
        </div>
    );
};

export default App;

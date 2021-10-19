import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import './Blog.css';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        
        <div>
            <div className="titel-area">
                <h3>------------ BLOG ------------</h3>
            </div>
            <div>
                <Container className="blog-area">
                    {
                        blogs.map(blog => <Blogs
                            key={blog.id}
                            blog={blog}
                        ></Blogs>)
                    }
                </Container>
            </div>
            
                
            
        </div>
    );
};

export default Blog;
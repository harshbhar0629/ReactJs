import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {

  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState(null);
  const location = useLocation();
  const navigate = useNavigation();

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogsId=${blogsId}`;
  }

  return (
    <div>

    </div>
  )
}

export default BlogPage;
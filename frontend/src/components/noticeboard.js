// import React, { useState, useEffect } from "react";
// import "./noticeboard.css";

// const Noticeboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPostContent, setNewPostContent] = useState("");
//   const [userId, setUserId] = useState("user123"); // Example user ID, replace with actual

//   useEffect(() => {
//     // Fetch posts from the server (replace with actual API endpoint)
//     fetch("/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const handleLike = (postId) => {
//     fetch(`/posts/${postId}/like`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId }),
//     }).then(() => {
//       setPosts(posts.map((post) => (post._id === postId ? { ...post, liked: true } : post)));
//     });
//   };

//   const handleComment = (postId, comment) => {
//     fetch(`/posts/${postId}/comment`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId, comment }),
//     }).then(() => {
//       setPosts(posts.map((post) => (post._id === postId ? { ...post, comments: [...post.comments, { userId, comment }] } : post)));
//     });
//   };

//   const handleNewPost = () => {
//     const newPost = {
//       content: newPostContent,
//       likes: [],
//       comments: [],
//     };

//     // Post new content to server (replace with actual API endpoint)
//     fetch("/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPost),
//     }).then(() => {
//       setPosts([newPost, ...posts]); // Add new post to the front
//       setNewPostContent(""); // Clear the content field
//     });
//   };

//   return (
//     <div className="noticeboard-container">
//       <div className="new-post-block">
//         <textarea
//           placeholder="Write something new..."
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//         ></textarea>
//         <button onClick={handleNewPost}>Post</button>
//       </div>

//       <div className="posts-list">
//         {posts.map((post) => (
//           <div key={post._id} className="post-block">
//             <div className="post-content">
//               <p>{post.content}</p>
//             </div>

//             <div className="post-actions">
//               <button className="like-btn" onClick={() => handleLike(post._id)}>
//                 Like
//               </button>
//               <span className="like-count">{post.likes.length} Likes</span>
//             </div>

//             <div className="comments-section">
//               <div className="comments-list">
//                 {post.comments.map((comment, idx) => (
//                   <div key={idx} className="comment-item">
//                     <strong>{comment.userId}:</strong> {comment.comment}
//                   </div>
//                 ))}
//               </div>

//               <textarea
//                 placeholder="Add a comment"
//                 onBlur={(e) => handleComment(post._id, e.target.value)}
//                 className="comment-input"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Noticeboard;



// import React, { useState } from 'react';
// import './noticeboard.css';
// import { FaHeart, FaComment, FaShare, FaUserCircle } from 'react-icons/fa';

// const Noticeboard = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       author: 'Gurpreet Kaur Virdi',
//       date: 'Jul 29, 2024',
//       title: 'Tuning into Success: KukuFM’s Journey to Audio Excellence',
//       description: 'The financial year ending 2018 will always remain fundamental when somewhere down the line we track the economic growth of India. In this year, India saw...',
//       imageUrl: 'https://example.com/sample-image.jpg', // Add an image URL here
//       likes: 4,
//       comments: 3,
//       isLiked: false,
//     },
//   ]);

//   const [newPost, setNewPost] = useState('');
//   const [comment, setComment] = useState('');

//   const handleLike = (postId) => {
//     setPosts(posts.map(post => post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post));
//   };

//   const handleComment = (postId) => {
//     if (comment.trim()) {
//       // Handle comment submission (for simplicity, we just reset the input)
//       setComment('');
//     }
//   };

//   return (
//     <div className="noticeboard">
//       {/* Add New Post Section */}
//       <div className="new-post">
//         <textarea
//           placeholder="Share some news..."
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//         />
//         <div className="post-options">
//           <span>Add Photo</span>
//           <span>Add Video</span>
//           <span>Attach Files</span>
//           <span>Tag People</span>
//           <button className="share-button">Share</button>
//         </div>
//       </div>

//       {/* Post Feed */}
//       <div className="posts">
//         {posts.map(post => (
//           <div className="post-card" key={post.id}>
//             {/* Post Header */}
//             <div className="post-header">
//               <FaUserCircle className="profile-icon" />
//               <div>
//                 <h4>{post.author}</h4>
//                 <span>{post.date}</span>
//               </div>
//               <FaShare className="share-icon" />
//             </div>

//             {/* Post Content */}
//             <div className="post-content">
//               <img src={post.imageUrl} alt="Post" className="post-image" />
//               <div className="post-details">
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//               </div>
//             </div>

//             {/* Like and Comment Section */}
//             <div className="post-actions">
//               <span>{post.likes} people liked the post.</span>
//               <div className="like-comment">
//                 <button onClick={() => handleLike(post.id)} className={post.isLiked ? 'liked' : ''}>
//                   <FaHeart /> {post.isLiked ? 'Liked' : 'Like'}
//                 </button>
//                 <button><FaComment /> Comment</button>
//               </div>
//             </div>

//             {/* Comment Section */}
//             <div className="comment-section">
//               <FaUserCircle className="profile-icon-small" />
//               <input
//                 type="text"
//                 placeholder="Press enter to comment"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Noticeboard;




// import React, { useState } from 'react';
// import './noticeboard.css';
// import { FaHeart, FaComment, FaShare, FaUserCircle, FaArrowRight } from 'react-icons/fa';

// const Noticeboard = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       author: 'Om Kumar',
//       date: 'Oct 29, 2024',
//       title: 'IIT Jodhpur choosen as the center for GenAI in India',
//       description: 'Srijan—the Center of Excellence on Generative AI at IIT Jodhpur....',
//       imageUrl: '/assets/news.png',
//       likes: 4,
//       comments: 3,
//       isLiked: false,
//       likedBy: ['Om', 'Sumeet', 'Aansh'],
//       commentsList: ['Nice post!', 'Very informative!']
//     },
//   ]);

//   const [newPost, setNewPost] = useState('');
//   const [comment, setComment] = useState('');

//   const handleLike = (postId) => {
//     setPosts(posts.map(post => post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post));
//   };

//   const handleComment = (postId) => {
//     if (comment.trim()) {
//       setPosts(posts.map(post => post.id === postId ? { ...post, commentsList: [...post.commentsList, comment] } : post));
//       setComment('');
//     }
//   };

//   return (
//     <div className="noticeboard">
//       {/* Add New Post Section */}
//       <h2>Share Your News</h2>
//       <div className="new-post">
//         <FaUserCircle className="poster-avatar" />
//         <div className="post-input-area">
//           <textarea
//             placeholder="Share some news..."
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//           <div className="post-options">
//             <span>Add Photo</span>
//             <span>Add Video</span>
//             <span>Attach Files</span>
//             <span>Tag People</span>
//             <button className="post-button">Post</button>
//           </div>
//         </div>
//       </div>

//       {/* Post Feed */}
//       <div className="posts">
//         {posts.map(post => (
//           <div className="post-card" key={post.id}>
//             {/* Post Header */}
//             <div className="post-header">
//               <FaUserCircle className="profile-icon" />
//               <div className="post-author">
//                 <h4>{post.author}</h4>
//                 <span className="post-date">{post.date}</span>
//               </div>
//               <FaShare className="share-icon" />
//             </div>

//             {/* Post Content */}
//             <div className="post-content">
//               <img src={post.imageUrl} alt="Post" className="post-image" />
//               <div className="post-details">
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//               </div>
//             </div>

//             {/* Like and Comment Section */}
//             <div className="post-actions">
//               <button onClick={() => handleLike(post.id)} className={post.isLiked ? 'liked' : ''}>
//                 <FaHeart /> {post.isLiked ? 'Liked' : 'Like'}
//               </button>
//               <span className="likes-comments">
//                 {post.likes} likes · {post.commentsList.length} comments
//               </span>
//             </div>

//             {/* Comment Section */}
//             <div className="comment-section">
//               <FaUserCircle className="profile-icon-small" />
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               />
//               {comment && <FaArrowRight onClick={() => handleComment(post.id)} className="comment-submit-icon" />}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';

const Noticeboard = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching blogs...");
        const response = await fetch('http://localhost:3300/apis/v1/user/blogs'); // Use your backend URL for blogs
        console.log(response.status);

        if (response.status === 200) {
          const data = await response.json();
          setBlogsData(data); // Update the state with the fetched data
          console.log(data); // Logs the fetched blogs data
        } else {
          console.error('Failed to fetch blogs');
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error occurred while fetching blogs');
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this effect will run only once after the first render

  return (
    <div>
      <h1>Noticeboard</h1>
      {error && <div className="error">{error}</div>} {/* Display error message if there is any */}
      <div className="blogs">
        {blogsData.length > 0 ? (
          blogsData.map((blog) => (
            <div key={blog.blog_id} className="blog-card">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <div>{blog.date}</div>
              <div>Likes: {blog.likes}</div>
              {/* You can render more details about the blog here */}
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Noticeboard;




// export default Noticeboard;
// import React, { useState, useEffect } from 'react';
// import './noticeboard.css';
// import { FaHeart, FaComment, FaShare, FaUserCircle, FaArrowRight } from 'react-icons/fa';

// const Noticeboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');
//   const [comment, setComment] = useState('');
//   const [userId] = useState('b22cs053@iitj.ac.in'); // Example user ID, replace with actual user

//   // Fetch posts on component mount
//   useEffect(() => {
//     fetch('http://localhost:3300/apis/v1/user/blogs')
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const handleLike = (blogId) => {
//     fetch(`http://localhost:3300/apis/v1/user/blogs/${blogId}`, {
//       method: 'PUT',
//     })
//       .then((response) => response.json())
//       .then(() => {
//         // Update the local posts array to reflect the changes
//         setPosts(posts.map((post) => 
//           post.blog_id === blogId ? { ...post, likes: post.likes + 1 } : post
//         ));
//       })
//       .catch((error) => console.error('Error liking the post:', error));
//   };

//   const handleComment = (blogId) => {
//     if (comment.trim()) {
//       const newComment = {
//         u_mail: userId,
//         comment: comment,
//         date: new Date().toISOString(), // Send current date and time
//       };

//       fetch(`http://localhost:3300/apis/v1/user/blogs/comment/${blogId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newComment),
//       })
//         .then((response) => response.status === 201 && setComment(''))
//         .then(() => {
//           setPosts(posts.map((post) =>
//             post.blog_id === blogId
//               ? {
//                   ...post,
//                   comments: [
//                     ...post.comments,
//                     { comment: comment, comment_user: userId, comment_date: newComment.date },
//                   ],
//                 }
//               : post
//           ));
//         })
//         .catch((error) => console.error('Error posting comment:', error));
//     }
//   };

//   const handleNewPost = () => {
//     const newBlogPost = {
//       u_mail: userId,
//       img: '/assets/news.png', // Example image URL
//       title: 'New Blog Post',
//       description: newPost,
//       likes: 0,
//     };

//     fetch('http://localhost:3300/apis/v1/user/blogs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newBlogPost),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts([data, ...posts]);
//         setNewPost('');
//       })
//       .catch((error) => console.error('Error creating new post:', error));
//   };

//   return (
//     <div className="noticeboard">
//       {/* Add New Post Section */}
//       <h2>Share Your News</h2>
//       <div className="new-post">
//         <FaUserCircle className="poster-avatar" />
//         <div className="post-input-area">
//           <textarea
//             placeholder="Share some news..."
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//           <div className="post-options">
//             <span>Add Photo</span>
//             <span>Add Video</span>
//             <span>Attach Files</span>
//             <span>Tag People</span>
//             <button className="post-button" onClick={handleNewPost}>Post</button>
//           </div>
//         </div>
//       </div>

//       {/* Post Feed */}
//       <div className="posts">
//         {posts.map((post) => (
//           <div className="post-card" key={post.blog_id}>
//             {/* Post Header */}
//             <div className="post-header">
//               <FaUserCircle className="profile-icon" />
//               <div className="post-author">
//                 <h4>{post.user}</h4>
//                 <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
//               </div>
//               <FaShare className="share-icon" />
//             </div>

//             {/* Post Content */}
//             <div className="post-content">
//               <img src={post.image_url} alt="Post" className="post-image" />
//               <div className="post-details">
//                 <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//               </div>
//             </div>

//             {/* Like and Comment Section */}
//             <div className="post-actions">
//               <button
//                 onClick={() => handleLike(post.blog_id)}
//                 className={post.likes > 0 ? 'liked' : ''}
//               >
//                 <FaHeart /> {post.likes} Likes
//               </button>
//               <span className="likes-comments">
//                 {post.comments.length} Comments
//               </span>
//             </div>

//             {/* Comment Section */}
//             <div className="comment-section">
//               <FaUserCircle className="profile-icon-small" />
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               />
//               {comment && <FaArrowRight onClick={() => handleComment(post.blog_id)} className="comment-submit-icon" />}
//             </div>

//             {/* Display Comments */}
//             <div className="comments-list">
//               {post.comments.map((comment, idx) => (
//                 <div className="comment-item" key={idx}>
//                   <strong>{comment.comment_user}</strong>: {comment.comment}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Noticeboard;

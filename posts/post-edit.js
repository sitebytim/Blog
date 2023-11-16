// post-edit.js
import React, { useEffect, useState } from 'react';

export default function PostEdit({ id }) {
 const [title, setTitle] = useState('');
 const [body, setBody] = useState('');

 useEffect(() => {
   const fetchPost = async () => {
     const response = await fetch(`/api/posts/${id}`);
     const post = await response.json();
     setTitle(post.title);
     setBody(post.body);
   };
   fetchPost();
 }, [id]);

 const handleSubmit = async (event) => {
   event.preventDefault();
   const response = await fetch(`/api/posts/${id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ title, body }),
   });
   if (response.ok) {
     alert('Post updated successfully');
   } else {
     alert('Failed to update post');
   }
 };

 return (
   <form onSubmit={handleSubmit}>
     <label htmlFor="title">Title</label>
     <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required>
     <label htmlFor="body">Body</label>
     <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
     <button type="submit">Submit</button>
   </form>
 );
}

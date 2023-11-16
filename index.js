// index.js
import React from 'react';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
 const filePath = path.join(process.cwd(), 'posts', 'posts.json');
 const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
 return {
   props: {
     posts,
   },
 };
}

export default function Home({ posts }) {
 return (
   <div>
     {posts.map((post, index) => (
       <div key={index}>
         <h2>{post.title}</h2>
         <p>{post.body}</p>
       </div>
     ))}
   </div>
 );
}

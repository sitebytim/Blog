// pages/api/posts.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
 if (req.method === 'POST') {
   const filePath = path.join(process.cwd(), 'posts', 'posts.json');
   const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
   const newPost = {
     title: req.body.title,
     body: req.body.body,
     id: Date.now(),
   };
   posts.push(newPost);
   fs.writeFileSync(filePath, JSON.stringify(posts));
   res.status(200).json(newPost);
 } else {
   res```

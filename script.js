// Fetch posts from the JSON file
const postsData = fetch('posts.json')
  .then((response) => response.json())
  .then((data) => data);

// Render posts on the page
const postsContainer = document.getElementById('posts');
postsData.then((posts) => {
  for (const post of posts) {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  }
});

// Create a post element
function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const postImage = document.createElement('img');
  postImage.src = post.image;
  postImage.alt = post.title;
  postElement.appendChild(postImage);

  const postTitle = document.createElement('h2');
  postTitle.textContent = post.title;
  postElement.appendChild(postTitle);

  const postAuthor = document.createElement('p');
  postAuthor.textContent = `By ${post.author}`;
  postElement.appendChild(postAuthor);

  const postDate = document.createElement('p');
  postDate.textContent = `Published on ${post.date}`;
  postElement.appendChild(postDate);

  const postContent = document.createElement('p');
  postContent.textContent = post.content;
  postElement.appendChild(postContent);

  return postElement;
}

async function newData() {
  try {
    const response = await fetch("http://localhost:3000/blogs/", {
      mode: "cors",
    });
    const data = await response.json();
    createBlogs(data.blogs);
  } catch (error) {
    console.log(error);
  }
}

function createBlogs(blogs) {
  const blogsContainer = document.getElementById("blogs-container");
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    const blogLink = document.createElement("a");
    const innerDiv = document.createElement("div");
    const blogTitle = document.createElement("h3");
    const blogText = document.createElement("p");
    const blogAuthor = document.createElement("p");

    blogLink.className = "blog";
    blogTitle.className = "blog-title";
    blogText.className = "blog-text";
    blogAuthor.className = "blog-author";
    blogLink.href = `/blogs.html?id=${blog._id}`;

    blogTitle.textContent = blog.title;
    blogText.textContent = blog.text;
    blogAuthor.textContent = blog.author.email

    blogsContainer.appendChild(blogDiv);
    blogDiv.appendChild(blogLink)
    blogLink.appendChild(innerDiv);
    blogLink.appendChild(blogAuthor);
    innerDiv.appendChild(blogTitle);
    innerDiv.appendChild(blogText);
  });
}

newData();

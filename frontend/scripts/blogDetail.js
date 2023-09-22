async function blogData() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const blogId = urlParams.get("id");
  try {
    const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
      mode: "cors",
    });
    const data = await response.json();
    fillElements(data.blog);
  } catch (error) {
    console.log(error);
  }
}

function fillElements(blog) {
  const title = document.getElementById("blog-title");
  const text = document.getElementById("blog-text");
  const author = document.getElementById("blog-author");

  title.textContent = blog.title;
  text.textContent = blog.text;
  author.textContent = blog.author.email;
}

blogData();
async function newData() {
  try {
    const response = await fetch("http://localhost:3000/blogs/", {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

newData();

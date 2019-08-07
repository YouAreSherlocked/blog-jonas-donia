const getAllPosts = async () => {
  const response = await fetch('posts');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
}

const postPost = post => {
  console.log(...post)
  fetch('/posts', {
    method: 'POST',
    body: JSON.stringify({
      'date_added':  new Date()
    }),
    headers: {"Content-Type": "application/json"}
    }).then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      console.log(data);
      window.location.reload();
  });
}

const deleteAllPosts = () => {
  fetch('/posts', {
    method: 'DELETE',
    headers: {"Content-Type": "application/json"}
    }).then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      console.log(data);
      window.location.reload();
  });
}

export default {
  getAllPosts,
  postPost,
  deleteAllPosts
}
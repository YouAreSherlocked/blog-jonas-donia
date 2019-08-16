const getAllPosts = async () => {
  const response = await fetch('posts');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
}

const getPostById = async id => {
  const response = await fetch(`/post/${id}`);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}

const postPost = post => {
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

const updatePost = (post, id) => {
  fetch('/posts', {
    method: 'PUT',
    body: JSON.stringify({
      '_id': id,
      'title': post.title.value,
      'text': post.text.value,
      'edited_at': new Date()
    }),
    headers: {"Content-Type": "application/json"}
    }).then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      console.log(data);
      window.location.href = '/';
    });
}

const deletePost = id => {
  fetch('/posts', {
    method: 'DELETE',
    body: JSON.stringify({
      '_id': id
    }),
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
  getPostById,
  postPost,
  deleteAllPosts,
  updatePost,
  deletePost
}
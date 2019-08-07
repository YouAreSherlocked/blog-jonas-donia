const getAllProjects = async () => {
  const response = await fetch('projects');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
}

const postProject = project => {
  fetch('/projects', {
    method: 'POST',
    body: JSON.stringify({
      ...project
    }),
    headers: {"Content-Type": "application/json"}
    }).then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      console.log(data);
      window.location.reload();
  });
}

const deleteAllProjects = () => {
  fetch('/projects', {
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
  getAllProjects,
  postProject,
  deleteAllProjects
}
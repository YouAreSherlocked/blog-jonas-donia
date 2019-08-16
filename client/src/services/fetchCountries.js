const getAllCountries = async () => {
  const response = await fetch('/countries');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
}

const getCountryById = async id => {
  const response = await fetch(`/countries/${id}`);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}

const postCountry = country => {
  fetch('/countries', {
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

const updateCurrentCountry = (name, status) => {
  fetch('/countries', {
    method: 'PUT',
    body: JSON.stringify({
      'name': name,
      'current': status
    }),
    headers: {"Content-Type": "application/json"}
    }).then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      console.log(data);
      window.location.reload();
    });
}

const deleteCountry = id => {
  fetch('/countries', {
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
  getAllCountries,
  getCountryById,
  updateCurrentCountry,
  postCountry,
  deleteCountry
}
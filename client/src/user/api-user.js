import axios from "axios";


const saveUser = (user) => {
  console.log(user)
  console.log("Sending new registration to server...")
  return axios.post("/api/users", user);
}

const list = () => {
  return axios.get('/api/users');
},

const read = (params, credentials) => {
  return axios.get('/api/users/' + params.userId, {
    headers: {
      'Authorization': 'Bearer ' + credentials.t
    }
  })
},

const update = (params, credentials, user) => {
  console.log(user)
  return axios.put('/api/users/' + params.userId, {
    headers: {
      'Authorization': 'Bearer ' + credentials.t
    }}, user)
}

const remove = (params, credentials) => {
  return axios.delete('/api/users/' + params.userId, {
    headers: {
      'Authorization': 'Bearer ' + credentials.t
    }
  })
}

const follow = (params, credentials, followId) => {
  return fetch('/api/users/follow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, followId: followId})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const unfollow = (params, credentials, unfollowId) => {
  return fetch('/api/users/unfollow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, unfollowId: unfollowId})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const findPeople = (params, credentials) => {
  return fetch('/api/users/findpeople/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const enroll = (params, credentials, userData) => {
  console.log(userData)
  return fetch('/api/users/enroll/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId: userData.userId, courseCode: userData.courseCode})
  }).then((response) => {
    console.log(response)
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const addToRoster = (params, credentials, userData) => {
  console.log(userData)
  return fetch('/api/courses/enroll/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId: userData.userId, courseCode: userData.courseCode})
  }).then((response) => {
    console.log(response)
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}


export {
  saveUser,
  list,
  read,
  update,
  remove,
  follow,
  unfollow,
  findPeople,
  enroll,
  addToRoster
}


// const create = (user) => {
//   console.log(user)
//   console.log("New registration!")
//   return fetch('/api/users/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         credentials: 'same-origin'
//       },
//       body: JSON.stringify(user)
//     })
//     .then(response => 
//       response.text())
//     .then(text => console.log(text))
//     .catch((err) => console.log(err))
// }
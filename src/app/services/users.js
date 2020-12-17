function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
}

export {
  getUsers
}

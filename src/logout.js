// const logout = async function (event) {
//     event.preventDefault();
//     const response = await fetch('/api/user/logout', {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' }
//     })
  
//     if (!response.ok) {
//       throw new Error('HTTP error: ' + response.status)
//     }
//   //when user hits logout returns them to main login page
//     document.location.replace('/')
//   }
  
//   document.querySelector('#logout-link').addEventListener('click', logout)
  
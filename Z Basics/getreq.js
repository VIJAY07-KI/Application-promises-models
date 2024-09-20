// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';

// Make the GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the response data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

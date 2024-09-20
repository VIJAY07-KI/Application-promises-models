// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';

// Data to be sent in the POST request
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

// Make the POST request
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData)
})
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

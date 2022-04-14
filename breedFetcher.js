const args = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (body === '[]') {
    console.log("breed not found.");
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
  
});
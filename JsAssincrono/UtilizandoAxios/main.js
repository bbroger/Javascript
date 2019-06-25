axios
  .get("https://api.github.com/users/allanmgdev")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });

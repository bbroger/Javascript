var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var containerElement = document.querySelector("#app");
var ulElement = document.createElement("ul");
containerElement.appendChild(ulElement);

function showUsers(repositories) {
  ulElement.innerHTML = "";
  for (repository of repositories) {
    if (repositories.length === 0) {
      ulElement.innerHTML = `<p>Não foram encontrados repositórios para esse usuário(${userGithub})</p>`;
    } else {
      var liElement = document.createElement("li");
      var liText = document.createTextNode(repository.name);
      liElement.appendChild(liText);
      ulElement.appendChild(liElement);
    }
  }
}

function addUser() {
  var userGithub = inputElement.value;
  if (userGithub === "") {
    alert("Informe um nome de usuário!");
  } else {
    ulElement.innerHTML = "<p>Carregando...</p>";
    inputElement.value = "";
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${userGithub}/repos`)
        .then(function(response) {
          showUsers(response.data);
        })
        .catch(function(error) {
          ulElement.innerHTML = `<p>Erro 404 - O usuário ${userGithub} não foi encontrado!</p>`;
        });
    }, 2000);
  }
}

buttonElement.onclick = addUser;

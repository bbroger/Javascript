var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/allanmgdev");
xhr.send(null);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};

function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (idade >= 18) {
        return resolve();
      } else {
        return reject();
      }
    }, 2000);
  });
}

checaIdade(20)
  .then(() => {
    console.log("Maior que 18");
  })
  .catch(() => {
    console.log("Menor que 18");
  });

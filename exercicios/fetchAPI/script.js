fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then((data) => console.log(data.fact))
    .catch((err) => console.log(err))
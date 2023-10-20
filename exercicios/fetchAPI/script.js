const container = document.querySelector(".container")

fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then((data) => console.log(data.fact) && container.insertAdjacentHTML('<div><h1>'+data.fact + '</h1></div>'))
    .catch((err) => console.log(err))
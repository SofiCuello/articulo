let ingresoTitulo = prompt("Ingrese un título");
let ingresoUrlDeImagen = prompt("Ingrese un URL de imagen");
let ingresoUrlDeArticulo = prompt("Ingrese un URL de un articulo");


let nuevoH1 = document.createElement("h1");
nuevoH1.innerText = ingresoTitulo;
document.body.appendChild(nuevoH1);

let UrlDeImagen = document.createElement("img");
UrlDeImagen.src = ingresoUrlDeImagen;
document.body.appendChild(UrlDeImagen);

let urlDelArticulo = document.createElement("a");
urlDelArticulo.href = ingresoUrlDeArticulo;
urlDelArticulo.innerText = `Ver más`;
document.body.appendChild(urlDelArticulo);


// https://images.samsung.com/ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-highlights-colors-mint-mo.jpg?imbypass=true

// https://www.samsung.com/ar/smartphones/galaxy-z-flip5/
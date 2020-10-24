// Nota: Ejecutar el siguiente código, en consola de navegador Chrome
var url = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.text())
.then(miResultado => {var post = JSON.parse(miResultado); console.log(post[1]);});
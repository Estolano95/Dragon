document.addEventListener("DOMContentLoaded", function (event) {
  let output; // iniciamos uma variavel sem nada, importante inicializar ela fora da função showBooks

  let showBooks = (books) => {
    console.log("teste");
    // função que vai fazer a magica
    books.forEach((book) => {
      // fazemos um loop para iterar em cada livro
      // e na variável output nós vamos concatenando o conteúdo a cada iteração
      // utilizando string template literals
      output += ` 
       <hr>
        <section class="container-fluid px-0">
            <div class="row align-items-center content">
                <div class="col-md-6 order-2 order-md-1 section">
                    <img class="img-fluid fotoStyleLista" src="${book.coverUrl}" alt="${book.coverCaption}">
                </div>
                <div class="col-md-6 text-center order-1 order-md-2">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                            <h2> COMO TRAIR O HERÓI DE UM DRAGÃO</h2>
                            <div>
                                Lançamento: ${book.infos.releaseYear} <br>
                                Número de Páginas: ${book.infos.totalPages} <br>
                                Editora: ${book.infos.publishingCompany} <br>
                                Tradutor: ${book.infos.translator}
                            </div>
                            <p class="descricao">
                               ${book.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `;
    });
  };

  // try {
  // aqui nós rodamos a funçao que faz a magina dentro de um try catch por via das dúvidas
  showBooks(books.books);
  // } catch (err) {
  //   console.log("Alguma coisa deu errado :( ");
  // }

  // Aqui nós colocamos o conteúdo que foi gerado na variavel output no elemento html (body ou alguma div)
  document.getElementById("booksContent").innerHTML = output;
});
document.addEventListener("DOMContentLoaded", function (event) {
  let output; // iniciamos uma variavel sem nada, importante inicializar ela fora da função showBooks

  let showBooks = (books) => {
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

// var childNumber = 3;

// function addChild() {
//   var parent = document.getElementById('i-want-more-children');
//   var newChild = '<p>Child ' + childNumber + '</p>';
//   parent.insertAdjacentHTML('beforeend', newChild);
//   childNumber++;
// }

// window.onload = function codeAddress() {
//     for(var i=0;i>5;i++){
//         myNewPTAGnode = document.createElement("<div>OLA</div>");
//         myBody.appendChild(myNewPTAGnode);
//     }
// }

// {/* <div class="row align-items-center content">
// <div class="col-md-6 order-2 order-md-1 section">
//     <img class="img-fluid fotoStyleLista" src="Fotos/comotreinaroseudragao.jpg" alt="">
// </div>
// <div class="col-md-6 text-center order-1 order-md-2">
//     <div class="row justify-content-center">
//         <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
//             <h2> COMO TREINAR O SEU DRAGÃO</h2>
//             <div>
//                 Lançamento: 2010 <br>
//                 Número de Páginas: 224 <br>
//                 Editora: Intrínseca <br>
//                 Tradutor: Heloísa Prieto
//             </div>
//             <p class="descricao">
//                 "Uma das histórias infantis mais agradáveis e originais dos últimos tempos.”
//                 The Independent
//                 livro inspirou o filme de animação produzido pela DreamWorks. Soluço Spantosicus Strondus
//                 III foi um extraordinário herói vinking. Chefe guerreiro mestre com espadas e naturalista
//                 amador, era conhecido por todo território viking como "O Encantador de Dragões", devido ao
//                 poder que exercia sobre as terríveis feras. Mas nem sempre foi assim… No primeiro livro da
//                 série “Como treinar seu Dragão” você conhecerá a história de Soluço da época em que ele era
//                 apenas um garoto normal. Muito normal e com nada de heróico.

//                 Ele precisavas desesperadamente capturar e treinar um Dragão, e precisava ser o animal mais
//                 impressionante de todos. Mas tudo que conseguiu foi uma criaturinha pequena, encrenqueira,
//                 banguela e nada ameaçadora. Foi então que seu destino de Herói começou a ser traçado.
//                 Inteiramente ilustrado, com muita ação e o tipo de humor que arranca gargalhadas até dos
//                 mais carrancudos, Como Treinar o Seu Dragão é o primeiro livro de uma série que é sucesso
//                 mundial.
//             </p>
//         </div>
//     </div>
// </div>
// </div> */}

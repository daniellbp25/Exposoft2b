var boton = document.getElementById("boton")//.innerHTML: forma de saida. imprimir conteudo em html. 
var txt = document.getElementById("pai")
var pag = document.getElementById("paragrafo")

var H = 2

function hello() {
   if (H == 1) {
      txt.innerHTML = "Jardinagem:"
      pag.innerHTML = "Jardinagem é a prática de cultivar e cuidar de plantas, flores e árvores em espaços ao ar livre para criar ambientes esteticamente agradáveis e funcionais. Envolve o plantio, manutenção e design de jardins."
   }

   if (H == 2) {
      txt.innerHTML = "Lula"
      pag.innerHTML = "Ele é uma pessoa que como já dizia seu Madruge, o mesmo do chaves LADRÃO. Não apenas um qualquer, mas o maior bandido da históra do Brasil, uma vergonha. Ele ta envolido nos maiores escandolos da historia dessa nação."
   }

   if (H == 3) {
      txt.innerHTML = "Plantas:"
      pag.innerHTML = "Plantas são organismos autotróficos que realizam a fotossíntese para obter energia a partir da luz solar e desempenham um papel essencial na produção de oxigênio e absorção de dióxido de carbono e uso em medicamentos e materiais."

   }

   if (H == 4) {
      txt.innerHTML = "Cuidados:"
      pag.innerHTML = "Cuidados com as plantas envolvem a atenção às necessidades básicas, como rega, adubação e poda, para promover o crescimento saudável e prevenir doenças e pragas por meio de medidas de proteção."
   }

   if (H == 5) {
      txt.innerHTML = "Jardins:"
      pag.innerHTML = "Jardins são áreas planejadas e cultivadas com plantas, flores e elementos paisagísticos para fins estéticos, recreativos ou funcionais, como embelezar espaços ao ar livre. Existem diversos tipos de jardins, como formais, informais e temáticos."
   }



   if (H == 5) {
      H = 0
   }
}


boton.addEventListener("click", function () {
   botaoClicado = true; //variável de controle como verdadeira
   hello()
   H = H + 1
});

function mouse() {//serve para nada
 // kk, para que então põ Ass: Daniel anos depois
}


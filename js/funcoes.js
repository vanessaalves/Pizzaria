//**CARROSSEL 
$(document).ready(function() {
 
	$("#slide img.figura:eq(0)").addClass("ativo").show(); //Primeira imagem exibida

			var texto = $(".ativo").attr("title"); //Pega o title da imagem

			var loop = setInterval(slide,5000); //Temporizador

			function slide(){
				if($(".ativo").next().size()){ //Verifica se já existe alguma imagem depois da imagem ativa
					$(".ativo").fadeOut().removeClass("ativo") // Remove a classe ativo 
					.next().fadeIn().addClass("ativo"); //Pega a próxima imagem e o fade faz ela aparecer
				}
				else{
					$(".ativo").fadeOut().removeClass("ativo");//Esconde a imagem ativa
					$("#slide img.figura:eq(0)").fadeIn().addClass("ativo");//Pega a primeira imagem e o fade faz ela aparecer
				}
				
				var texto = $(".ativo").attr("title"); //Guarda o texto da legenda na var
				$("#slide div.titulo").hide(); //Esconde a legenda
				$("#slide div.titulo p").html(texto); //Coloca o texto dentro da var
				$("#slide div.titulo").delay(500).fadeIn(); //Delay para exibir a legenda
			}

			function selecionarSlide(indice){
				clearInterval(loop); //limpa o temporizador
				$(".ativo").fadeOut().removeClass("ativo"); //Esconde a imagem ativa
				$("#slide img.figura:eq("+indice+")").fadeIn().addClass("ativo"); //Seleciona a figura do atributo e a exibe
				var texto = $(".ativo").attr("title"); //Pega o title da imagem
				$("#slide div.titulo").hide(); //Esconde a legenda
				$("#slide div.titulo p").html(texto);  //Coloca o texto dentro da var
				$("#slide div.titulo").delay(500).fadeIn(); //Delay para exibir a legenda
				setTimeout(3000); //Chama a função depois de 3 seg
				loop = setInterval(slide,3000); //Define o temporizador
			}

			$(".botao").click(function(){
				selecionarSlide($(this).index()); //Ao clicar no botão seleciona o slide
			})
		});

// FUNÇÕES DO BOTÃO
	$(document).ready(function() {
   
   var check = false;

	function changeVal(el) {
	  var qt = parseFloat(el.parent().children(".qt").html()); //Retorna o número do html da var da qtd 
	  var price = parseFloat(el.parent().children(".price").html()); //Retorna o número do html da var do preço
	  var eq = Math.round(price * qt).toFixed(2).replace(".",","); //Calcula o preço x qtd e coloca 2 casas decimais e troca o . por,
	  
	  el.parent().children(".full-price").html( eq + 'R$' ); //Define o preço total com o valor da eq + R$
	  

	  changeTotal();            // chama a funça changeTotal
	}

	function changeTotal() {
  
	  var price = 0;
	  
	  $(".full-price").each(function(index){
	   	price += parseFloat($(".full-price").eq(index).html()); //Pega o valor do html do preço total
	  });
	  
	  price = Math.round(price).toFixed(2); //Calcula o preço e coloca 2 casas decimais
	  var fullPrice = Math.round(price).toFixed(2).replace(".",",");//Calcula o preço e coloca 2 casas decimais e troca a , por .
	  
	  if(price == 0) { //Se o preço é =0 preço total=0
	    fullPrice = 0;
	  }
	  
	  $(".total span").html(fullPrice); //Coloca o preço total na div .total span
	}
 
   	  $(".remove").click(function(){
        $(".total span, .qt, .full-price").html('0'); //Altera o html das classes para 0 quando o botão é clicado
      });
  
  	$(".qt-plus").click(function(){
	    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1); // Aumenta a qt quando o botão é clicado
	   
	    var el = $(this); //Defina a var
	    window.setTimeout(function(){el.parent().children(".full-price"); changeVal(el);}, 150); // Em 150ms troca o preço total e troca a eq
  });
  
  	$(".qt-minus").click(function(){
    
	    child = $(this).parent().children(".qt"); //Define a variável com a qtd
	    
	    if(parseInt(child.html()) > 0) {  //Se o número inteiro for maior que 0 diminui 1 ao clicar no botão
	      child.html(parseInt(child.html()) - 1);
	    }
	    var el = $(this); //Define a var
	    window.setTimeout(function(){el.parent().children(".full-price"); changeVal(el);}, 150); //Em 150ms troca o preço total e troca a eq
  });
  
});

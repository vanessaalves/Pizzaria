function validaCampos() {
				
				
				if (vercpf(document.formularioCadastro.cpf.value)) { //verifica se o cpf é válido conforme funçao abaixo
				} 
				else {
					alert('CPF inválido'); //Se não for alerta a frase e foca no input do cpf
					formularioCadastro.cpf.focus(); 
					return false;
				}
		  
		  		var validaEmail = document.formularioCadastro.email.value; // declara var com valor do email
				usuario = validaEmail.substring(0 ,validaEmail.indexOf('@')); //primeira parte do valor do email de 0 a @
				dominio = validaEmail.substring(validaEmail.indexOf('@')+ 1, validaEmail.length); // segunda parte do valor do email do @ até o final
				if ((usuario.length >=1) && //primeira parte tem que ser maior ou igual a 1
				    (dominio.length >=3) && //segunda parte parte tem que ser maior ou igual a 3
				    (usuario.search('@')==-1) && //procura @ na primeira parte
				    (dominio.search('@')==-1) && //procura @ na segunda parte
				    (usuario.search(' ')==-1) && //procura espaço em branco na primeira parte
				    (dominio.search(' ')==-1) && //procura espaço em branco na segunda parte
				    (dominio.search('.')!=-1) &&      //procura . na segunda parte
				    (dominio.indexOf('.') >=1)&& 	//retorna a posição do primeiro . 
				    (dominio.lastIndexOf('.') < dominio.length - 1)) {} //retorna a última posição do ponto

				else{
					alert('E-mail inválido'); //alerta inválido
					formularioCadastro.email.focus(); //foca no input
					return false;

				}

 				var validaCard = document.formularioCadastro.num_card.value; 
				if(validaCard == '' || validaCard.length < 16) { //Nº do cartão tem que ser maior do que 16
					alert('Número de Cartão Inválido'); //alerta inválido
					formularioCadastro.num_card.focus(); //foca no input do numero
					return false;
				}
				 

			    alert('Seu pedido foi realizado com sucesso'); //alerta caso atenda as exigências
    			return true;
  				} 	
	
			function vercpf (cpf) { //função para validar o cpf
				if (cpf.length != 11 ||
				cpf == '00000000000' ||
				cpf == '11111111111' ||
				cpf == '22222222222' ||
				cpf == '33333333333' ||
				cpf == '44444444444' ||
				cpf == '55555555555' ||
				cpf == '66666666666' ||
			 	cpf == '77777777777' ||
			  	cpf == '88888888888' ||
			  	cpf == '99999999999')
			 
				return false;
				 
				add = 0;
				 
				for (i=0; i < 9; i ++)
				add += parseInt(cpf.charAt(i)) * (10 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
				rev = 0;
				if (rev != parseInt(cpf.charAt(9)))
				return false;
				add = 0;
				for (i = 0; i < 10; i ++)
				add += parseInt(cpf.charAt(i)) * (11 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
				rev = 0;
				if (rev != parseInt(cpf.charAt(10)))
				return false;
				return true;
			}

			function SomenteNumero(e){ //função para que só seja possível digitar números
		    var tecla=(window.event)?event.keyCode:e.which;   
		    if((tecla>47 && tecla<58)) return true;
		    else{
		    	if (tecla==8 || tecla==0) return true;
			else  return false;
		    	}
			}
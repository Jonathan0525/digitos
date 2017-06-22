    
    var validadonom = false;
    var validadoape = false;
    var validadotel = false;
    var validadoema = false;
    var validadomen = false;

    function revisarobligatorionom(elemento){

      if(elemento.value==''){

        $( "#valor_nombre" ).removeClass();
        $( "#valor_nombre" ).toggleClass( "form-group has-error" );
        $( "#adv-nom" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;Falta diligenciar tu nombre</h4>");
        
        validadonom = false;

      }else{

      	$( "#valor_nombre" ).removeClass();
      	$( "#valor_nombre" ).toggleClass( "form-group has-success" );
      	$( "#adv-nom" ).html("");
        
        validadonom = true;
        
    }
  }


   /* function revisarobligatorioape(elemento){

      if(elemento.value==''){

          	$( "#valor_apellido" ).removeClass();
            $( "#valor_apellido" ).toggleClass( "form-group has-error" );
            $( "#adv-ape" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;Falta diligenciar tu apellido</h4>");
            
            validadoape = false;
            
            
          }else{

          	$( "#valor_apellido" ).removeClass();
          	$( "#valor_apellido" ).toggleClass( "form-group has-success" );
          	$( "#adv-ape" ).html("");

            validadoape = true;
            

            }
          
    }*/

    function revisarobligatorioema(elemento){

      var dato = elemento.value;
      var expresion = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
      
      if(elemento.value=='' && !expresion.test(dato)){


        $( "#valor_email" ).removeClass();
      	$( "#valor_email" ).toggleClass( "form-group has-error" );
        $( "#adv-ema" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;Falta diligenciar tu email o es un email invalido</h4>");
        
        validadoema = false;
            

      }else{

      	$( "#valor_email" ).removeClass();
      	$( "#valor_email" ).toggleClass( "form-group has-success" );
      	$( "#adv-ema" ).html("");
        
        validadoema = true;
        

      }

    }


    function revisarobligatoriotel(elemento){

    	var dato = elemento.value;
      if(elemento.value =='' || isNaN(dato)){

        $( "#valor_telefono" ).removeClass();
      	$( "#valor_telefono" ).toggleClass( "form-group has-error" );
        $( "#adv-tel" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;Falta diligenciar tu teléfono o no es un télefono válido</h4>");
        
        validadotel = false;

      }else{

      	$( "#valor_telefono" ).removeClass();
      	$( "#valor_telefono" ).toggleClass( "form-group has-success" );
      	$( "#adv-tel" ).html("");
        
        validadotel = true;

      }
    }

    function revisarobligatoriomen(elemento){

    	if(elemento.value==''){

        $( "#valor_mensaje" ).removeClass();
      	$( "#valor_mensaje" ).toggleClass( "form-group has-error" );
        $( "#adv-men" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;Escribe un mensaje</h4>");
        
        validadomen = false;

      }else{

      	$( "#valor_mensaje" ).removeClass();
      	$( "#valor_mensaje" ).toggleClass( "form-group has-success" );
      	$( "#adv-men" ).html("");
        
        validadomen = true;

      }
    }

  

function validar(){

    if (validadonom == true && validadotel == true && validadoema == true && validadomen == true) {

              $.ajax({
              type: 'POST',
              url: $(this).attr('action'),
              data: $(this).serialize(),
              // Mostramos un mensaje con la respuesta de PHP
              success: function(data) {
                  $('#valiFinal').html("<h4 style='color:#1D9D74'><i class='fa fa-check' aria-hidden='true'></i>&nbsp;El envío ha sido exitoso, te contestaremos con la mayor brevedad posible</h4>");
                  setTimeout('document.location.reload()',2000);
              }
          })        
         
    
    return true; 
    

    }else{
    
    
    $( "#valiFinal" ).html("<h4 style='color:#A20101'><i class='fa fa-exclamation' aria-hidden='true'></i>&nbsp;No se ha podido enviar, diligencia los campos obligatorios y revisa los errores</h4>");

    return false;

    }

}






  





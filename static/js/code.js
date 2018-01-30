$(document).ready(function() {
	$('.disable').click(function(e){			
		if($('.bot').hasClass('disable')){
			e.preventDefault();
			alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')
			//alert('tiene class');
		}else{
			//alert('class removida');
		}		
	})
	
	$('.agregar img').click(function(e){
		$('.disable').removeClass('disable');		
		//alert('bloquear()');
		//return true;
	})
	$('.bot.disable').click(function(){
		//alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')	
	})
	
	$('.ayuda').click(function(){			
		$('.foo-help').slideToggle();			
	})
	$('.foo-help i').click(function(){			
		$('.slideDown.s5').slideUp(500);			
	})
	
	$('.slideDown.s5').delay(1000).slideToggle().delay(4000).slideUp(500, function(){
		$('.foo-help i, .ayuda').addClass('active')
	});
	
	$('.wait').click(function(){
		if( $(this).hasClass('disabled') ){
			alert('Por Favor Indicar si tu sueño fue Agradable o Desagradable')	
		}else{
			continuar();
		}
	});
	
	$('a.cancelar').click(function(){
		$('.sure').slideUp();
	});
	
	
	/*$('.caja_chat textarea').change(function(){
		alert('cambió')		
	})*/
	
	$('.caja_chat textarea').bind('input propertychange', function() {
		mensaje= $('.caja_chat textarea').val();
      	if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			$('#sender').removeClass('active');
		}else{
			$('#sender').addClass('active');
		}
	});
	
	
	$('.opciones .agradable').click(function(){
		$('.rangeselector').animate({
				'left':'100%'
		});	
		$('.opciones').removeClass('todos desa');			
		if( $('.opciones').hasClass('agra') ){}else{
			$('.opciones').addClass('agra');
			linked='agradable';	
		}
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	})
	$('.opciones .desagradable').click(function(){
		$('.rangeselector').animate({
				'left':'0%'
		});
		$('.opciones').removeClass('todos agra');			
		if( $('.opciones').hasClass('desa') ){}else{
			$('.opciones').addClass('desa');
			linked='desagradable';	
		}
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	})
	
	/*$('.caja_chat textarea').focus(function(){
		$("#chats").addClass('active');
	})
	$('.caja_chat textarea').focusout(function(){
		$("#chats").removeClass('active');
	})*/
	$('#sender').click(function(){
		mensaje= $('.caja_chat textarea').val();
		if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			mensaje='...'
		}				
		$('.caja_chat textarea').val('').focus();
		$('#chats').append('<span>'+mensaje+'</span>')
		$('.chats span:last').fadeIn(1000);
		$("#chats").animate({ scrollTop: $(document).height() }, 1000);
		mensaje='';
		$('#sender').removeClass('active');
	});
	
});

	

function berificaStado(){
	line = $('.rangeouter').css('width');
	line_in = parseInt(line);
	left_p =$('.rangeselector').css('left');
	left_in = parseInt(left_p);
	
	porsentaje =left_in / line_in * 100;
	
	//console.log(line_in,  left_in , porsentaje);
	
	if( porsentaje>=45 && porsentaje <=55 ){
		console.log('todos');
		$('.opciones').removeClass('desa agra');
		if( $('.opciones').hasClass('todos') ){}else{
			$('.opciones').addClass('todos');
		}	
					
		if( $('.wait').hasClass('disabled') ){}else{
			$('.wait').addClass('disabled');
		}			
	}else if(porsentaje<45){
		console.log('<---Desagradable');
		$('.opciones').removeClass('todos agra');			
		if( $('.opciones').hasClass('desa') ){}else{
			$('.opciones').addClass('desa');
			linked='desagradable';	
		}				
					
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	}else if(porsentaje>55){
		console.log('--->Agradable')
		$('.opciones').removeClass('desa todos');
		if( $('.opciones').hasClass('agra') ){}else{
			$('.opciones').addClass('agra');
			linked='agradable';	
				
		}			
					
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	}
}
function continuar(){	
	$('.sure.'+linked).slideDown();	
	//alert(linked)	
}



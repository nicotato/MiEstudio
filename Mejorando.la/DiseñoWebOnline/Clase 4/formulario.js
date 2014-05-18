$(document).ready(function(){
var $form = $('#formulario'),
    $titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first();
	$lista = $('#contenido');

function toggleForm(){
	$form.slideToggle();
	return false;
}

function beforeSubmit(){
	//everything
}

var id = setInterval(function(){
		sessionStorage.setItem('titulo', $titulo.val());
		sessionStorage.setItem('url', $url.val());
		$titulo.val(sessionStorage.getItem('titulo'));
		$url.val(sessionStorage.getItem('url'));
	},1000);


function agregarPost(){
	var titulo = $titulo.val();
		url = $url.val();
		clone = $primerPost.clone();
		
		clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
		$lista.prepend(clone);

		clone.slideDown();
}

//$('#publicar_nav').on('click',toggleForm);
$('#formulario').on('submit',agregarPost);
$('#publicar_nav a').click(toggleForm);


});
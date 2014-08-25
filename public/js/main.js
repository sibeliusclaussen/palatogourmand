$(function(){
	var 
	$productsList = $('.products-list'),
	$productsContent = $('.products-content'),
	products = [
		// Here put the produtcs separated with commas 
		{
			title: "Azeite de Oliva 8 Cocina",
			image: "../images/products/Azeite-8-Cocina-Transparente.png",
			information: {
				"Unidades/caixas": "3",
				"Peso": "14.2Kg",
				"Altura": "36.5cm",
				"Largura": "47cm",
				"Comprimento": "16.5cm",
				"Caixas": "32"
			}
		}
	],
	productThumbnailTemplate = function(product){
		return "<a href='#' class='product-thumbnail'>"+
				"<img src='"+product.image+"'/>"+
				"<h5>"+product.title+"</h5>"+
			"</a>";
	},
	productTemplate = function(product){
		return '<div style="display: none;">'+
			'<h4 class="title">'+product.title+'</h4>'+
            '<div class="product-image">'+
                '<img src="'+product.image+'">'+
            '</div>'+
            '<div class="information">'+
            	'<h6>Informações técnicas da caixa:</h6>'+
            	productInformationTableTemplate(product.information)+
            	'<a href="'+product.href+'" class="more-details-button"> + Detalhes </a>'+
            '</div>'+
        '</div>';
	},
	productInformationTableTemplate = function(information){
		return '<table>'+$.map(information,function(val, key){
			return '<tr><th>'+key+'</th><td>'+val+'</td></tr>';
		})+'</table>';
	};

	//Faking more products, exclude before put the new products
	for(var i = 0; i < 3; i++){
		products = products.concat(products);
	}

	$.each(products,function(i,product){
		var $thumb = $(productThumbnailTemplate(product)),
			$product = $(productTemplate(product)),
			marginTop;

		$productsList.append($thumb);
		$productsContent.append($product);

		marginTop = (1-i)*209;

		if(i == 0) {
			marginTop = 0;
		} else if (i == products.length - 1) {
			marginTop = marginTop + 209;
		}

		$thumb.click(function(e){
			e.preventDefault();
			$productsContent.children().hide();
			$product.show();

			$productsList.children().removeClass('active');
			$thumb.addClass('active');

			$productsList.css('margin-top', marginTop);
		});

		if(i == 0) $thumb.click();
	});

	// Melhorar isso para n nao depender do tamanho da tela
	$(window).scroll(function(){
		$('.headline-image-1, .headline-image-2, .headline-image-3').each(function(){
			var bottom = $(window).scrollTop() + $(window).height(),
				hiTop = $(this).offset().top;
			$(this).css('background-position','0 '+(-80+(bottom-hiTop)/8)+'px');	
		})
	});

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});

	// Click event to scroll top

	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop: 0},1000);
		return false;
	});

	$(".header-link").click(function(event) {
        event.preventDefault();        
        var $anchor = $('#' + this.hash.substring(1));
        $('html,body').animate({ 
            scrollTop: $anchor.offset().top - $anchor.attr('data-section')
        }, 500);        
    });
});
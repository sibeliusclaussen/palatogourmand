$(function(){
	var 
	$productsList = $('.products-list'),
	$productsContent = $('.products-content'),
	$headlines = $('.headline-image-1, .headline-image-2, .headline-image-3'),
	products = [
		// Here put the produtcs separated with commas 
		{
			title: "Azeite de Oliva Oito Cocina 5L",
			image: "images/landing-page/products/azeite-oito-cocina-5L.png",
			description: "Um azeite de oliva virgem desenvolvido por agrônomos, chefs de cozinha e produtores rurais para cozinheiros profissionais. Contento altos níveis de antioxidantes chamados polifenois, e um azeite de oliva para o dia a dia, indicado para fritar, marinar e até para mesa. Apresenta aromas de azeitonas frescas, levemente frutado com algumas notas de folhas. Nas boca e muito equilibrado.",
			information: {
				"Unidades/caixas" : "3",
				"Peso": "14.2Kg",
				"Altura": "36.5cm",
				"Largura": "47cm",
				"Comprimento": "16.5cm",
				"Caixas": "32",
			}
		},
		{
			title: "Azeite de Oliva Oito Cocina 1L",
			image: "images/landing-page/products/azeite-model-em-breve.jpg",
			description: "Um azeite de oliva virgem desenvolvido por agrônomos, chefs de cozinha e produtores rurais para cozinheiros profissionais. Contento altos níveis de antioxidantes chamados polifenois, e um azeite de oliva para o dia a dia, indicado para fritar, marinar e até para mesa. Apresenta aromas de azeitonas frescas, levemente frutado com algumas notas de folhas. Nas boca e muito equilibrado.",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		{
			title: "Azeite de Oliva Oito Orgânico",
			image: "images/landing-page/products/azeite-oito-organico-250.jpg",
			description: "Um azeite de oliva extra virgem oficialmente certificado orgânico e produzido com 100% de azeitonas picual nos arredores da cidade de Jaen no sul da Espanha. E o resultado de colheitas no mês de janeiro. Um azeite de oliva aromático, possui notas de suco fresco de azeitonas,figueiras e orvalho.",
			information: {
				"Unidades/caixas": "15",
				"Peso": "7.7Kg / 250mL",
				"Altura": "24cm",
				"Largura": "27cm",
				"Comprimento": "16.5cm",
				"Caixas/pallet": "114",
			}
		},
		{
			title: "Azeite de oliva Oito Seleccion Cuquillo",
			image: "images/landing-page/products/azeite-oito-sellecion-cuquillo-250.jpg",
			description: "Um azeite de oliva extra virgem produzido 100% com as raras azeitonas cultivadas na região central espanhola de Múrcia, chamadas azeitonas Cuquillo. E um azeite de oliva verde, com notas de alcachofras maduras e azeitonas avermelhadas. Ideal para saladas, peixes e para finalização. Ligeiramente amargo.",
			information: {
				"Unidades/caixas": "15",
				"Peso": "7.7Kg / 250mL",
				"Altura": "24cm",
				"Largura": "27cm",
				"Comprimento": "16.5cm",
				"Caixas/pallet": "114",
			}
		},
		{
			title: "Azeite de Oliva Oito Seleccion Colheita Verde",
			image: "images/landing-page/products/azeite-oito-sellecion-verde-250.png",
			description: "Um azeite de oliva extra virgem sensacional, menos filtrado, produzido principalmente com azeitonas da variedade Hojiblanca cultivadas na região de Cordoba na Espanha. Apresentando um frutado intenso com notas de frutas maduras, possui aromas de maças, banana e amêndoas. Na boca e equilibrado, cremoso e persistente.",
			information: {
				"Unidades/caixas": "15",
				"Peso": "7.7Kg / 250mL",
				"Altura": "24cm",
				"Largura": "27cm",
				"Comprimento": "16.5cm",
				"Caixas/pallet": "114",
			}
		},
		{
			title: "Azeite Oito Seleccion Colheita de Inverno",
			image: "images/landing-page/products/azeite-oito-sellecion-inverno-250.png",
			description: "Azeite de oliva extra virgem extraordinário, apresentado pela primeira vez no Brasil. As deliciosas azeitonas Manzanilla Carcerenha. Produzido para participar de concursos sensoriais em Cacere na Espanha, possui notas de casca de banana, tomates e ervas.",
			information: {
				"Unidades/caixas": "15",
				"Peso": "7.7Kg / 250mL",
				"Altura": "24cm",
				"Largura": "27cm",
				"Comprimento": "16.5cm",
				"Caixas/pallet": "114",
			}
		},
		{
			title: "Azeite de Oliva Oito Seleccion Portugal",
			image: "images/landing-page/products/azeite-model-em-breve.jpg",
			description: "<img src=images/landing-page/icons/icon-em-breve.jpg>",
			information: {			
			}
		},
		{
			title: "Azeite de Oliva Oito Andalucia",
			image: "images/landing-page/products/azeite-oito-andalucia-1L.jpg",
			description: "Um azeite de oliva clássico espanhol, produzido com as azeitonas Picual, Hojiblanca e um toque de Arbequina. Contém notas de amendoas e azeitonas molhadas. Na boca é persistente, vegetal e longo.",
			information: {
				"Unidades/caixas": "12",
				"Peso": "10.6Kg / 500mL",
				"Altura": "29cm",
				"Largura": "20cm",
				"Comprimento": "26cm",
				"Caixas / pallet": "114",
			}
		},
		{
			title: "Azeite de Oliva Oito Mini",
			image: "images/landing-page/products/azeite-oito-mini-20.png",
			description: "Um azeite de oliva desenvolvido especialmente para hoteis e serviços de entrega. Um monovarietal produzido com 100% com azeitonas Hojiblanca. Possui uma intensidade média e a presença de notas de folhas. Delicioso e equilibrado na boca.",
			information: {
				"Unidades/caixas": "266",
				"Peso": "25g / 20mL",
				"Altura": "8cm",
				"Largura": "2cm",
				"Comprimento": "2cm",
				"Caixas / pallet": "80",
			}
		},	
		// {
		// 	title: "Arroz Espanhol Oito Bomba",
		// 	image: "images/landing-page/products/azeite-oito-mini-20.png",
		// 	description: "",
		// 	information: {
		// 		"Unidades/caixas": "3",
		// 		"Peso": "1Kg",
		// 		"Altura": "36.5cm",
		// 		"Largura": "47cm",
		// 		"Comprimento": "16.5cm",
		// 		"Caixas": "32",
		// 	}
		// },
		// {
		// 	title: "Farinha de Amendôas Espanholas Oito",
		// 	image: "images/landing-page/products/azeite-model-em-breve.jpg",
		// 	description: "",
		// 	information: {
		// 		"<img src=images/landing-page/icons/icon-em-breve.jpg>":""			
		// 	}
		// },
		{
			title: "Queijos Artesanais do Brasil",
			image: "images/landing-page/products/queijos-artesanais-do-brasil.jpg",
			description: "11 diferentes tipos de queijos caseiros, todos executados pelo grande Mestre queijero do Rio de Janeiro. Queijos Muito aromáticos, e com toques sutis no sabor que vão de lácteos fermentados, iogurte, coalhada e ervas frescas do campo a sabores levemente picante e adocicado.  ",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		{
			title: "Fideos Tradicionais Espanhois Oito",
			image: "images/landing-page/products/oito-fideos.png",
			description: "Massa de Sêmula de trigo durum espanhol de Valencia (Espanha).",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		{
			title: "Nozes Pecan Oito",
			image: "images/landing-page/products/nozes-pecan.jpg",
			description: "Aroma doce e intenso, tem um amargor muito leve, não tão forte quanto a noz clássica. Uma das nozes mais utilizadas pelo seu valor organoléptico.",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		{
			title: "Baunilha de Madagascar",
			image: "images/landing-page/products/baunilha.png",
			description: "Cremosa, úmida e muito aromática. Esta fava possui características doces e intensas com um perfume único com notas de banana.",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		{
			title: "Baunilha de Uganda",
			image: "images/landing-page/products/baunilha.png",
			description: "Cremosa, úmida e muito aromática. Esta fava possui características doces e intensas com um perfume único com notas de banana. ",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
			}
		},
		// {
		// 	title: "Garrafas de Mesa Oito, Serigrafadas",
		// 	image: "images/landing-page/products/azeite-oito-mini-20.png",
		// 	description: "",
		// 	information: {
		// 		"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
		// 	}
		// },
		{
			title: "Vieras Nativas da Ilha Grande / RJ",
			image: "images/landing-page/products/vieiras-nativas.jpg",
			description: "Vieiras frescas e suculentas, de sabor adocicado e aroma suave de mar de Baia de Ilha Grande",
			information: {
				"<img src=images/landing-page/icons/icon-em-breve.jpg>":""
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
            	'<p>'+product.description+'</p>'+
            	'<div class="tecnique-information hide">'+
	            	'<h6>Informações técnicas da caixa:</h6>'+
	            	productInformationTableTemplate(product.information)+
	            '</div>'+
            	'<a href="'+product.href+'" class="more-details-button"> + Detalhes </a>'+
            '</div>'+
        '</div>';
	},
	productInformationTableTemplate = function(information){
		return '<table>'+$.map(information,function(val, key){
			return '<tr><th>'+key+'</th><td>'+val+'</td></tr>';
		})+'</table>';
	};

	//For more products, exclude or hide this before ( This is a faking products to test)
	// for(var i = 0; i < 3; i++){
	// 	products = products.concat(products);
	// }

	$.each(products,function(i,product){
		var $thumb = $(productThumbnailTemplate(product)),
			$product = $(productTemplate(product)),
			marginTop;

		$productsList.append($thumb);
		$productsContent.append($product);

		marginTop = (1-i)*198;

		if(i == 0) {
			marginTop = 0;
		} else if (i == products.length - 1) {
			marginTop = marginTop + 198;
		}

		product.select = function(){
			$productsContent.children().hide();
			$product.show();

			$productsList.children().removeClass('active');
			$thumb.addClass('active');

			$productsList.css('margin-top', marginTop);
		}

		$thumb.click(function(e){
			e.preventDefault();
			product.select();
		});

		if(i == 0) $thumb.click();

	});

	function select(i){
		if(products[i]){
			products[i].select();
		}
	};

	$(".arrow-list.before").click(function(){
		select($(".product-thumbnail.active").index()-1);
	});

	$(".arrow-list.after").click(function(){
		select($(".product-thumbnail.active").index()+1);
	});

	// Melhorar isso para n nao depender do tamanho da tela
	$(window).scroll(function(){
		$headlines.each(function(){
			var bottom = $(window).scrollTop(),
				hiTop = $(this).offset().top;
			$(this).css('background-position','0 '+((bottom-hiTop)/3)+'px');	
		});
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

	$('.more-details-button').click(function(){
		$('.tecnique-information').fadeToggle();
		return false;
	});
});
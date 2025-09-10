const se = new StarterEngine();

se.valor;

se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Blueprint.png", "image");
    this.loader.addResource("banheiro", "Comodos/Banheiro.png", "image");
    this.loader.addResource("cozinha", "Comodos/Cozinha.png", "image");
    this.loader.addResource("entrada", "Comodos/Entrada.png", "image");
    this.loader.addResource("garagem", "Comodos/Garagem.png", "image");
    this.loader.addResource("lavanderia", "Comodos/Lavanderia.png", "image");
    this.loader.addResource("quarto1", "Comodos/Quarto1.png", "image");
    this.loader.addResource("quarto2", "Comodos/Quarto2.png", "image");
    this.loader.addResource("sala", "Comodos/Sala.png", "image");

    this.loader.addResource("acesso_cozinha", "Moveis/AcessoCozinha.png", "image");
    this.loader.addResource("acesso_sala", "Moveis/AcessoSala.png", "image");
    this.loader.addResource("armario1", "Moveis/Armario1.png", "image");
    this.loader.addResource("armario2", "Moveis/Armario2.png", "image");
    this.loader.addResource("balcao1", "Moveis/Balcao1.png", "image");
    this.loader.addResource("balcao2", "Moveis/Balcao2.png", "image");
    this.loader.addResource("balcao3", "Moveis/Balcao3.png", "image");
    this.loader.addResource("balcao4", "Moveis/Balcao4.png", "image");
    this.loader.addResource("box", "Moveis/Box.png", "image");
    this.loader.addResource("cadeira_mesa", "Moveis/CadeiraMesa.png", "image");
    this.loader.addResource("cadeira_quartos", "Moveis/CadeiraQuartos.png", "image");
    this.loader.addResource("cama_casal", "Moveis/CamaCasal.png", "image");
    this.loader.addResource("cama_solteiro", "Moveis/CamaSolteiro.png", "image");
    this.loader.addResource("carro", "Moveis/Carro.png", "image");
    this.loader.addResource("centro", "Moveis/Centro.png", "image");
    this.loader.addResource("chuveiro", "Moveis/Chuveiro.png", "image");
    this.loader.addResource("escrivaninha", "Moveis/Escrivaninha.png", "image");
    this.loader.addResource("estante", "Moveis/Estante.png", "image");
    this.loader.addResource("fogao", "Moveis/Fogao.png", "image");
    this.loader.addResource("geladeira", "Moveis/Geladeira.png", "image");
    this.loader.addResource("guarda_roupa", "Moveis/GuardaRoupa.png", "image");
    this.loader.addResource("hack", "Moveis/Hack.png", "image");
    this.loader.addResource("janela_horizontal", "Moveis/JanelaHorizontal.png", "image");
    this.loader.addResource("janela_vertical", "Moveis/JanelaVertical.png", "image");
    this.loader.addResource("lavadora", "Moveis/Lavadora.png", "image");
    this.loader.addResource("mesa", "Moveis/Mesa.png", "image");
    this.loader.addResource("mesa_lateral", "Moveis/MesaLateral.png", "image");
    this.loader.addResource("pia_banheiro", "Moveis/PiaBanheiro.png", "image");
    this.loader.addResource("pia_cozinha", "Moveis/PiaCozinha.png", "image");
    this.loader.addResource("pia_lavanderia", "Moveis/PiaLavanderia.png", "image");
    this.loader.addResource("poltrona", "Moveis/Poltrona.png", "image");
    this.loader.addResource("porta_garagem", "Moveis/PortaGaragem.png", "image");
    this.loader.addResource("porta_horizontal", "Moveis/PortaHorizontal.png", "image");
    this.loader.addResource("porta_vertical", "Moveis/PortaVertical.png", "image");
    this.loader.addResource("privada", "Moveis/Privada.png", "image");
    this.loader.addResource("sofa", "Moveis/Sofa.png", "image");
    this.loader.addResource("tapete_grande", "Moveis/TapeteGrande.png", "image");
    this.loader.addResource("tapete_pequeno", "Moveis/TapetePequeno.png", "image");
    this.loader.addResource("varal", "Moveis/Varal.png", "image");
    this.loader.addResource("vaso_planta", "Moveis/VasoPlanta.png", "image");

	this.loader.addResource("logo", "Menu/Logo.png", "image");
	this.loader.addResource("jogar", "Menu/Jogar.png", "image");

};


//Quando o loading acabar
se.gameReady = function() {

	var menu = new Scene();
	menu.setFunctionStart( setMenu );

	var jogo = new Scene();
	jogo.setFunctionStart( setJogo );

	var entrada = new Scene();
	entrada.setFunctionStart( setEntrada );

	this.mlevel.addScene(menu);
	this.mlevel.addScene(jogo);
	this.mlevel.addScene(entrada);
}

function setMenu(){

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var logo = new GameObject("logo", 0, 0, "gui");
	logo.setPosition( canvas.width/2 - logo.w/2, 130);

	var jogar = new Button("jogar", 0, 0, function(){
		alert("ok");
	});
	jogar.setPosition( canvas.width/2 - jogar.w/2, 550);

}

function setEntrada(){

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	
}

function setJogo(){

	/*
	new GameObject("linha", 20,120,"bloco1", 660, 5);
	new GameObject("linha", 20,220,"bloco1", 660, 5);
	new GameObject("linha", 20,320,"bloco1", 660, 5);
	new GameObject("linha", 20,420,"bloco1", 660, 5);


	new GameObject("bloco", 20,20,"bloco1", 660, 20);
	new GameObject("bloco", 20,520,"bloco1", 660, 20);
	new GameObject("bloco2", 20,20,"bloco1",20, 500);
	new GameObject("bloco2", 660,20,"bloco1",20, 500);
	
	//bolas
	
	anim = new Animation( ["bola_amarela"]);
	anim2 = new Animation( ["bola_amarela_on"]);

	
	b01 = new Bola( [anim, anim2] , 50, 100, "button",1 );
	b02 = new Bola( [anim, anim2], 100, 100, "button",1 );
	b03 = new Bola( [anim, anim2], 150, 100, "button",1 );
	b04 = new Bola( [anim, anim2], 200, 100, "button",1 );
	b05 = new Bola( [anim, anim2], 250, 100, "button",1 );

	
	b01.setDependence(b02, null);
	b02.setDependence(b03, b01);
	b03.setDependence(b04, b02);
	b04.setDependence(b05, b03);
	b05.setDependence(null, b04);
	
	anim3 = new Animation( ["bola_azul"]);
	anim4 = new Animation( ["bola_azul_on"]);
	
	b11 = new Bola([anim3, anim4], 50, 200, "button", 10 );
	b12 = new Bola([anim3, anim4], 100, 200, "button", 10 );
	b13 = new Bola([anim3, anim4], 150, 200, "button", 10 );
	b14 = new Bola([anim3, anim4], 200, 200, "button", 10 );
	b15 = new Bola([anim3, anim4], 250, 200, "button", 10 );
	
	
	b11.setDependence(b12, null);
	b12.setDependence(b13, b11);
	b13.setDependence(b14, b12);
	b14.setDependence(b15, b13);
	b15.setDependence(null, b14);
	
	anim5 = new Animation( ["bola_laranja"]);
	anim6 = new Animation( ["bola_laranja_on"]);
	
	
	b21 = new Bola([anim5, anim6], 50, 300, "button", 100 );
	b22 = new Bola([anim5, anim6], 100, 300, "button", 100 );
	b23 = new Bola([anim5, anim6], 150, 300, "button", 100 );
	b24 = new Bola([anim5, anim6], 200, 300, "button", 100 );
	b25 = new Bola([anim5, anim6], 250, 300, "button", 100 );
	
	b21.setDependence(b22, null);
	b22.setDependence(b23, b21);
	b23.setDependence(b24, b22);
	b24.setDependence(b25, b23);
	b25.setDependence(null, b24);
	
	anim7 = new Animation( ["bola_vermelha"]);
	anim8 = new Animation( ["bola_vermelha_on"]);
	
	
	b31 = new Bola([anim7, anim8], 50, 400, "button", 1000 );
	b32 = new Bola([anim7, anim8], 100, 400, "button", 1000 );
	b33 = new Bola([anim7, anim8], 150, 400, "button", 1000 );
	b34 = new Bola([anim7, anim8], 200, 400, "button", 1000 );
	b35 = new Bola([anim7, anim8], 250, 400, "button", 1000 );
	
	b31.setDependence(b32, null);
	b32.setDependence(b33, b31);
	b33.setDependence(b34, b32);
	b34.setDependence(b35, b33);
	b35.setDependence(null, b34);
	
	//arrayB = [b01, b02, b03, b04, b05,b11, b12, b13, b14, b15,b21, b22, b23, b24, b25,b31, b32, b33, b34, b35];
	 
	valor = 0;
	
	txt = new Text("VALOR: ?", 30, 570, "white", 25)

	txt.update = function(){
	
		this.setText("VALOR: " + valor);
	}
	*/
}

const se = new StarterEngine();

se.valor;

se.setResources = function () {
    //Carregando recursos
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
	this.loader.addResource("armario3", "Moveis/Armario3.png", "image");
    this.loader.addResource("balcao1", "Moveis/Balcao1.png", "image");
    this.loader.addResource("balcao2", "Moveis/Balcao2.png", "image");
    this.loader.addResource("balcao3", "Moveis/Balcao3.png", "image");
    this.loader.addResource("balcao4", "Moveis/Balcao4.png", "image");
    this.loader.addResource("box", "Moveis/Box.png", "image");
    this.loader.addResource("cadeira_mesa1", "Moveis/CadeiraMesa1.png", "image");
	this.loader.addResource("cadeira_mesa2", "Moveis/CadeiraMesa2.png", "image");
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
	this.loader.addResource("guarda_roupa2", "Moveis/GuardaRoupa2.png", "image");
    this.loader.addResource("hack", "Moveis/Hack.png", "image");
    this.loader.addResource("janela_horizontal", "Moveis/JanelaHorizontal.png", "image");
    this.loader.addResource("janela_vertical", "Moveis/JanelaVertical.png", "image");
    this.loader.addResource("lavadora", "Moveis/Lavadora.png", "image");
    this.loader.addResource("mesa", "Moveis/Mesa.png", "image");
    this.loader.addResource("mesa_lateral1", "Moveis/MesaLateral1.png", "image");
	this.loader.addResource("mesa_lateral2", "Moveis/MesaLateral2.png", "image");
    this.loader.addResource("pia_banheiro", "Moveis/PiaBanheiro.png", "image");
    this.loader.addResource("pia_cozinha", "Moveis/PiaCozinha.png", "image");
    this.loader.addResource("pia_lavanderia", "Moveis/PiaLavanderia.png", "image");
    this.loader.addResource("poltrona", "Moveis/Poltrona.png", "image");
	this.loader.addResource("porta_arco", "Moveis/PortaArco.png", "image");
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
	this.loader.addResource("tentrada", "Titulos/TEntrada.png", "image");
	this.loader.addResource("tquarto1", "Titulos/TQuarto1.png", "image");
	this.loader.addResource("tquarto2", "Titulos/TQuarto2.png", "image");
	this.loader.addResource("tsala", "Titulos/TSala.png", "image");
	this.loader.addResource("tbanheiro", "Titulos/TBanheiro.png", "image");
	this.loader.addResource("tcozinha", "Titulos/TCozinha.png", "image");
	this.loader.addResource("tlavanderia", "Titulos/TLavanderia.png", "image");
	this.loader.addResource("tgaragem", "Titulos/TGaragem.png", "image");

};


//Quando o loading acabar
se.gameReady = function() {

	var menu = new Scene();
	menu.setFunctionStart( setMenu );

	var entrada = new Scene();
	entrada.setFunctionStart( setEntrada );

	var quarto2 = new Scene();
	quarto2.setFunctionStart( setQuarto2 );

	var quarto1 = new Scene();
	quarto1.setFunctionStart( setQuarto1 );

	var sala = new Scene();
	sala.setFunctionStart( setSala );

	var banheiro = new Scene();
	banheiro.setFunctionStart( setBanheiro );

	var cozinha = new Scene();
	cozinha.setFunctionStart( setCozinha );

	var lavanderia = new Scene();
	lavanderia.setFunctionStart( setLavanderia );

	var garagem = new Scene();
	garagem.setFunctionStart( setGaragem );

	var jogo = new Scene();
	jogo.setFunctionStart( setJogo );

	this.mlevel.addScene(menu);
	this.mlevel.addScene(entrada);
	this.mlevel.addScene(quarto2);
	this.mlevel.addScene(quarto1);
	this.mlevel.addScene(sala);
	this.mlevel.addScene(banheiro);
	this.mlevel.addScene(cozinha);
	this.mlevel.addScene(lavanderia);
	this.mlevel.addScene(garagem);
	this.mlevel.addScene(jogo);
}

//Objetos do Menu
function setMenu(){

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var logo = new GameObject("logo", 0, 0, "gui");
	logo.setPosition( canvas.width/2 - logo.w/2, 130);

	var jogar = new Button("jogar", 0, 0, function(){
		se.mlevel.loadScene(1);
		se.mlevel.loadScene(2);
		se.mlevel.loadScene(3);
		se.mlevel.loadScene(4);
		se.mlevel.loadScene(5);
		se.mlevel.loadScene(6);
		se.mlevel.loadScene(7);
		se.mlevel.loadScene(8);
		se.mlevel.loadScene(9);
		se.mlevel.loadScenePersist(1);
		
		startTiming();
	});
	jogar.setPosition( canvas.width/2 - jogar.w/2, 550);

}

function startTiming(){
	//aleatorio de 1 até 8
	selectLevel = Math.floor( (Math.random() * 8 ) + 1);
	selectScene = se.mlevel.getScene(selectLevel);
	console.log( selectScene);
	//pegando todos os objetos
	objs = selectScene.getObjects();
	console.log( objs);
	selectObjs = objs.filter(obj => obj.classename == "map");
	console.log( selectObjs);
	selectObjRandom = Math.floor( (Math.random() * selectObjs.length ) );

	console.log("Bug em - Cena " + selectLevel + " objeto "+ selectObjRandom );
	console.log( selectObjs[ selectObjRandom]);
	console.log( selectObjs[ selectObjRandom].animation[0].sprites[0].src );
	
	selectObjs[ selectObjRandom ].setAlpha(0);
	setInterval( startTiming, 30*1000);
}

//Tem que ter isso para todos os levels (levelIsLoaded ...)
entradaIsLoaded = false;
//Objetos da entrada e suas posições
function setEntrada(){
	//Tem que ter isso para todos os levels
	if( entradaIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		entradaIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var entrada = new GameObject("entrada", 0, 0, "gui", 184, 630);
	entrada.setPosition(canvas.width/2 - entrada.w/2, 140);

	//Titulo
	var tEntrada = new GameObject("tentrada", 0, 0, "gui", 141, 347);
	tEntrada.setPosition(canvas.width/2 - tEntrada.w/2 - 170, 450 - 173);

	//movéis
	var tapeteP = new GameObject("tapete_pequeno", 0, 0, "map", 120, 78);
	tapeteP.setPosition(canvas.width/2 - tapeteP.w/2, 660);

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2, 160);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(3);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 - 90, 180);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(2);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 - 90, 450);

	var portaH = new GameObject("porta_horizontal", 0, 0, "gui", 121, 14);
	portaH.setPosition(canvas.width/2 - portaH.w/2, 761);

	var portaA = new Button("porta_arco", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 258, 14);
	portaA.setPosition(canvas.width/2 - portaA.w/2 + 90, 210);
}

quarto2IsLoaded = false;
function setQuarto2(){

	if( quarto2IsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		quarto2IsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var quarto2 = new GameObject("quarto2", 0, 0, "gui", 510, 441);
	quarto2.setPosition(canvas.width/2 - quarto2.w/2, 235);

	//Titulo
	var tQuarto2 = new GameObject("tquarto2", 0, 0, "gui", 141, 370);
	tQuarto2.setPosition(canvas.width/2 - tQuarto2.w/2 - 330, 450 - 185);

	//movéis
	var camaS = new GameObject("cama_solteiro", 0, 0, "map", 114, 247);
	camaS.setPosition(canvas.width/2 - camaS.w/2 + 90, 412);

	var guardaRoupa2 = new GameObject("guarda_roupa2", 0, 0, "map", 73, 215);
	guardaRoupa2.setPosition(canvas.width/2 - guardaRoupa2.w/2 - 200, 250);

	var escrivaninha = new GameObject("escrivaninha", 0, 0, "map", 254, 94);
	escrivaninha.setPosition(canvas.width/2 - escrivaninha.w/2 - 110, 565);

	var cadeiraQ = new GameObject("cadeira_quartos", 0, 0, "map", 85, 69);
	cadeiraQ.setPosition(canvas.width/2 - cadeiraQ.w/2 - 75, 482);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 115, 665);

	var mesaLateral2 = new GameObject("mesa_lateral2", 0, 0, "map", 72, 79);
	mesaLateral2.setPosition(canvas.width/2 - mesaLateral2.w/2 + 198, 580);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(1);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 253, 260);

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 - 200, 485);
}

quarto1IsLoaded = false;
function setQuarto1(){

	if( quarto1IsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		quarto1IsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var quarto1 = new GameObject("quarto1", 0, 0, "gui", 458, 610);
	quarto1.setPosition(canvas.width/2 - quarto1.w/2, 150);

	//Titulo
	var tQuarto1 = new GameObject("tquarto1", 0, 0, "gui", 141, 370);
	tQuarto1.setPosition(canvas.width/2 - tQuarto1.w/2 - 300, 450 - 185);

	//Movéis
	var guardaRoupa = new GameObject("guarda_roupa", 0, 0, "map", 73, 215);
	guardaRoupa.setPosition(canvas.width/2 - guardaRoupa.w/2 + 170, 170);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 120, 143);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 + 40, 143);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(1);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 227, 550);

	var escrivaninha = new GameObject("escrivaninha", 0, 0, "map", 254, 94);
	escrivaninha.setPosition(canvas.width/2 - escrivaninha.w/2 - 85, 650);

	var estante = new GameObject("estante", 0, 0, "map", 150, 58);
	estante.setPosition(canvas.width/2 - estante.w/2 + 133, 685);

	var mesaLateral1 = new GameObject("mesa_lateral1", 0, 0, "map", 79, 72);
	mesaLateral1.setPosition(canvas.width/2 - mesaLateral1.w/2 - 170, 200);

	var camaC = new GameObject("cama_casal", 0, 0, "map", 248, 214);
	camaC.setPosition(canvas.width/2 - camaC.w/2 - 90, 285);

	var mesaLateral1 = new GameObject("mesa_lateral1", 0, 0, "map", 79, 72);
	mesaLateral1.setPosition(canvas.width/2 - mesaLateral1.w/2 - 170, 515);

	var cadeiraQ = new GameObject("cadeira_quartos", 0, 0, "map", 85, 69);
	cadeiraQ.setPosition(canvas.width/2 - cadeiraQ.w/2 - 65, 565);

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 + 170, 400);
}

salaIsLoaded = false;
function setSala(){

	if( salaIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		salaIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var sala = new GameObject("sala", 0, 0, "gui", 606, 629);
	sala.setPosition(canvas.width/2 - sala.w/2, 140);

	//Titulo
	var tSala = new GameObject("tsala", 0, 0, "gui", 141, 219);
	tSala.setPosition(canvas.width/2 - tSala.w/2 - 370, 450 - 109);

	//Movéis
	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2, 758);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 180, 758);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 + 180, 758);

	var portaA = new Button("porta_arco", 0, 0, function(){
		se.mlevel.loadScenePersist(1);
	}, 258, 14);
	portaA.setPosition(canvas.width/2 - portaA.w/2 - 301, 210);

	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(5);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 - 200, 135);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(8);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 301, 260);

	var hack = new GameObject("hack", 0, 0, "map", 71, 237);
	hack.setPosition(canvas.width/2 - hack.w/2 + 250, 500);

	var tapeteG = new GameObject("tapete_grande", 0, 0, "map", 181, 249);
	tapeteG.setPosition(canvas.width/2 - tapeteG.w/2 + 80, 492);

	var centro = new GameObject("centro", 0, 0, "map", 72, 96);
	centro.setPosition(canvas.width/2 - centro.w/2 + 80, 570);

	var sofa = new GameObject("sofa", 0, 0, "map", 153, 211);
	sofa.setPosition(canvas.width/2 - sofa.w/2 - 180, 460);

	var poltrona = new GameObject("poltrona", 0, 0, "map", 90, 93);
	poltrona.setPosition(canvas.width/2 - poltrona.w/2 - 90, 640);

	var mesa = new GameObject("mesa", 0, 0, "map", 241, 95);
	mesa.setPosition(canvas.width/2 - mesa.w/2, 240);

	var cadeiraM1 = new GameObject("cadeira_mesa1", 0, 0, "map", 60, 70);
	cadeiraM1.setPosition(canvas.width/2 - cadeiraM1.w/2 + 50, 165);

	var cadeiraM1 = new GameObject("cadeira_mesa1", 0, 0, "map", 60, 70);
	cadeiraM1.setPosition(canvas.width/2 - cadeiraM1.w/2 - 50, 165);

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 + 50, 340);

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 - 50, 340);

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 + 250, 420);

	var acessoCozinha = new Button("acesso_cozinha", 0, 0, function(){
		se.mlevel.loadScenePersist(6);
	}, 59, 117);
	acessoCozinha.setPosition(canvas.width/2 - acessoCozinha.w/2 + 220, 110);
}

banheiroIsLoaded = false;
function setBanheiro(){

	if( banheiroIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		banheiroIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var banheiro = new GameObject("banheiro", 0, 0, "gui", 431, 374);
	banheiro.setPosition(canvas.width/2 - banheiro.w/2, 270);

	//Titulo
	var tBanheiro = new GameObject("tbanheiro", 0, 0, "gui", 141, 374);
	tBanheiro.setPosition(canvas.width/2 - tBanheiro.w/2 - 290, 450 - 187);

	//Movéis
	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 + 50, 635);

	var box = new GameObject("box", 0, 0, "map", 18, 374);
	box.setPosition(canvas.width/2 - box.w/2 - 50, 270);

	var chuveiro = new GameObject("chuveiro", 0, 0, "map", 73, 121);
	chuveiro.setPosition(canvas.width/2 - chuveiro.w/2 - 135, 270);

	var privada = new GameObject("privada", 0, 0, "map", 78, 98);
	privada.setPosition(canvas.width/2 - privada.w/2 + 25, 285);

	var piaB = new GameObject("pia_banheiro", 0, 0, "map", 83, 76);
	piaB.setPosition(canvas.width/2 - piaB.w/2 + 140, 270);

	var armario1 = new GameObject("armario1", 0, 0, "map", 73, 162);
	armario1.setPosition(canvas.width/2 - armario1.w/2 + 160, 420);
}

cozinhaIsLoaded = false;
function setCozinha(){

	if( cozinhaIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		cozinhaIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var cozinha = new GameObject("cozinha", 0, 0, "gui", 609, 374);
	cozinha.setPosition(canvas.width/2 - cozinha.w/2, 270);

	//Titulo
	var tCozinha = new GameObject("tcozinha", 0, 0, "gui", 141, 333);
	tCozinha.setPosition(canvas.width/2 - tCozinha.w/2 - 370, 450 - 166);

	//Movéis
	var balcao1 = new GameObject("balcao1", 0, 0, "map", 109, 109);
	balcao1.setPosition(canvas.width/2 - balcao1.w/2 + 110, 535);

	var balcao2 = new GameObject("balcao2", 0, 0, "map", 228, 109);
	balcao2.setPosition(canvas.width/2 - balcao2.w/2 - 190, 535);

	var balcao3 = new GameObject("balcao3", 0, 0, "map", 374, 109);
	balcao3.setPosition(canvas.width/2 - balcao3.w/2 - 117, 270);

	var geladeira = new GameObject("geladeira", 0, 0, "map", 206, 95);
	geladeira.setPosition(canvas.width/2 - geladeira.w/2 + 185, 285);

	var fogao = new GameObject("fogao", 0, 0, "map", 105, 105);
	fogao.setPosition(canvas.width/2 - fogao.w/2 - 10, 525);

	var piaC = new GameObject("pia_cozinha", 0, 0, "map", 109, 163);
	piaC.setPosition(canvas.width/2 - piaC.w/2 - 250, 375);

	var acessoSala = new Button("acesso_sala", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 59, 117);
	acessoSala.setPosition(canvas.width/2 - acessoSala.w/2 + 232, 615);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(7);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 302, 430);

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 60, 263);
}

lavanderiaIsLoaded = false;
function setLavanderia(){

	if( lavanderiaIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		lavanderiaIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var lavanderia = new GameObject("lavanderia", 0, 0, "gui", 668, 338);
	lavanderia.setPosition(canvas.width/2 - lavanderia.w/2, 285);

	//Titulo
	var tLavanderia = new GameObject("tlavanderia", 0, 0, "gui", 141, 434);
	tLavanderia.setPosition(canvas.width/2 - tLavanderia.w/2 - 400, 450 - 217);

	//Movéis
	var lavadora = new GameObject("lavadora", 0, 0, "map", 89, 109);
	lavadora.setPosition(canvas.width/2 - lavadora.w/2 - 272, 300);
	
	var balcao4 = new GameObject("balcao4", 0, 0, "map", 288, 109);
	balcao4.setPosition(canvas.width/2 - balcao4.w/2 - 70, 285);

	var varal = new GameObject("varal", 0, 0, "map", 139, 334);
	varal.setPosition(canvas.width/2 - varal.w/2 + 150, 287);

	var piaL = new GameObject("pia_lavanderia", 0, 0, "map", 83, 85);
	piaL.setPosition(canvas.width/2 - piaL.w/2 - 140, 285);

	var armario2 = new GameObject("armario2", 0, 0, "map", 73, 215);
	armario2.setPosition(canvas.width/2 - armario2.w/2 + 282, 300);

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 - 100, 530);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(6);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 - 332, 440);

	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(8);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 - 210, 615);
}

garagemIsLoaded = false;
function setGaragem(){

	if( garagemIsLoaded ){
		console.log("segunda");
		return;
	}else{
		console.log("primeira")
		garagemIsLoaded = true;
	}

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	//Parede
	var garagem = new GameObject("garagem", 0, 0, "gui", 457, 653);
	garagem.setPosition(canvas.width/2 - garagem.w/2, 128);

	//Titulo
	var tGaragem = new GameObject("tgaragem", 0, 0, "gui", 141, 373);
	tGaragem.setPosition(canvas.width/2 - tGaragem.w/2 - 300, 450 - 186);

	//Movéis
	var armario3 = new GameObject("armario3", 0, 0, "map", 215, 73);
	armario3.setPosition(canvas.width/2 - armario3.w/2 + 102, 148);

	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(7);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 - 120, 123);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 - 226, 260);

	var janelaV = new GameObject("janela_vertical", 0, 0, "map", 18, 129);
	janelaV.setPosition(canvas.width/2 - janelaV.w/2 + 226, 260);
	
	var portaG = new GameObject("porta_garagem", 0, 0, "gui", 321, 14);
	portaG.setPosition(canvas.width/2 - portaG.w/2, 772);

	var carro = new GameObject("carro", 0, 0, "map", 215, 370);
	carro.setPosition(canvas.width/2 - carro.w/2, 320);
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

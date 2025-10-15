// --- Variáveis globais ---
let bugCount = 0; // número de bugs
let totalTime = 20 * 60; // 20 minutos em segundos
let gameTimer = null; //tempo de jogo
let jogoAtivo = false; //jogo ativo ou não

// --- Starter Engine ------------------------------------------------------------------------------------------------
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
    this.loader.addResource("mesa_principal", "Moveis/Mesa.png", "image");
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
	this.loader.addResource("derrota", "Menu/Derrota.png", "image");
	this.loader.addResource("vitoria", "Menu/Vitoria.png", "image");
	this.loader.addResource("aviso", "Menu/Aviso.png", "image");

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

	var derrota = new Scene();
	derrota.setFunctionStart( setDerrota );

	var vitoria = new Scene();
	vitoria.setFunctionStart( setVitoria );

	var menu2 = new Scene();
	menu2.setFunctionStart( setMenu2 );

	this.mlevel.addScene(menu); //00
	this.mlevel.addScene(entrada); //01
	this.mlevel.addScene(quarto2); //02
	this.mlevel.addScene(quarto1); //03
	this.mlevel.addScene(sala); //04
	this.mlevel.addScene(banheiro); //05
	this.mlevel.addScene(cozinha); //06
	this.mlevel.addScene(lavanderia); //07
	this.mlevel.addScene(garagem); //08
	this.mlevel.addScene(derrota); //09
	this.mlevel.addScene(vitoria); //10
	this.mlevel.addScene(menu2); //11

	ativarHoverNomesComMouse(); // ativa o hover
}

// ---- MENUS ---------------------------------------------------------------

function setMenu(){
	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var logo = new GameObject("logo", 0, 0, "gui");
	logo.setPosition( canvas.width/2 - logo.w/2 - 23, 130);

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
		se.mlevel.loadScene(10);
		se.mlevel.loadScene(11);
		se.mlevel.loadScenePersist(11);
	});
	jogar.setPosition( canvas.width/2 - jogar.w/2 - 23, 550);

}

function setMenu2(){
	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var aviso = new Button("aviso", 0, 0, function(){
		se.mlevel.loadScenePersist(1);

		jogoAtivo = true;
		bugCount = 0;
		
		console.log("🕒 Você tem 30 segundos para observar a casa 🕒");

        // Espera 30 segundos antes de iniciar os bugs
        setTimeout(() => {
            console.log("⚠️ Inicio dos Bugs ⚠️");
            startTiming();
			totalTime = 1200; // 20 minutos em segundos
			iniciarContagemVitoria();
        }, 30*1000); // 30 segundos
	}, 613, 850);
	aviso.setPosition( canvas.width/2 - aviso.w/2 - 10, 155);
}

// ---- TEMPORIZADOR ---------------------------------------------------------------

function startTiming(){
	if (!jogoAtivo) return; // Evita rodar caso o jogo tenha terminado

	// Seleciona aleatoriamente uma cena entre 1 e 8
	const level = Math.floor((Math.random() * 8) + 1);
	const scene = se.mlevel.getScene(level);
	const objects = scene.getObjects();
	
	// Pega apenas objetos da classe "map" que estão visíveis
	const visibleObjects = objects.filter(
    	obj => obj.classename === "map" && obj.getAlpha() !== 0
	);

	// Se não há objetos visíveis, pula para o próximo ciclo
	if (visibleObjects.length === 0) {
		console.warn(`Nenhum objeto visível na cena ${level}, pulando...`);
		setTimeout(startTiming, 1*1000);
		return;
	}
	// Escolhe um objeto aleatório e buga
	const randomIndex = Math.floor(Math.random() * visibleObjects.length);
	const randomObj = visibleObjects[randomIndex];

	console.log(
    	`Bug em - Cena ${level} - Objeto ${randomIndex} (${randomObj.name || "sem nome"})`
  	);
  	console.log(randomObj);

	// Deixa o objeto invisivel
  	randomObj.setAlpha(0);

	// Incrementa o contador de bugs
	bugCount++;
	console.log(`🐛 Novo bug! Total: ${bugCount}`);

	// Se o número de bugs chegar a 6, derrota
	if (bugCount >= 6) {
		console.log("💀 DERROTA! Muitos bugs!");
		jogoAtivo = false;
		clearInterval(gameTimer); // para o cronômetro de 20 minutos
		setDerrota();
		return; // impede o próximo ciclo
	}

	// Tempo para um bug surgir novamente
	setTimeout(startTiming, 30*1000);
}

// ---- ESTRUTURA PRINCIPAL DA CASA ---------------------------------------------------------------

entradaIsLoaded = false;
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

	//Movéis que podem bugar
	var tapeteP = new GameObject("tapete_pequeno", 0, 0, "map", 120, 78);
	tapeteP.setPosition(canvas.width/2 - tapeteP.w/2, 660);
	tapeteP.name = "tapete_pequeno1";
	verificacao(tapeteP); //verificação

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2, 160);
	vPlanta.name = "vaso_planta1";
	verificacao(vPlanta); //verificação

	//Outros Moveís
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

	//Movéis que podem bugar
	var camaS = new GameObject("cama_solteiro", 0, 0, "map", 114, 247);
	camaS.setPosition(canvas.width/2 - camaS.w/2 + 90, 412);
	camaS.name = "cama_solteiro1";
	verificacao(camaS); //verifcação

	var guardaRoupa2 = new GameObject("guarda_roupa2", 0, 0, "map", 73, 215);
	guardaRoupa2.setPosition(canvas.width/2 - guardaRoupa2.w/2 - 200, 250);
	guardaRoupa2.name = "guarda_roupa21";
	verificacao(guardaRoupa2); //verificação

	var escrivaninha = new GameObject("escrivaninha", 0, 0, "map", 254, 94);
	escrivaninha.setPosition(canvas.width/2 - escrivaninha.w/2 - 110, 565);
	escrivaninha.name = "escrivaninha1";
	verificacao(escrivaninha); //verificação

	var cadeiraQ = new GameObject("cadeira_quartos", 0, 0, "map", 85, 69);
	cadeiraQ.setPosition(canvas.width/2 - cadeiraQ.w/2 - 75, 482);
	cadeiraQ.name = "cadeira_quartos1";
	verificacao(cadeiraQ); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 115, 665);
	janelaH.name = "janela_horizontal1";
	verificacao(janelaH); //verificação

	var mesaLateral2 = new GameObject("mesa_lateral2", 0, 0, "map", 72, 79);
	mesaLateral2.setPosition(canvas.width/2 - mesaLateral2.w/2 + 198, 580);
	mesaLateral2.name = "mesa_lateral21";
	verificacao(mesaLateral2); //verificação

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 - 200, 485);
	vPlanta.name = "vaso_planta2";
	verificacao(vPlanta); //verificação
	
	//Outros Móveis
	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(1);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 253, 260);
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

	//Movéis que podem bugar
	var guardaRoupa = new GameObject("guarda_roupa", 0, 0, "map", 73, 215);
	guardaRoupa.setPosition(canvas.width/2 - guardaRoupa.w/2 + 170, 170);
	guardaRoupa.name = "guarda_roupa22";
	verificacao(guardaRoupa); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 120, 143);
	janelaH.name = "janela_horizontal2";
	verificacao(janelaH); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 + 40, 143);
	janelaH.name = "janela_horizontal3";
	verificacao(janelaH); //verificação

	var escrivaninha = new GameObject("escrivaninha", 0, 0, "map", 254, 94);
	escrivaninha.setPosition(canvas.width/2 - escrivaninha.w/2 - 85, 650);
	escrivaninha.name = "escrivaninha2";
	verificacao(escrivaninha); //verificação

	var estante = new GameObject("estante", 0, 0, "map", 150, 58);
	estante.setPosition(canvas.width/2 - estante.w/2 + 133, 685);
	estante.name = "estante";
	verificacao(estante); //verificação

	var mesaLateral1 = new GameObject("mesa_lateral1", 0, 0, "map", 79, 72);
	mesaLateral1.setPosition(canvas.width/2 - mesaLateral1.w/2 - 170, 200);
	mesaLateral1.name = "mesa_lateral12";
	verificacao(mesaLateral1); //verificação

	var camaC = new GameObject("cama_casal", 0, 0, "map", 248, 214);
	camaC.setPosition(canvas.width/2 - camaC.w/2 - 90, 285);
	camaC.name = "cama_casal2";
	verificacao(camaC); //verificação

	var mesaLateral1 = new GameObject("mesa_lateral1", 0, 0, "map", 79, 72);
	mesaLateral1.setPosition(canvas.width/2 - mesaLateral1.w/2 - 170, 515);
	mesaLateral1.name = "mesa_lateral13";
	verificacao(mesaLateral1); //verificação

	var cadeiraQ = new GameObject("cadeira_quartos", 0, 0, "map", 85, 69);
	cadeiraQ.setPosition(canvas.width/2 - cadeiraQ.w/2 - 65, 565);
	cadeiraQ.name = "cadeira_quartos2";
	verificacao(cadeiraQ); //verificação

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 + 170, 400);
	vPlanta.name = "vaso_planta3";
	verificacao(vPlanta); //verificação

	// Outros Móveis
	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(1);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 227, 550);
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

	//Movéis que podem bugar
	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2, 758);
	janelaH.name = "janela_horizontal4";
	verificacao(janelaH); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 180, 758);
	janelaH.name = "janela_horizontal5";
	verificacao(janelaH); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 + 180, 758);
	janelaH.name = "janela_horizontal6";
	verificacao(janelaH); //verificação

	var hack = new GameObject("hack", 0, 0, "map", 71, 237);
	hack.setPosition(canvas.width/2 - hack.w/2 + 250, 500);
	hack.name = "hack1";
	verificacao(hack); //verificação

	var centro = new GameObject("centro", 0, 0, "map", 72, 96);
	centro.setPosition(canvas.width/2 - centro.w/2 + 80, 570);
	centro.name = "centro1";
	verificacao(centro); //verificação

	var tapeteG = new GameObject("tapete_grande", 0, 0, "map", 181, 249);
	tapeteG.setPosition(canvas.width/2 - tapeteG.w/2 + 80, 492);
	tapeteG.name = "tapete_grande1";
	verificacao(tapeteG); //verificação

	var sofa = new GameObject("sofa", 0, 0, "map", 153, 211);
	sofa.setPosition(canvas.width/2 - sofa.w/2 - 180, 460);
	sofa.name = "sofa1";
	verificacao(sofa); //verificação

	var poltrona = new GameObject("poltrona", 0, 0, "map", 90, 93);
	poltrona.setPosition(canvas.width/2 - poltrona.w/2 - 90, 640);
	poltrona.name = "poltrona1";
	verificacao(poltrona); //verificação

	var mesaP = new GameObject("mesa_principal", 0, 0, "map", 241, 95);
	mesaP.setPosition(canvas.width/2 - mesaP.w/2, 240);
	mesaP.name = "mesa_principal1";
	verificacao(mesaP); //verificação

	var cadeiraM1 = new GameObject("cadeira_mesa1", 0, 0, "map", 60, 70);
	cadeiraM1.setPosition(canvas.width/2 - cadeiraM1.w/2 + 50, 165);
	cadeiraM1.name = "cadeira_mesa11";
	verificacao(cadeiraM1); //verificação

	var cadeiraM1 = new GameObject("cadeira_mesa1", 0, 0, "map", 60, 70);
	cadeiraM1.setPosition(canvas.width/2 - cadeiraM1.w/2 - 50, 165);
	cadeiraM1.name = "cadeira_mesa12";
	verificacao(cadeiraM1); //verificação

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 + 50, 340);
	cadeiraM2.name = "cadeira_mesa21";
	verificacao(cadeiraM2); //verificação

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 - 50, 340);
	cadeiraM2.name = "cadeira_mesa22";
	verificacao(cadeiraM2); //verificação

	var vPlanta = new GameObject("vaso_planta", 0, 0, "map", 59, 58);
	vPlanta.setPosition(canvas.width/2 - vPlanta.w/2 + 250, 420);
	vPlanta.name = "vaso_planta3";
	verificacao(vPlanta); //verificação
	
	//Outros Moveis
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

	//Movéis que podem bugar
	var box = new GameObject("box", 0, 0, "map", 18, 374);
	box.setPosition(canvas.width/2 - box.w/2 - 50, 270);
	box.name = "box1";
	verificacao(box); //verificação

	var chuveiro = new GameObject("chuveiro", 0, 0, "map", 73, 121);
	chuveiro.setPosition(canvas.width/2 - chuveiro.w/2 - 135, 270);
	chuveiro.name = "chuveiro1";
	verificacao(chuveiro); //verificação

	var privada = new GameObject("privada", 0, 0, "map", 78, 98);
	privada.setPosition(canvas.width/2 - privada.w/2 + 25, 285);
	privada.name = "privada1";
	verificacao(privada); //verificação

	var piaB = new GameObject("pia_banheiro", 0, 0, "map", 83, 76);
	piaB.setPosition(canvas.width/2 - piaB.w/2 + 140, 270);
	piaB.name = "pia_banheiro1";
	verificacao(piaB); //verificação

	var armario1 = new GameObject("armario1", 0, 0, "map", 73, 162);
	armario1.setPosition(canvas.width/2 - armario1.w/2 + 160, 420);
	armario1.name = "armario11";
	verificacao(armario1); //verificação

	// Outros Móveis
	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 + 50, 635);
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

	//Movéis que podem bugar
	var balcao1 = new GameObject("balcao1", 0, 0, "map", 109, 109);
	balcao1.setPosition(canvas.width/2 - balcao1.w/2 + 110, 535);
	balcao1.name = "balcao11";
	verificacao(balcao1); //verificação

	var balcao2 = new GameObject("balcao2", 0, 0, "map", 228, 109);
	balcao2.setPosition(canvas.width/2 - balcao2.w/2 - 190, 535);
	balcao2.name = "balcao21";
	verificacao(balcao2); //verificação

	var balcao3 = new GameObject("balcao3", 0, 0, "map", 374, 109);
	balcao3.setPosition(canvas.width/2 - balcao3.w/2 - 117, 270);
	balcao3.name = "balcao31";
	verificacao(balcao3); //verificação

	var geladeira = new GameObject("geladeira", 0, 0, "map", 206, 95);
	geladeira.setPosition(canvas.width/2 - geladeira.w/2 + 185, 285);
	geladeira.name = "geladeira1";
	verificacao(geladeira); //verificação

	var fogao = new GameObject("fogao", 0, 0, "map", 105, 105);
	fogao.setPosition(canvas.width/2 - fogao.w/2 - 10, 525);
	fogao.name = "fogao11";
	verificacao(fogao); //verificação

	var piaC = new GameObject("pia_cozinha", 0, 0, "map", 109, 163);
	piaC.setPosition(canvas.width/2 - piaC.w/2 - 250, 375);
	piaC.name = "pia_cozinha1";
	verificacao(piaC); //verificação

	var janelaH = new GameObject("janela_horizontal", 0, 0, "map", 129, 18);
	janelaH.setPosition(canvas.width/2 - janelaH.w/2 - 60, 263);
	janelaH.name = "janela_horizontal7";
	verificacao(janelaH); //verificação

	// Outros Móveis
	var acessoSala = new Button("acesso_sala", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 59, 117);
	acessoSala.setPosition(canvas.width/2 - acessoSala.w/2 + 232, 615);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(7);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 + 302, 430);
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

	//Movéis que podem bugar
	var lavadora = new GameObject("lavadora", 0, 0, "map", 89, 109);
	lavadora.setPosition(canvas.width/2 - lavadora.w/2 - 272, 300);
	lavadora.name = "lavadora1";
	verificacao(lavadora); //verificação

	var piaL = new GameObject("pia_lavanderia", 0, 0, "map", 83, 85);
	piaL.setPosition(canvas.width/2 - piaL.w/2 - 140, 285);
	piaL.name = "pia_lavanderia1";
	verificacao(piaL); //verificação
	
	var balcao4 = new GameObject("balcao4", 0, 0, "map", 288, 109);
	balcao4.setPosition(canvas.width/2 - balcao4.w/2 - 70, 285);
	balcao4.name = "balcao41";
	verificacao(balcao4); //verificação

	var varal = new GameObject("varal", 0, 0, "map", 139, 334);
	varal.setPosition(canvas.width/2 - varal.w/2 + 150, 287);
	varal.name = "varal1";
	verificacao(varal); //verificação

	var armario2 = new GameObject("armario2", 0, 0, "map", 73, 215);
	armario2.setPosition(canvas.width/2 - armario2.w/2 + 282, 300);
	armario2.name = "armario21";
	verificacao(armario2); //verificação

	var cadeiraM2 = new GameObject("cadeira_mesa2", 0, 0, "map", 60, 70);
	cadeiraM2.setPosition(canvas.width/2 - cadeiraM2.w/2 - 100, 530);
	cadeiraM2.name = "cadeira_mesa23";
	verificacao(cadeiraM2); //verificação

	//Outros Móveis
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

	//Movéis que podem bugar
	var armario3 = new GameObject("armario3", 0, 0, "map", 215, 73);
	armario3.setPosition(canvas.width/2 - armario3.w/2 + 102, 148);
	armario3.name = "armario31";
	verificacao(armario3); //verificação

	var carro = new GameObject("carro", 0, 0, "map", 215, 370);
	carro.setPosition(canvas.width/2 - carro.w/2, 320);
	carro.name = "carro1";
	verificacao(carro); //verificação

	var janelaV = new GameObject("janela_vertical", 0, 0, "map", 18, 129);
	janelaV.setPosition(canvas.width/2 - janelaV.w/2 + 226, 260);
	janelaV.name = "janela_vertical1";
	verificacao(janelaV); //verificação

	// Outros Móveis
	var portaH = new Button("porta_horizontal", 0, 0, function(){
		se.mlevel.loadScenePersist(7);
	}, 14, 121);
	portaH.setPosition(canvas.width/2 - portaH.w/2 - 120, 123);

	var portaV = new Button("porta_vertical", 0, 0, function(){
		se.mlevel.loadScenePersist(4);
	}, 121, 14);
	portaV.setPosition(canvas.width/2 - portaV.w/2 - 226, 260);
	
	var portaG = new GameObject("porta_garagem", 0, 0, "gui", 321, 14);
	portaG.setPosition(canvas.width/2 - portaG.w/2, 772);
}

// ---- VITÓRIA E DERROTA ---------------------------------------------------------------

function setDerrota(){
	esconderTimer();
	
	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var derrota = new GameObject("derrota", 0, 0, "gui", 801, 567);
	derrota.setPosition( canvas.width/2 - derrota.w/2 - 23, 175);

	jogoAtivo = false;
}

function setVitoria(){
	esconderTimer();

	var bg = new GameObject("background", 0, 0, "gui", 1600, 900);
	bg.setPosition(canvas.width/2 - bg.w/2, 5);

	var vitoria = new GameObject("vitoria", 0, 0, "gui", 914, 582);
	vitoria.setPosition( canvas.width/2 - vitoria.w/2 - 23, 165);

	jogoAtivo = false;
}

// ---- FUNCIONALIDADES DO JOGO ---------------------------------------------------------------

//Função para recuperar os moveis
document.addEventListener("DOMContentLoaded", function() {
	// Pega os elementos do modal
	const modal = document.getElementById("modal");
	const input = modal.querySelector("input");
	const botao = modal.querySelector("button");

	// Quando clicar em "Enviar"
	botao.addEventListener("click", function() {
		// lê o número digitado e transforma em número inteiro
		const numeroDigitado = parseInt(input.value, 10);

		// se o input não é número, fecha o modal e não faz nada
			if (isNaN(numeroDigitado)) {
				modal.style.display = "none";
				input.value = "";
				return;
			}
			
		
		// verifica se o número digitado é igual ao deslocamento correto
		if (numeroDigitado === window.deslocamentoCorreto) {
			// acerto — faz o objeto reaparecer
			window.objetoAtual.setAlpha(1);

			// Diminui o contador de bugs
			bugCount--;
			console.log(`🧹 Bug consertado! Restam ${bugCount}`);

			alert("Objeto restaurado com sucesso!");
		} else {
			// erro — nada acontece além de fechar o modal
			alert("Número incorreto!");
		}

		// limpa o campo e fecha o modal
		input.value = "";
		modal.style.display = "none";
	});

	input.addEventListener("keydown", function(e) {
		if (e.key === "Enter") botao.click();
	});
});

//Função para corrigir nomes
function obterNomeBase(nomeObjeto) {
  nomeObjeto = nomeObjeto.replace(/\d+$/, ""); // remove número no final
  nomeObjeto.replace(/_/g, " ");       // troca underline por espaço

  if (nomeObjeto.startsWith("armario")) return "armario";
  if (nomeObjeto.startsWith("balcao")) return "balcao";
  if (nomeObjeto.startsWith("cama")) return "cama";
  if (nomeObjeto.startsWith("mesa_lateral")) return "mesa lateral";
  if (nomeObjeto.startsWith("mesa_principal")) return "mesa";
  if (nomeObjeto.startsWith("tapete")) return "tapete";
  if (nomeObjeto.startsWith("janela")) return "janela";
  if (nomeObjeto.startsWith("pia")) return "pia";
  if (nomeObjeto.startsWith("guarda_roupa")) return "guarda roupa";
  if (nomeObjeto.startsWith("cadeira")) return "cadeira";
  if (nomeObjeto.startsWith("vaso")) return "vaso de planta";

  return nomeObjeto;
}

// Função para verificar objeto
function verificacao(objeto) {
	//Se estiver bugado
    objeto.setClick(function() {
        if (this.getAlpha() === 0) {
            const deslocamento = Math.floor(Math.random() * 10) + 1;

			//Obtem o nome base do objeto, isso a importante para a cifra funcionar corretamente
            const nomeBase = obterNomeBase(this.name);
            const cifrado = window.objetosCifrados[nomeBase]?.[deslocamento];

            if (!cifrado) {
                console.warn(`Cifra não encontrada para ${nomeBase} (${deslocamento})`);
                return;
            }
			// coloca a palavra cifrada no <b> dentro do modal
            document.querySelector("#modal b").textContent = cifrado;
			// mostra o modal
            document.getElementById("modal").style.display = "block";

			// guarda referência para verificar depois
            window.objetoAtual = this;
            window.deslocamentoCorreto = deslocamento;
        } else {
            alert("não está bugado");
        }
    });
}

// Função para iniciar aa contagem para a vitória
function iniciarContagemVitoria() {
	const timerContainer = document.getElementById("timerContainer");
	timerContainer.style.display = "block"; // Mostra o timer

	gameTimer = setInterval(() => {
    totalTime--;

	// Formata o tempo em mm:ss
    const minutos = Math.floor(totalTime / 60);
    const segundos = totalTime % 60;
    timerContainer.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    // Se o tempo acabou → vitória
    if (totalTime <= 0) {
      clearInterval(gameTimer);
      jogoAtivo = false;
	  timerContainer.style.display = "none";
      setVitoria();
    }
  }, 1000);
}

// Função para esconder o timer
function esconderTimer() {
  const timerContainer = document.getElementById("timerContainer");
  if (timerContainer) timerContainer.style.display = "none";
}

// Função para ativar o Hover dos nomes
function ativarHoverNomesComMouse() {
  const label = document.getElementById("objetoNome"); // o div que mostra o nome
  const mouse = se.mmouse; // gerenciador do mouse do StarterJS

  // Atualiza a cada 50ms
  setInterval(() => {
    const scene = se.mlevel.getCurrentScene();
    if (!scene || !scene.getObjects) return;

    const objects = scene.getObjects().filter(o => o.classename === "map");
    const mx = mouse.getMouseX();
    const my = mouse.getMouseY();

    let hovering = false;

    for (const obj of objects) {
      if (obj.getAlpha() !== 0 && mx > obj.x && mx < obj.x + obj.w && my > obj.y && my < obj.y + obj.h) {
        label.textContent = obterNomeBase(obj.name); // usa a função para limpar o nome
        label.style.display = "block";
        hovering = true;
        break; // para de checar os outros objetos
      }
    }

    if (!hovering) label.style.display = "none";
  }, 50);
}
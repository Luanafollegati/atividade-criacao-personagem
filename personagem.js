//1
let nome = "lyra";
let classe = "guerreira";
let nivel = 14;
let vida = 100;
let ouro = 200;
let xp = 1050;


//2
let NOME_ARMA = "cajado de Batalha";   
let DANO_BASE = 100;  
let NOME_ARMADURA = "Armadura acolchoada" ;
let DEFESA_BASE = 100;


//3
xp += 150; // ganhou 150 pontos de experiência
ouro -= 30; // comprou uma poção por 30 moedas 
vida += 40; // recuperou 40 pontos de vida
DANO_BASE *= 2; // o dano da arma foi dobrado


//4
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);


//5
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);


// nivel 2
//1

let nomePersonagem = "lyra";
let classe1 = "guerreira"; 
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 50;
let manaMaxima = 50;
let nivel1 = 14;
let experiencia = 1200;
let ouro1 = 70;

// Novos atributos para batalha
let forca = 100;
let defesa = 80;
let agilidade = 122;
let combatesVencidos = 4;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "eldoria";
let missaoAtual = "me vingar dos que magoaram meu pai";




//6
console.log(`Historia da guerreira ${nome}`);
console.log(`Olá! Eu sou a ${nome}, da classe ${classe}. Possuo o nivel ${nivel} com ${vida} pontos de vida, no meu inventario tenho ${ouro} de ouro e ${xp} de xp.`);
console.log(`Possuo a arma ${NOME_ARMA} que se transformou a minha favorita depois da morte do meu pai.`);
console.log(`O ${NOME_ARMA} era a que ele costumava utilizar para caçar, pois seu dano é de ${DANO_BASE}, conseguindo matar facilmente um animal grande.`);
console.log(`Mas para me manter protegida dos perigos da floresta, eu uso uma proteção reforçada, a ${NOME_ARMADURA}.`);
console.log(`Ela é uma boa armadura, com a defesa de ${DEFESA_BASE}.`);
console.log(`Meu pai morreu em uma de suas caças, mas tambem era um otimo guerreiro, assim como eu, já que foi ele com a sua grande sabedoria que me ensinou tudo que sei.`);
console.log(`Ele foi cedo, e deixou a minha mãe gravida da minha irmã mais nova. Ainda moramos no mesmo lugar, em eldoria, mas agora a casa parece vazia`);
console.log(`Depois desse acontecido, que nos assombra ate hoje, decidi me vingar de todos que um dia o magoaram`);
console.log(`Hoje eu tenho vida suficiente? ${vidaSuficiente}, tenho um ataque forte? ${ataqueForte}, um nivel avançado? ${nivelAvancado}, e posso enfrentar o guardião? ${podeEnfrentarGuardiao}`);
console.log(`Então sim, hoje eu estou pronta para a minha vingança`);
console.log(" ");


// CAPÍTULO 1: Condicionais Simples na narrativa
console.log(" CAPÍTULO 1: A vingança pode estar proxima");

// Verificação baseada no nível do personagem
if (nivel >= 14) {
    console.log("⚠️Você não pode participar da missâo, ainda não possui o nivel necessario!⚠️");
    console.log("Mas " + nomePersonagem + " decide continuar mesmo assim, sabendo do seu potencial");
}

// Verificação de recursos especiais
if (ouro >= 100) {
    console.log("💰Seus bolsos estão com muito ouro! Cuidado para não ser roubada💰");
}

// Verificação de classe específica
if (classe === "guerreira") {
    console.log("✨Você tem muitas habilidades! Talvez consiga sua vingança com sucesso✨");
}


// CAPÍTULO 2: Escolha Estratégica
console.log("🛡️ CAPÍTULO 2: A Encruzilhada do Destino");

// Escolha baseada em recursos
if (ouro >= 50) {
    console.log("💰 Com esse tanto de ouro, " + nomePersonagem + " decide compra equipamentos melhores!");
    forca += 150;
    defesa += 90;
    ouro -= 50;
    console.log("Força e defesa aumentaram! Ouro restante: " + ouro);
} else {
    console.log("💔 Sem ouro suficiente, " + nomePersonagem + " deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Agilidade +2");
    agilidade += 2;
}

// Sistema de recompensas narrativo
if (experiencia >= 100) {
    console.log("🎉 A sabedoria acumulada se manifesta! " + nomePersonagem + " sente-se mais poderoso!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada
} else {
    console.log("📊 " + nomePersonagem + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + experiencia + "/100");
}


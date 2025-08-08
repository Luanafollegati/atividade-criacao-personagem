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

//Capitulo 1
console.log("CAPÍTULO 1: Sussurros da Floresta");

console.log(`Após enterrar seu pai com as próprias mãos, ${nome} jurou que o vingaria e que não teria medo do perigo.`);
console.log(`Naquela manhã em Eldoria, ela partiu da vila com sua ${NOME_ARMA} presa às costas,`);
console.log("determinada a seguir as pegadas do assassino que tirou tudo o que ela tinha.");

// Nível mínimo para seguir adiante
    if (nivel <= 14) {
    console.log(`${nome} ainda é jovem, mas não se intimida com a falta de experiência.`);
    console.log("Mesmo sem o nível ideal, ela segue em frente. 'Meu coração sabe mais do que qualquer número', diz ela.");
    }

    // Se estiver com muito ouro
    if (ouro >= 100) {
        console.log(`Os bolsos de ${nome} pesam com tanto ouro que até os ladrões da floresta conseguem sentir seu cheiro.`);
        console.log("Ela precisa manter-se alerta...");
    }

    // Reconhecimento de classe
    if (classe === "guerreira") {
        console.log(`Como uma guerreira, ${nome} possui habilidades de combate que podem virar qualquer batalha a seu favor.`);
        console.log("Com a fúria certa, ela pode transformar dor em força.");
    }

    console.log(`Ao atravessar a fronteira de Eldoria, ${nome} sente que não há mais volta. A vingança não espera.`);
    console.log("");
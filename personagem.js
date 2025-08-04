//1
let nome = "lyra";
let classe = "guerreira";
let nivel = 14;
let vida = 100;
let ouro = 100;
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


//6
console.log(`Historia da guerreira ${nome}`);
console.log(`Olá! Eu sou a ${nome}, da classe ${classe}. Possuo o nivel ${nivel} com ${vida} pontos de vida, no meu inventario tenho ${ouro} de ouro e ${xp} de xp.`);
console.log(`Possuo a arma ${NOME_ARMA} que se transformou a minha favorita depois da morte do meu pai.`);
console.log(`O ${NOME_ARMA} era a que ele costumava utilizar para caçar, pois seu dano é de ${DANO_BASE}, conseguindo matar facilmente um animal grande.`);
console.log(`Mas para me manter protegida dos perigos da floresta, eu uso uma proteção reforçada, a ${NOME_ARMADURA}.`);
console.log(`Ela é uma boa armadura, com a defesa de ${DEFESA_BASE}.`);
console.log(`Meu pai morreu em uma de suas caças, mas tambem era um otimo guerreiro, assim como eu, já que foi ele com a sua grande sabedoria que me ensinou tudo que sei.`);
console.log(`Ele foi cedo, e deixou a minha mãe gravida da minha irmã mais nova.`);
console.log(`Depois desse acontecido, que nos assombra ate hoje, decidi me vingar de todos que um dia o magoaram`);
console.log(`Hoje eu tenho vida suficiente? ${vidaSuficiente}, tenho um ataque forte? ${ataqueForte}, um tivel avançado? ${nivelAvancado}, e posso enfrentar o guardião? ${podeEnfrentarGuardiao}`);
console.log(`Então sim, hoje eu estou pronta para a minha vingança`);







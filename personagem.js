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
console.log(`Historia da guerreira ${nome}🌼`);
console.log(`Olá! Eu sou a ${nome}, da classe ${classe}. Possuo o nivel ${nivel} com ${vida} pontos de vida, no meu inventario tenho ${ouro} de ouro e ${xp} de xp.`);
console.log(`Possuo a arma ${NOME_ARMA} que se transformou a minha favorita depois da morte do meu pai.`);
console.log(`O ${NOME_ARMA} era a que ele costumava utilizar para caçar, pois seu dano é de ${DANO_BASE}, conseguindo matar facilmente um animal grande.`);
console.log(`Mas para me manter protegida dos perigos da floresta, eu uso uma proteção reforçada, a ${NOME_ARMADURA}.`);
console.log(`Ela é uma boa armadura, com a defesa de ${DEFESA_BASE}.`);
console.log(`Meu pai morreu em uma de suas caças, mas tambem era um otimo guerreiro, assim como eu, já que foi ele com a sua grande sabedoria que me ensinou tudo que sei.`);
console.log(`Ele foi cedo, e deixou a minha mãe gravida da minha irmã mais nova. Ainda moramos no mesmo lugar, em eldoria, mas agora a casa parece vazia`);
console.log(`Depois desse acontecido, que nos assombra ate hoje, decidi me vingar de todos que um dia o magoaram`);
console.log(`Hoje eu tenho vida suficiente? ${vidaSuficiente}, tenho um ataque forte? ${ataqueForte}, um nivel avançado? ${nivelAvancado}, e posso enfrentar o guardião? ${podeEnfrentarGuardiao}`);
console.log(`Então sim, hoje eu estou pronta para a minha vingança🗡`);
console.log(" ");
 
// prologo 
console.log("PRÓLOGO");
console.log(" ");

console.log("Após os eventos do " + localAtual + ", nossa heroína " + nome);
console.log("da classe " + classe + " se depara com um novo desafio: a verdade por trás da morte de seu pai.");
console.log("Uma figura encapuzada revela: 'Ele foi traído por alguém próximo... alguém de Eldoria.'");
console.log("");
  
//Capitulo 1
console.log("CAPÍTULO 1: Sussurros da Floresta");

console.log(`Após enterrar seu pai com as próprias mãos, ${nome} jurou que o vingaria e que não teria medo do perigo.`);
console.log(`Naquela manhã em Eldoria, ela partiu da vila com sua ${NOME_ARMA} presa às costas,`);
console.log("determinada a seguir as pegadas do assassino que tirou tudo o que ela tinha.");

// Nível mínimo para seguir adiante
    if (nivel <= 14) {
    console.log(`😪 ${nome} ainda é jovem, mas não se intimida com a falta de experiência.`);
    console.log("Mesmo sem o nível ideal, ela segue em frente. 'Meu coração sabe mais do que qualquer número', diz ela.");
    }

    // Se estiver com muito ouro
    if (ouro >= 100) {
        console.log(`💰 Os bolsos de ${nome} pesam com tanto ouro que até os ladrões da floresta conseguem sentir seu cheiro.`);
        console.log("Ela precisa manter-se alerta...");
    }

    // Reconhecimento de classe
    if (classe === "guerreira") {
        console.log(`Como uma guerreira, ${nome} possui habilidades de combate que podem virar qualquer batalha a seu favor.`);
        console.log("Com a fúria certa, ela pode transformar dor em força.");
    }
    console.log(" ");

    // Capitulo 2
    console.log("CAPÍTULO 2: A Encruzilhada do Destino");

    console.log(`${nome} chega a um vilarejo abandonado na floresta esquecida.`);
    console.log("Ali, encontra uma pequena loja ainda de pé, com um velho ferreiro à sua espera.");
    console.log(`Você parece determinada, guerreira", diz ele, olhando para sua ${NOME_ARMA}.`);

    // Compra de equipamentos 
    if (ouro >= 50) {
        console.log(`Com ${ouro} de ouro, ${nome} decide investir em melhorias para o combate.`);
        console.log("Ela compra uma lâmina encantada e reforça sua armadura.");
        forca += 150;
        defesa += 90;
        ouro -= 50;
        console.log(`Força agora: ${forca}🔫, Defesa: ${defesa}🛡, Ouro restante: ${ouro}💲`);
    } else {
        console.log(`Com apenas ${ouro} de ouro, ${nome} não consegue pagar pelos upgrades.`);
        console.log("Mas a falta de recursos não apaga sua determinação.");
        console.log("Ela se concentra, treina sozinha durante a noite, e sua agilidade melhora.");
        agilidade += 2;
        console.log(`Agilidade aumentada para ${agilidade}`);
    }

    // Experiência acumulada — subir de nível
    if (experiencia >= 100) {
        console.log("A jornada até aqui ensinou muito a ela.");
        console.log(`${nome} atinge um novo nível de sabedoria e poder!`);
        nivel++;
        experiencia = 0;
        vidaAtual = vidaMaxima; // Vida restaurada
        console.log(`Nível agora: ${nivel}, vida restaurada para ${vida}`);
    } else {
        console.log(`Apesar dos avanços, ${nome} ainda quer evoluir mais`);
        console.log("🥇Sabedoria atual: " + experiencia + "/100");

    }

    console.log(`Ao deixar o vilarejo, ${nome} nota pegadas recentes em direção à montanha...`);
    console.log("Seria o rastro do assassino de seu pai? O sangue em suas veias começa a ferver outra vez.");
    console.log(" ");

    // Capitulo 3
    console.log("CAPÍTULO 3: A Batalha Decisiva");

    let poderInimigo = 50;

    // Sistema de combate 
    if (vida <= 50) {
        console.log("Com pouca vida, " + nome + " recorre ao desespero.");
        console.log("Ela lembra do pai e se esforça, juntando toda a dor em um último golpe!");
        poderInimigo -= (forca * 2);
    } else if (manaAtual >= 30 && classe === "guerreira") {
    console.log("" + nome + " canaliza todo seu poder!");
    console.log("Movimentos devastadores!✨");
    poderInimigo -= (forca + 20);
    manaAtual -= 30;
    } else if (agilidade >= 15) {
        console.log("Com movimentos rápidos, " + nome + " ataca p inimigo onde menos se espera.");
        console.log("Seu treinamento com o pai lhe ensinou a nunca desperdiçar uma abertura.");
        poderInimigo -= forca;
    } else {
        console.log("O combate se estende... " + nome + " assume uma postura defensiva, estudando o inimigo.");
        console.log("Ela aproveita o momento para se recuperar um pouco.");
        poderInimigo -= (forca / 2);
        vida += 10;
        console.log("Ela recupera parte de sua vida! Vida atual: " + vida);

    }
console.log(" ");

 // continuação da jornada
console.log("EPILOGO");

// Resultado final da batalha
if (poderInimigo <= 0) {
    console.log("VITÓRIA ÉPICA! " + nome + " derrota seu inimigo com honra e bravura!");
    xp += 100;
    combatesVencidos++;
    console.log("A lenda de " + nome + " ecoa pelas vilas próximas.");
    console.log("Mas a verdadeira guerra — contra os traidores de Eldoria — está apenas começando...");
} else {
    console.log("A batalha foi dura. O inimigo escapa, mas com cicatrizes que jamais serão esquecidas.");
    console.log(nome + " jura: 'Da próxima vez, não terá onde se esconder.'");
}

console.log(" ");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!🏁");
console.log(" ");

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===

// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
let inventario = ["Poção de agilidade", "Espada de cristal", "Armadura de aço"];
let aliados = ["Maga Selene", "Guerreiro Zander", "Arqueira Katniss"];
let inimigosEncontrados = ["Gideon Sombrio", "Falkor", "Drake Haku"];
let salasCastelo = ["Salão principal", "Sala do trono", "Torre do fogo"];
let tesouroColetado = [];

console.log("🏰 === " + nomePersonagem + " ADENTRA O CASTELO ===");
console.log(`Após descobrir pistas sobre o assassino de seu pai, ${nomePersonagem} chega ao lendário castelo de Eldoria.`);
console.log("Ali, dizem que o traidor mantém seu esconderijo, guardado por criaturas antigas.");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");
console.log(" ");

// === CAPÍTULO 1: BAÚS ANTIGOS E SEGREDOS DO PASSADO ===
console.log("🗝️ CAPÍTULO 1: Baús Antigos e segredos do passado");

let pocoesEncontradas = ["Poção de Tempestade", "Poção de Vida", "Poção de Força"];
let armadilhasAtivadas = [];

console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

inventario[0] = "Poção de Força Suprema";
console.log(`✨ ${nomePersonagem} aprimorou sua poção principal, tornando-a capaz de derrubar um ogro com um único gole!`);

inventario.push("Chave enferrujada do traidor");
console.log("🔑 Novo item adicionado ao inventário: " + inventario);

let itemRemovido = inventario.pop();
console.log("⚠️ Item descartado para abrir espaço: " + itemRemovido);
console.log("Inventário atual: " + inventario);
console.log(" ");

// === CAPÍTULO 2: A EXPLORAÇÃO DO CASTELO ===
console.log("⚔️ CAPÍTULO 2: Explorando as salas do castelo");

console.log("🗺️ " + nomePersonagem + " inicia a exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
    console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

    if (i === 0) {
        console.log("📜 Entre colunas antigas, ela encontra pergaminhos com o nome do assassino de seu pai...");
        experiencia += 50;
    } else if (i === 1) {
        console.log("💺 No trono vazio, há um mapa com a rota de fuga do traidor.");
        tesouroColetado.push("Mapa do traidor");
    } else {
        console.log("🔥 A torre do fogo abriga uma criatura que protege a passagem secreta.");
        vidaAtual -= 15;
    }
}
console.log(`📊 Exploração concluída! XP: ${experiencia} | Vida: ${vidaAtual}`);
console.log(" ");

// === CAPÍTULO 3: REUNINDO OS ALIADOS PARA O ATAQUE FINAL ===
console.log("🤝 CAPÍTULO 3: Preparando a ofensiva");

for (let i = 0; i < aliados.length; i++) {
    let aliado = aliados[i];
    console.log(`⚡ ${aliado} se junta à causa da vingança contra o traidor de Eldoria!`);

    if (i === 0) {
        console.log("🔮 A Maga Selene conjura feitiços para multiplicar o poder de todos.");
        ouro += 80;
    } else if (i === 1) {
        console.log("🛡️ Zander fortalece as defesas, protegendo Lyra de emboscadas.");
        vidaMaxima += 40;
    } else {
        console.log("🏹 Katniss cria emboscadas estratégicas para cercar o inimigo.");
        experiencia += 60;
    }
}
console.log(`🎖️ Equipe pronta! Ouro: ${ouro} | Vida máxima: ${vidaMaxima}`);
console.log(" ");

// === CAPÍTULO 4: O ENCONTRO COM O TRAIDOR ===
console.log("");
console.log("🔥 CAPÍTULO 4: O Encontro com o Traidor");

let inimigosBatalha = ["Traidor Real"];
let danoRecebido = [];

console.log("💀 " + nomePersonagem + " finalmente encontra seu inimigo mortal: " + inimigosBatalha[0] + "!");

// Laço de batalha — mesmo com um só inimigo, usamos o formato padrão
for (let i = 0; i < inimigosBatalha.length; i++) {
    let inimigo = inimigosBatalha[i];
    let dano;

    // Sistema de combate baseado na condição da guerreira
    if (vidaAtual > 50 && forca > 150) {
        console.log("⚔️ " + nomePersonagem + " avança com fúria! Seus golpes ecoam pelo salão.");
        dano = forca + 50;
    } else if (manaAtual >= 30) {
        console.log("✨ Usando energia vital, ela lança um ataque devastador!");
        dano = Math.floor(forca * 1.5);
        manaAtual -= 30;
    } else {
        console.log("💥 Mesmo ferida, ela não recua. Cada golpe é movido pela memória do pai.");
        dano = forca;
    }

    console.log("💥 " + nomePersonagem + " causa " + dano + " de dano em " + inimigo + "!");
    danoRecebido.push(dano);

    // Resultado da batalha
    let poderTraidor = 200 - dano;
    if (poderTraidor <= 0) {
        console.log("🏆 VITÓRIA! " + inimigo + " cai diante de sua lâmina.");
        console.log(nomePersonagem + " finalmente vinga a morte de seu pai.");
        combatesVencidos++;
        xp += 200;
    } else {
        console.log("⚠️ " + inimigo + " escapa ferido, prometendo vingança...");
    }
}

// Estatísticas finais
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
    danoTotal += danoRecebido[i];
    console.log("📊 Golpe " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("⚡ Dano total causado: " + danoTotal);
console.log("🏁 FIM DO NÍVEL 3");

// === EPÍLOGO ===
console.log(" ");
console.log("👑 === EPÍLOGO: " + nomePersonagem + " - HEROÍNA DE ELDORIA ===");

console.log("Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + experiencia);
console.log("• Vida restante: " + vidaAtual + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

console.log(" ");
console.log("🌟 A LENDA CONTINUA...");
console.log("Após enfrentar perigos mortais, reunir aliados leais e derrotar o traidor real, " + nomePersonagem + " finalmente vingou a morte de seu pai.");
console.log("A sensação de justiça feita aqueceu seu coração, mas também deixou cicatrizes que jamais se apagarão.");
console.log("Cada batalha, cada sala explorada e cada inimigo derrotado moldaram sua força e coragem.");
console.log("O castelo de Eldoria agora estava livre das sombras, mas a paz nunca dura para sempre.");
console.log("Seus aliados, embora vitoriosos, sabiam que novas ameaças surgiriam nas terras distantes.");
console.log(`E ${nomePersonagem}, agora vista como uma lenda viva, sabia que não poderia ignorar um chamado para proteger seu povo.`);
console.log("Com a lâmina afiada, o coração firme e a memória de seu pai como guia, ela partiu rumo ao desconhecido.");
console.log("A vingança foi apenas o início — a verdadeira jornada de Lyra estava prestes a começar.");

console.log(" ");
console.log("🎯 FIM DO NÍVEL 3 | O DESTINO AGUARDA NOVAS AVENTURAS! 🎯");

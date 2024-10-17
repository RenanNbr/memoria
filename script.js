/* let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let points = [0, 0]; // Array para armazenar pontos de ambos os jogadores
let time = 0;
let timer;
let playerTurn = 0; // 0 para Jogador 1, 1 para Jogador 2

const themes = {
    fruits: ['🍎', '🍌', '🍇', '🍓'],
    animals: ['🐶', '🐱', '🐰', '🐸']
};

document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    const theme = document.getElementById('theme').value;
    const difficulty = document.getElementById('difficulty').value;
    const mode = document.getElementById('mode').value;

    // Define número de cartas com base na dificuldade
    const numCards = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 8 : 12;
    cards = [...themes[theme]].slice(0, numCards / 2);
    cards = [...cards, ...cards]; // Duplicar para pares
    cards = shuffle(cards);

    createBoard();
    startTimer();
    points = [0, 0]; // Resetar pontos para ambos os jogadores
    matchedPairs = 0; // Resetar pares encontrados
    document.getElementById('points').innerText = points[0]; // Resetar exibição de pontuação
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Limpa o tabuleiro antes de criar novas cartas
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-index', index);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (flippedCards.length < 2) {
        this.classList.add('flipped');
        const index = this.getAttribute('data-index');
        flippedCards.push({ card: this, value: cards[index] });

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [first, second] = flippedCards;

    // Verifica se as cartas viradas são iguais
    if (first.value === second.value) {
        matchedPairs++;
        points[playerTurn] += 10; // Pontuação por par encontrado
        document.getElementById('points').innerText = points[playerTurn];
        // Remove os eventos para evitar que sejam viradas novamente
        first.card.removeEventListener('click', flipCard);
        second.card.removeEventListener('click', flipCard);
    } else {
        // Se não forem iguais, desvira as cartas
        first.card.classList.remove('flipped');
        second.card.classList.remove('flipped');
        // Troca o turno entre os jogadores se for o modo de dois jogadores
        if (document.getElementById('mode').value === 'two') {
            playerTurn = playerTurn === 0 ? 1 : 0;
        }
    }

    flippedCards = []; // Limpa as cartas viradas

    // Verifica se todos os pares foram encontrados
    if (matchedPairs === cards.length / 2) {
        clearInterval(timer);
        endGame();
    }
}

function startTimer() {
    time = 0;
    document.getElementById('time').innerText = time;
    timer = setInterval(() => {
        time++;
        document.getElementById('time').innerText = time;
        if (time >= 60) { // Limite de tempo de 60 segundos
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    let winnerMessage;
    const mode = document.getElementById('mode').value;

    if (mode === 'two') {
        // Determina o vencedor no modo de dois jogadores
        const winner = points[0] > points[1] ? 'Jogador 1' : points[0] < points[1] ? 'Jogador 2' : 'Empate';
        winnerMessage = `${winner} venceu! Pontuação: Jogador 1: ${points[0]}, Jogador 2: ${points[1]}`;
    } else {
        // No modo de um jogador, apenas exibe a pontuação
        winnerMessage = `Fim de jogo! Sua pontuação: ${points[0]}`;
    }

    // Exibe a mensagem de fim de jogo
    alert(winnerMessage);

    // Reinicia o jogo
    const restart = confirm("Deseja reiniciar o jogo?");
    if (restart) {
        startGame(); // Chama a função para reiniciar o jogo
    }
}

function shuffle(array) {
    // Função para embaralhar as cartas
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}*/

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let points = [0, 0]; // Array para armazenar pontos de ambos os jogadores
let time = 0;
let timer;
let playerTurn = 0; // 0 para Jogador 1, 1 para Jogador 2

const themes = {
    fruits: ['🍎', '🍌', '🍇', '🍓'],
    animals: ['🐶', '🐱', '🐰', '🐸'],
    emojis: ['😊', '😂', '😍', '😎'],
    characters: ['👨‍🎤', '👩‍🎤', '👨‍🚀', '👩‍🚒']
};

document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    const theme = document.getElementById('theme').value;
    const difficulty = document.getElementById('difficulty').value;
    const mode = document.getElementById('mode').value;

    // Define número de cartas com base na dificuldade
    const numCards = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 8 : 12;
    cards = [...themes[theme]].slice(0, numCards / 2);
    cards = [...cards, ...cards]; // Duplicar para pares
    cards = shuffle(cards);

    createBoard();
    startTimer();
    points = [0, 0]; // Resetar pontos para ambos os jogadores
    matchedPairs = 0; // Resetar pares encontrados
    document.getElementById('points').innerText = points[0]; // Resetar exibição de pontuação
    document.getElementById('points2').innerText = points[1]; // Resetar exibição de pontuação jogador 2
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Limpa o tabuleiro antes de criar novas cartas
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-index', index);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (flippedCards.length < 2) {
        this.classList.add('flipped');
        const index = this.getAttribute('data-index');
        flippedCards.push({ card: this, value: cards[index] });
        
        // Toca o som de virada
        document.getElementById('flip-sound').play();

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [first, second] = flippedCards;

    // Verifica se as cartas viradas são iguais
    if (first.value === second.value) {
        matchedPairs++;
        points[playerTurn] += 10; // Pontuação por par encontrado
        document.getElementById('points').innerText = points[0];
        document.getElementById('points2').innerText = points[1];

        // Toca o som de match
        document.getElementById('match-sound').play();

        // Remove os eventos para evitar que sejam viradas novamente
        first.card.removeEventListener('click', flipCard);
        second.card.removeEventListener('click', flipCard);
    } else {
        // Se não forem iguais, desvira as cartas
        first.card.classList.remove('flipped');
        second.card.classList.remove('flipped');

        // Troca o turno entre os jogadores se for o modo de dois jogadores
        if (document.getElementById('mode').value === 'two') {
            playerTurn = playerTurn === 0 ? 1 : 0;
        }
    }

    flippedCards = []; // Limpa as cartas viradas

    // Verifica se todos os pares foram encontrados
    if (matchedPairs === cards.length / 2) {
        clearInterval(timer);
        endGame();
    }
}

function startTimer() {
    time = 0;
    document.getElementById('time').innerText = time;
    timer = setInterval(() => {
        time++;
        document.getElementById('time').innerText = time;

        // Verifica se o tempo acabou
        if (time >= (document.getElementById('difficulty').value === 'easy' ? 60 : document.getElementById('difficulty').value === 'medium' ? 45 : 30)) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    let winnerMessage;
    const mode = document.getElementById('mode').value;

    if (mode === 'two') {
        // Determina o vencedor no modo de dois jogadores
        const winner = points[0] > points[1] ? 'Jogador 1' : points[0] < points[1] ? 'Jogador 2' : 'Empate';
        winnerMessage = `${winner} venceu! Pontuação: Jogador 1: ${points[0]}, Jogador 2: ${points[1]}`;
    } else {
        // No modo de um jogador, apenas exibe a pontuação
        winnerMessage = `Fim de jogo! Sua pontuação: ${points[0]}`;
    }

    // Armazena a pontuação no localStorage
    saveScore(points[0]);

    // Exibe a mensagem de fim de jogo
    alert(winnerMessage);

    // Reinicia o jogo
    const restart = confirm("Deseja reiniciar o jogo?");
    if (restart) {
        startGame(); // Chama a função para reiniciar o jogo
    }
}

function saveScore(score) {
    // Salva a pontuação no localStorage
    let scores = JSON.parse(localStorage.getItem('memoryGameScores')) || [];
    scores.push(score);
    localStorage.setItem('memoryGameScores', JSON.stringify(scores));
}

function displayScores() {
    // Exibe as melhores pontuações
    const scores = JSON.parse(localStorage.getItem('memoryGameScores')) || [];
    scores.sort((a, b) => b - a); // Ordena as pontuações em ordem decrescente
    const topScores = scores.slice(0, 5); // Pega as 5 melhores pontuações
    alert(`Melhores Pontuações: \n${topScores.join('\n')}`);
}

// Chama a função para exibir as pontuações ao carregar a página
window.onload = displayScores;

function shuffle(array) {
    // Função para embaralhar as cartas
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
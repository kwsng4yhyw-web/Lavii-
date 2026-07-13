// ---------- Fundo com corações ---------- 
const ceu = document.getElementById("ceu"); 
const simbolos = ["💜", "✨", "🌷", "💫"];

for (let i = 0; i < 22; i++) { 
const s = document.createElement("span"); 
s.className = "coracao"; 
s.textContent = simbolos[Math.floor(Math.random() * simbolos.length)]; 
s.style.left = Math.random() * 100 + "%"; 
s.style.animationDuration = (10 + Math.random() * 10) + "s"; 
s.style.animationDelay = Math.random() * 10 + "s"; 
s.style.fontSize = (1 + Math.random() * 1.2) + "rem"; 
ceu.appendChild(s); 
}

// ---------- Envelope ---------- 
const envelope = document.getElementById("envelope");

function toggleEnvelope() { 
envelope.classList.toggle("aberto"); 
}

envelope.addEventListener("click", toggleEnvelope);

envelope.addEventListener("keypress", (e) => { 
if (e.key = "Enter" || e.key = " ") { 
e.preventDefault(); 
toggleEnvelope(); 
} 
});

// ---------- Motivos ---------- 
const motivos = [ 
"porque você lembra de detalhes que eu nem contei que importavam", 
"porque rir com você cura qualquer dia ruim", 
"porque você fala a verdade, mesmo quando dói um pouco", 
"porque nossa amizade nunca precisou de esforço, só de tempo", 
"porque você comemora minhas vitórias como se fossem suas", 
"porque em qualquer coisa, sei que você tá do meu lado", 
"porque você é a primeira pessoa que eu quero contar as coisas", 
"porque com você eu posso ser exatamente como sou", 
"porque distância nunca mudou nada entre a gente", 
"porque simplesmente: você é única", 
"porque você é boa no Brawl Stars", 
"porque você ri das desgraças alheias", 
"porque você é muito inteligente", 
"porque você é muito bonita junto com a franjinha dela", 
"porque a distância nunca vai ser um obstáculo pra nossa amizade", 
"porque essa amizade eu já estou começando a amar, assim como amar ela" 
];

const cartao = document.getElementById("cartaoMotivo"); 
const contador = document.getElementById("contador"); 
const btnMotivo = document.getElementById("btnMotivo");

let usados = [];

btnMotivo.addEventListener("click", () => {

if (usados.length === motivos.length) {
    usados = [];
}

let idx;

do {
    idx = Math.floor(Math.random() * motivos.length);
} while (usados.includes(idx));

usados.push(idx);

cartao.classList.add("trocando");

setTimeout(() => {
    cartao.textContent = motivos[idx];
    cartao.classList.remove("trocando");
}, 180);

contador.textContent = `${usados.length} de ${motivos.length} motivos vistos`;
});
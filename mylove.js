let isTargetUser = false;

function showModal(msg, isValid = true) {
  document.getElementById('modalMessage').innerText = msg;
  const modalBtn = document.querySelector('#customModal .btn');
  
  if (isValid) {
    modalBtn.innerText = "Lanjut 💕";
    isTargetUser = true;
  } else {
    modalBtn.innerText = "Pergi 😒";
    isTargetUser = false;
  }
  
  document.getElementById('customModal').classList.add('active');
}

function closeModal() {
  document.getElementById('customModal').classList.remove('active');
  
  if (isTargetUser) {
    document.getElementById('nameBox').style.display = 'none';
    document.getElementById('askBox').style.display = 'block';
  } else {
    document.getElementById('inputName').value = '';
  }
}

function checkName() {
  const inputVal = document.getElementById('inputName').value.trim();
  const lowerVal = inputVal.toLowerCase();

  if (lowerVal === "zahra arimbia maharani" || lowerVal === "zahra") {
    showModal("WAHHH Kamu zahra ya???!!", true);
  } else if (lowerVal === "emha jauharil faizin" || lowerVal === "emha") {
    showModal("OHH HAI DEVELOPERKUU", true);
  } else {
    showModal("elukh siapa kocak", false);
  }
}

document.getElementById('inputName').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkName();
  }
});

const btnNo = document.getElementById('btnNo');

function moveButton() {
  const padding = 20;
  const maxX = window.innerWidth - btnNo.offsetWidth - padding;
  const maxY = window.innerHeight - btnNo.offsetHeight - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  btnNo.style.position = 'fixed';
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveButton();
});
btnNo.addEventListener('click', moveButton);

function startOpenEnvelope() {
  const askBox = document.getElementById('askBox');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const letterContent = document.getElementById('letterContent');

  askBox.style.display = 'none';
  envelopeWrapper.style.display = 'block';

  setTimeout(() => {
    envelopeWrapper.classList.add('open');
  }, 400);

  setTimeout(() => {
    envelopeWrapper.style.display = 'none';
    letterContent.style.display = 'block';
  }, 1600);
}

const heartsContainer = document.getElementById('bgHearts');
const heartSymbols = ['❤️', '💖', '🌸', '✨', '💕', '🌷'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.style.fontSize = Math.random() * 14 + 14 + 'px';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 350);
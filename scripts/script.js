const btnSubscribe = document.getElementById('btn-subscribe');
const btnDismiss = document.getElementById('btn-dismiss');

const cardMain = document.getElementById('card-main');
const cardSuccess = document.getElementById('card-success');

btnSubscribe.addEventListener('click', (event) => {
  event.preventDefault();
  cardMain.classList.add('hidden');
  cardSuccess.classList.remove('hidden');
});

btnDismiss.addEventListener('click', (event) => {
  cardSuccess.classList.add('hidden');
  cardMain.classList.remove('hidden');
});
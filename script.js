const buttons = document.querySelectorAll('.card__btn');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  const l = 'working';
  button.addEventListener('click', handleClick);
}

function handleClick(e) {
  for (let u = 0; u < buttons.length; u++) {
    buttons[u].closest('.card__group').classList.remove('active');
  }

  const group = e.target.closest('.card__group');
  group.classList.toggle('active');
}

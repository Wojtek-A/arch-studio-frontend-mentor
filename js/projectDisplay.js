const buttons = Array.from(document.querySelectorAll('.project__number'));
const buttonsNumber = Array.from(
  document.querySelectorAll('.project__number-text')
);
const background = document.querySelector('.project__background');
const text = document.querySelector('.project__text');
const headline = document.querySelector('.project__headline');

buttons[0].addEventListener('click', () => {
  background.style.backgroundImage =
    'url(./images/image_hero_paramour_desktop.jpg)';
  headline.innerHTML = 'Project Paramour';
  text.innerHTML =
    'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.';

  buttonsNumber.forEach(button => {
    button.classList.remove('project__number-text--active');
  });
  buttonsNumber[0].classList.add('project__number-text--active');
});

buttons[1].addEventListener('click', () => {
  background.style.backgroundImage =
    'url(./images/image_hero_seraph_desktop.jpg)';
  headline.innerHTML = 'Seraph Station';
  text.innerHTML =
    'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.';

  buttonsNumber.forEach(button => {
    button.classList.remove('project__number-text--active');
  });
  buttonsNumber[1].classList.add('project__number-text--active');
});
buttons[2].addEventListener('click', () => {
  background.style.backgroundImage =
    'url(./images/image_hero_federal_desktop.jpg)';
  headline.innerHTML = 'Federal II Tower';
  text.innerHTML =
    'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.';

  buttonsNumber.forEach(button => {
    button.classList.remove('project__number-text--active');
  });
  buttonsNumber[2].classList.add('project__number-text--active');
});
buttons[3].addEventListener('click', () => {
  background.style.backgroundImage =
    'url(./images/image_hero_trinity_desktop.jpg)';
  headline.innerHTML = 'Trinity Bank Tower';
  text.innerHTML =
    'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.';

  buttonsNumber.forEach(button => {
    button.classList.remove('project__number-text--active');
  });
  buttonsNumber[3].classList.add('project__number-text--active');
});

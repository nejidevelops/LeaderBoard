export default class Display {
  constructor() {
    this.listRenderer = document.querySelector('.scoresList');
    this.nameInput = document.getElementById('name-input');
    this.scoreInput = document.getElementById('score-input');
  }

  renderToPage = (arr) => {
    this.listRenderer.innerHTML = '';
    arr.forEach((item) => {
      this.listRenderer.innerHTML += `
        <li class="item">${item.user} : ${item.score}</li>
      `;
    });
  };

  cleanPageInputs() {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  }
}

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const cat = document.querySelector('.catwrapper');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

var cat1 = document.createElement("img");
cat1.setAttribute("height", 250);
cat1.setAttribute("width", 250);
cat1.src = 'https://media1.tenor.com/m/8w1yxJJIlOUAAAAC/yay-mochi.gif'

var cat2 = document.createElement("img");
cat2.setAttribute("height", 250);
cat2.setAttribute("width", 270);
cat2.src = 'https://media1.tenor.com/m/-VlI93QJiQMAAAAC/cat-kiss.gif'

var cat3 = document.createElement("img");
cat3.setAttribute("height", 250);
cat3.setAttribute("width", 250);
cat3.src = 'https://media1.tenor.com/m/gf69hwnGmoAAAAAC/peach-goma.gif'

yesBtn.addEventListener('click', () => {
    question.innerHTML = "YAAAAAY I LOVE YOU! BE MINE FOREVER!";
    yesBtn.remove();
    noBtn.remove();
    while (cat.firstChild) {
        cat.removeChild(cat.lastChild);
      }
    cat.appendChild(cat1)
    cat.appendChild(cat2)
    cat.appendChild(cat3)

});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
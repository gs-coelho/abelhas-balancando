let btnAdicionarAbelha = document.querySelector('#adicionarAbelha');
let btnRemoverAbelha = document.querySelector('#removerAbelha');
let containerAbelhasEl = document.querySelector('#containerAbelhas');

class Abelha {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.baseY = Math.random() * window.innerHeight;

        this.element = document.createElement('img');
        this.element.src = 'assets/bee.gif';
        this.element.style.position = 'absolute';
        this.element.style.top = '0px';
        this.element.style.left = '-50px';
        this.element.style.width = '50px';

        this.node = containerAbelhasEl.appendChild(this.element);
    }
}

let abelhas = [new Abelha()];

btnAdicionarAbelha.addEventListener('click', () => {
    abelhas.push(new Abelha());
});

btnRemoverAbelha.addEventListener('click', () => {
    abelhas.pop().node.remove();
});

setInterval(() => {
    for(let abelha of abelhas){
        if(abelha.baseY > window.innerHeight - 80){
            abelha.baseY = window.innerHeight - 80;
        }

        abelha.x += 3;
        abelha.y = abelha.baseY + Math.sin(abelha.x / 30) * 30;
        
        let strPosicao = `translate(${abelha.x}px, ${abelha.y}px)`;

        abelha.element.style.transform = strPosicao;
        
        if(abelha.x > window.innerWidth + 50){
            abelha.x = 0;
            abelha.baseY = Math.random() * window.innerHeight;
        }
    }
}, 17);
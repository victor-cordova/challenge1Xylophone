class Xylophone {
    constructor(note, audio){
        this.note = note;
        this.audio = audio;
    }

    play () {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.play();    
    }
}

const xylophoneC2 = new Xylophone(document.getElementById("noteC2"), document.getElementById("audioC2"));

const xylophoneD = new Xylophone(document.getElementById("noteD"), document.getElementById("audioD"));

const xylophoneE = new Xylophone(document.getElementById("noteE"), document.getElementById("audioE"));

const xylophoneF = new Xylophone(document.getElementById("noteF"), document.getElementById("audioF"));

const xylophoneG = new Xylophone(document.getElementById("noteG"), document.getElementById("audioG"));

const xylophoneA = new Xylophone(document.getElementById("noteA"), document.getElementById("audioA"));

const xylophoneB = new Xylophone(document.getElementById("noteB"), document.getElementById("audioB"));

const xylophoneC1 = new Xylophone(document.getElementById("noteC1"), document.getElementById("audioC1"));

xylophoneC2.note.addEventListener("mouseenter", e => {
    xylophoneC2.play(); 
});

xylophoneC2.note.addEventListener("click", e => {
    xylophoneC2.play(); 
});

xylophoneD.note.addEventListener("mouseenter", e => {
    xylophoneD.play(); 
});

xylophoneD.note.addEventListener("click", e => {
    xylophoneD.play(); 
});

xylophoneE.note.addEventListener("mouseenter", e => {
    xylophoneE.play(); 
});

xylophoneE.note.addEventListener("click", e => {
    xylophoneE.play(); 
});

xylophoneF.note.addEventListener("mouseenter", e => {
    xylophoneF.play(); 
});

xylophoneF.note.addEventListener("click", e => {
    xylophoneF.play(); 
});

xylophoneG.note.addEventListener("mouseenter", e => {
    xylophoneG.play(); 
});

xylophoneG.note.addEventListener("click", e => {
    xylophoneG.play(); 
});

xylophoneA.note.addEventListener("mouseenter", e => {
    xylophoneA.play(); 
});

xylophoneA.note.addEventListener("click", e => {
    xylophoneA.play(); 
});

xylophoneB.note.addEventListener("mouseenter", e => {
    xylophoneB.play(); 
});

xylophoneB.note.addEventListener("click", e => {
    xylophoneB.play(); 
});

xylophoneC1.note.addEventListener("mouseenter", e => {
    xylophoneC1.play(); 
});

xylophoneC1.note.addEventListener("click", e => {
    xylophoneC1.play(); 
});
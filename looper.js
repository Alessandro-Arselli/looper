let kickButton = document.querySelector('.kick');
let playButton = document.querySelector('.play');
let kickBeats  = document.querySelector('.kickBeat');
let snareBeats = document.querySelector('.snareBeat');
let hiHatBeats = document.querySelector('.hihatBeat');
let cymbalBeats = document.querySelector('.cymbalBeat');
let kickBeat  = document.getElementsByClassName('kickBeat');
let snareBeat = document.getElementsByClassName('snareBeat');
let hiHatBeat = document.getElementsByClassName('hihatBeat');
let cymbalBeat = document.getElementsByClassName('cymbalBeat');
beatButton = document.querySelector('.beat');
let kickBeatsList = kickBeat.classList;
let beatAmount = 7;


console.log(beatButton);

function addBeatId(name,elementList){
    
    for(let beat = 0; beat <= beatAmount; beat++){
        console.log(beat);
        
        elementList[beat].setAttribute('id', name + beat);
    
        
        
    }

}

addBeatId("ki-", kickBeat);
addBeatId("sn-", snareBeat);
addBeatId("hi-", hiHatBeat);
addBeatId("cym-",cymbalBeat);

beatButton.forEach(element => {

    element.addEventListener('click', e => {
        console.log(e);
        
    });
});




//for(let beat = 0; beat <= beatAmount; beat++){
//    console.log(beat);
//    
//    kickBeats[beat].setAttribute('id','ki-' + beat);


    
// }
bpm = 100;

/// for each element within each beat class assign id equal "x" + n

function playKick(){
   
    let kick = new Audio("audio/kick1.wav");
    kick.play();

}

kickButton.addEventListener('click', playKick)

while(play = true){


    wait(bpm);



}


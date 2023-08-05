let kickButton = document.querySelector('.kick');
let snareButton = document.querySelector('.snare');

let playButton = document.getElementById('play');
let stopButton = document.getElementById('stop');

let kickBeats  = document.querySelector('.kickBeat');
let snareBeats = document.querySelector('.snareBeat');
let hiHatBeats = document.querySelector('.hihatBeat');
let cymbalBeats = document.querySelector('.cymbalBeat');

let kickBeat  = document.getElementsByClassName('kickBeat');
let snareBeat = document.getElementsByClassName('snareBeat');
let hiHatBeat = document.getElementsByClassName('hihatBeat');
let cymbalBeat = document.getElementsByClassName('cymbalBeat');
let play = false;

beatButton = document.querySelectorAll('.beat');

playButton.addEventListener('click', e=>{
    play = true;
    console.log("hello");
    playLoop();
})

stopButton.addEventListener('click', e=>{
    play = false;
    console.log("hello");
    playLoop();
})


function checkColumn(colNum){
 
    elements = document.querySelectorAll(`.col-${colNum}`);

    let kickActive =false;
    let snareActive=false;
    let hiHatActive=false;
    let cymbalActive=false;
    
    elements.forEach(e=>{
        
      
        if (e.classList.contains("selectedBeat") && e.classList.contains("kickBeat")){
        
         kickActive=true;
         console.log("insidekick")
        }

        else if(e.classList.contains("selectedBeat") && e.classList.contains("snareBeat")){
            snareActive=true;
        }   
        else if(e.classList.contains("selectedBeat") && e.classList.contains("hihatBeat")){
            hiHatActive=true;
        }

        else if(e.classList.contains("selectedBeat") && e.classList.contains("cymbalBeat")){

            cymbalActive = true;
        }
        
       

    })

    if(kickActive === true){
        playKick();
    }

    if(snareActive === true){
        playSnare();
    }

    if(hiHatActive === true){
        playHiHat();
    }
   
}



//How many beats per measure
beatLength = beatButton.length / 4; 


let kickBeatsList =  kickBeat.classList;
let snareBeatsList = snareBeat.classList;
let hiHatBeatsList = hiHatBeat.classList;
let cymbalBeatsList = cymbalBeat.classList;

let beatAmount = 7;


console.log(beatButton);



//Iterates through a class and assigns an numbered id to each element.
function addBeatId(name,elementList){
    
    for(let beat = 0; beat <= beatAmount; beat++){
        console.log(beat);
        
        elementList[beat].setAttribute('id', name + beat);

        
        
        
    }

}



//add id to each sound
addBeatId("ki-", kickBeat);
addBeatId("sn-", snareBeat);
addBeatId("hi-", hiHatBeat);
addBeatId("cym-",cymbalBeat);

//add event listeners to each beat button. And give it a "selected" class
beatButton.forEach(element => {

        

    element.addEventListener('click', e => {
        console.log(e);
        
       

        if (e.target.classList.contains("selectedBeat") === true){

            e.target.classList.remove('selectedBeat');

            
            
        }

        else{
            e.target.classList.add('selectedBeat');
        }

    });
});

bpm = 100;


function playKick(){
   
    let kick = new Audio("audio/kick1.wav");
    kick.play();

}

function playSnare(){
   
    let snare = new Audio("audio/snare1.wav");
    snare.play();

}

function playHiHat(){

    let hiHat = new Audio("audio/hiHat1.wav");
    hiHat.play();

}


kickButton.addEventListener('click', playKick);
snareButton.addEventListener('click', playSnare);

playButton.addEventListener('click', () => {
    play = true;
    playLoop(1); // Start playing loop from column 1
});

function playLoop(column) {
    if (!play) {
        return; // Exit the loop if play is false
    }

    checkColumn(column); // Check the current column and play sounds accordingly

    // Schedule the next iteration of playLoop after the desired interval
    setTimeout(() => {
        // Move to the next column (loop back to 1 after column 8)
        const nextColumn = column === 16 ? 1 : column + 1;
        playLoop(nextColumn);
    }, 16000 / bpm);
}




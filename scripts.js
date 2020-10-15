      // add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');

    let take_off = document.getElementById("takeoff");
    take_off.addEventListener("click", function (event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            //flight status change to "shuttle in flight";
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = 'Shuttle in flight.';
            //id "shuttleBackground" change to blue
            let shuttleBackground = document.getElementById('shuttleBackground');
            shuttleBackground.style.background = 'blue';
            //shuttle heigh increase by 10,000 miles
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML =10000;
          }
    });
    
    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        //A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        response = alert("The shuttle is landing. Landing gear engaged.");
        
        //The background color of the shuttle flight screen should change from blue to green.
        let shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.style.background = 'green';
            //flight status change to "shuttle in flight";
        
        //The shuttle height should go down to 0.
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        shuttleHeight.innerHTML =0;
    });

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        //A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        response = confirm("Confirm that you want to abort the mission.");
        
        if (response) {
            //The flight status should change to "Mission aborted."
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = 'Mission aborted'; 

            //The background color of the shuttle flight screen should change from blue to green.
            let shuttleBackground = document.getElementById('shuttleBackground');
            shuttleBackground.style.background = 'green';
            
            //The shuttle height should go to 0.
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML =0;
        }
    });
    
    let right = document.getElementById("right");
    right.addEventListener("click", function (event) {
        //The rocket image should move 10 px in the direction of the button that was clicked.
        let shuttle = document.getElementById('rocket');
        shuttle.style.right += 10;
    })

    let up = document.getElementById('up');
    up.addEventListener('click', function(event){

        let shuttle = document.getElementById('rocket');
        shuttle.innerText += 10;

        let shuttleHeight = Number(document.getElementById('spaceShuttleHeight'));
        console.log(typeof shuttleHeight);
        shuttleHeight = shuttleHeight + 10000;
    })
        //The shuttle height should go down to 0.
        // let shuttleHeight = document.getElementById('spaceShuttleHeight');
        // shuttleHeight.innerHTML =0;
 
/*When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles*/


});
// <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
// <script type="text/javascript">
var counter;
var wins;
var losses;
var numberOptions;
var crystalValue;
var sapphire;
var diamond;
var ruby;
var emerald;

$(document).ready(function(){

    
crystalValues();

    // APPLY VALUES TO THE CRYSTALS   
    function crystalValues() {
        //RANDOM NUMBER BETWEEN 19 & 120 THAT IS GENERATED ON PAGE LOAD//
        targetNumber = Math.floor(Math.random() *100) +19;

        //DISPLAYS THE RANDOM NUMBER FOR THE PLAYER TO MATCH//
        $("#computerRandomNumber").html(targetNumber);
        counter = 0;

        //ARRAY THAT INCLUDES FOUR NUMBERS TO BE RANDOMLY ASSIGNED TO EACH CRYSTAL//
        numberOptions = [10, 5, 3, 1];
        numberOptions.sort(function(){return 0.5 - Math.random()});


                sapphire = (numberOptions[0]);

                diamond = (numberOptions[1]);

                ruby = (numberOptions[2]);

                emerald = (numberOptions[3]);
}

/****************** CRYSTAL CLICKED ************************/
    $("#crystals").on("click", function() {
    $("#cash")[0].pause();
    $("#cash")[0].currentTime = 0;    
    $("#cash")[0].play();
    $("#gameResults").html("");
    var crystalId = event.target.id;

        if (crystalId == "sapphire") {
                crystalValue = sapphire;
        }    
        else if (crystalId == "diamond") {
                crystalValue = diamond;
        }
        else if (crystalId == "ruby") {
                crystalValue = ruby;
        }
        else if (crystalId == "emerald") {
                crystalValue = emerald;
        }

        counter += crystalValue;


            $("#playerGameTotal").text(counter);
            if (wins == null || losses == null) {
                    wins = 0;
                    losses = 0;
            }

            /* WIN - WIN - WIN - WIN - WIN - WIN - WIN - WIN - WIN - WIN - WIN */
            else if (counter === targetNumber) {
                $("#gameResults").html("YOU WIN!!");
                wins++;
                $("#wins").text(wins++);
                document.getElementById("playerGameTotal").innerHTML = 0;
                counter = 0;              
crystalValues();
            }

            /* LOSE - LOSE - LOSE - LOSE - LOSE - LOSE - LOSE - LOSE - LOSE */
            else if (counter >= targetNumber) {
                $("#gameResults").html("YOU LOSE!!");
                losses++;
                $("#losses").text(losses++);
                $("#playerGameTotal").html(0);
                counter = 0;
crystalValues();
            }
            
    });
 
});

function callValue(){
    var DisplayName= document.getElementById("DN").value;
    var TeamName= document.getElementById("TN").value;
    var NoOfLaps= document.getElementById("NL").value;
    var FastestLap= document.getElementById("FL").value;
    var Penalties= document.getElementById("Pen").value;
    document.writeln("Your info: "+DisplayName );
    document.write("your Teamname: "+TeamName);
    document.write("your number of laps : "+NoOfLaps);
    document.write("your Fastest lap: "+FastestLap);
    document.write("Penalties incurred: "+Penalties);
}
function callValue(){
    var DisplayName= document.getElementById("DN").value;
    var TeamName= document.getElementById("TN").value;
    var NoOfLaps= document.getElementById("NL").value;
    var FastestLap= document.getElementById("FL").value;
    var Penalties= document.getElementById("Pen").value;
    document.writeln("Your Race information; <br>"+ "Displayname: "+DisplayName+"<br>");
    document.write("Teamname: "+TeamName+"<br>");
    document.write("Number of Laps: "+NoOfLaps+"<br>");
    document.write("Fastest Lap: "+FastestLap+"<br>");
    document.write("Penalties: "+Penalties+"<br>");
}
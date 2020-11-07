class AllocatorSession{
    constructor(teamSize, interests){
    this.teamSize = teamSize;
    this.interests = interests;
    this.PIN = generatePIN();
    this.members = [];
    }
    allocateTeams(){
    //allocate Teams Algorithm goes here
    }
    addMember(member){
    //Add a new member to the array of members
    members.push(member);
    }
}
function generatePIN(){
    console.log("generting pin");
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function startSession(){
    var teamSize = document.getElementById("sizes").value;
    var totalParticipants = document.getElementById("total").value;
    let currentSession = new AllocatorSession(teamSize,("option1","option2"));
    var view = document.getElementById("viewContainer");
    view.innerHTML= "The password for the session is:  "+ currentSession.PIN
    view.classList.add("passwordViewStyle");
}

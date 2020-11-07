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
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function startSession(){
    console.log("it works");
    let currentSession = new AllocatorSession(document.getElementById("groupSizes"),("option1","option2"));
    var view = document.getElementById("viewContainer");
    view.innerHTML= "The password for the session is:"
    view.classList.add("passwordViewStyle");
}

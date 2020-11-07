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
    var domainName= document.getElementById("userDomain");
    view.innerHTML= "The password for the session is:  "+ currentSession.PIN;
    domainName.innerHTML = "Ask users to sign up in www.Alloka/UserView.tech";
    view.appendChild(domainName);
    view.classList.add("passwordViewStyle");
    var endButton = document.createElement("BUTTON");
    endButton.innerHTML = "End session";
    endButton.classList.add("btn", "endSessionButton","container")   
    view.appendChild(endButton);              
}

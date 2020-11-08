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
    var password = currentSession.PIN;
    view.innerHTML= "The password for the session is:  "+ currentSession.PIN;
    domainName.innerHTML = "Ask users to sign up in http://35.246.84.210/userView.html";
    view.appendChild(domainName);
    view.classList.add("passwordViewStyle");
    var endButton = document.createElement("BUTTON");
    endButton.innerHTML = "End session";
    endButton.classList.add("btn", "endSessionButton","container")   
    view.appendChild(endButton); 
    endButton.addEventListener(onclick,endSession());              
}
function endSession(){
    view.innerHTML = allocateTeams()
}

class User {
    constructor(firstName, secondName, email, preference1, preference2, preference3) {
       this.firstName = firstName;
       this.secondname = secondName;
       this.email = email;
       this.preference1 = preference1;
       this.preference2 = preference2;
       this.preference3 = preference3;
    }

    getEmail() {
        return this.email;
    }

    getFirstPerf() {
        return this.preference1;
    }

    getSecondPerf() {
        return this.preference2;
    }

    getThirdPerf() {
        return this.preference3;
    }
}

// function takes an array and returns a map of unique elements and their frequency in the array
function findCount(usersArray) {
    // map to store the frequency of each element in the array
    var countMap = new Map();

    // Iterate over the array and store the frequency of each element in the map
    for (user in usersArray) {
        u = usersArray[user];
        var currentCount = countMap.get(u);
        if (currentCount != undefined)
            countMap.set(u, currentCount+1);
        else
            countMap.set(u, 1);
    }
    return countMap;
}

// function that takes in a map and fills another map with how many teams can be made
function groupUsers(value, key, map) {
    if(value > maxTeamSize) {
        numTeams = Math.floor(value / maxTeamSize);
        if (numTeams > 0) {
            teamsFormedSoFarMap.set(key, numTeams);
        }
    }
}

// the following 3 functions get the  preferences of the users and runs groupUsers on them 
function getTeamsFirstPerf(usersArray) {
    var preferenceMap = findCount(usersArray.map(p => p.getFirstPerf()));
    preferenceMap.forEach(groupUsers);
}

function getTeamsSecondPerf(usersArray) {
    var preferenceMap = findCount(usersArray.map(p => p.getSecondPerf()));
    preferenceMap.forEach(groupUsers);
}

function getTeamsThirdPerf(usersArray) {
    var preferenceMap = findCount(usersArray.map(p => p.getThirdPerf()));
    preferenceMap.forEach(groupUsers);
}

// This is the main allocating function.
function allocateTeams(usersArray) {

    // get the teams and the number of people that will be in each
    getTeamsFirstPerf(usersArray);
    var values = [...teamsFormedSoFarMap.values()];
    var keys = [...teamsFormedSoFarMap.keys()];

    //put the grouped users into their teams and remove them from the full users list
    for(k in keys){
        let tempArray = [];
        let index = 0;
        let counter = 0;
        let bool = true;
        while (bool && index < usersArray.length) {
            if(usersArray[index].getFirstPerf() == (keys[k])) {
                tempArray.push(usersArray[index]);
                usersArray.splice(index, 1);
                index--;
                counter++;
                if(counter == maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    counter = 0;
                }
                if(counter == values[k]*maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    bool = false;
                }
            }
            index++;
        }
    }
    
    //clear the map for the first preference and repeat the process for the other preferences
    teamsFormedSoFarMap.clear();

    getTeamsSecondPerf(usersArray);
    values = [...teamsFormedSoFarMap.values()];
    keys = [...teamsFormedSoFarMap.keys()];
    for(k in keys){
        let tempArray = [];
        let index = 0;
        let counter = 0;
        let bool = true;
        while (bool && index < usersArray.length) {
            if(usersArray[index].getSecondPerf() == (keys[k])) {
                tempArray.push(usersArray[index]);
                usersArray.splice(index, 1);
                index--;
                counter++;
                if(counter == maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    counter = 0;
                }
                if(counter == values[k]*maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    bool = false;
                }
            }
            index++;
        }
    }
    
    teamsFormedSoFarMap.clear();

    getTeamsThirdPerf(usersArray);
    values = [...teamsFormedSoFarMap.values()];
    keys = [...teamsFormedSoFarMap.keys()];
    for(k in keys){
        let tempArray = [];
        let index = 0;
        let counter = 0;
        let bool = true;
        while (bool && index < usersArray.length) {
            if(usersArray[index].getThirdPerf() == (keys[k])) {
                tempArray.push(usersArray[index]);
                usersArray.splice(index, 1);
                index--;
                counter++;
                if(counter == maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    counter = 0;
                }
                if(counter == values[k]*maxTeamSize) {
                    allocatedTeams.push(tempArray);
                    tempArray = [];
                    bool = false;
                }
            }
            index++;
        }
    }

    return allocatedTeams.map(p => p.map(u => u.getEmail()));
}


function generateOptions(){
    selectELements = document.getElementsByClassName("optionsList");
    var options = ["Web App", "Kotlin", "Machine Learning", "Mobile", "Cloud","Python", "Vaporwave","Other"];
    for (j = 0 ; j<3 ; j++){
        for (i=0 ; i<options.length ; i++){
            var option = document.createElement("OPTION");
            option.innerHTML = options[i];
            selectELements[j].appendChild(option);              
        } 
    }
}

generateOptions();



//test with a made-up array of users
var participants = []
participants.push(new User("Nada", "Abouward", "nada@hotmail.com", "Web App", "Mobile", "Kotlin"));
participants.push(new User("Nayira", "Abdelmaguid", "nayira@hotmail.com", "Other", "Cloud", "Vaporwave"));
participants.push(new User("Tony", "Simmons", "tony@hotmail.com", "Mobile", "Vaporwave", "Web App"));
participants.push(new User("Shivani", "Sushi", "shivani@hotmail.com", "Machine Learning", "Python", "Vaporwave"));
participants.push(new User("Angus", "AAngus", "angus@hotmail.com", "Kotlin", "Python", "Web App"));
participants.push(new User("Jon", "Barker", "jon@hotmail.com", "Machine Learning", "Python", "Web App"));
participants.push(new User("Harry", "Potter", "harry@hotmail.com", "Web App", "Mobile", "Kotlin"));
participants.push(new User("Ron", "Weasly", "ron@hotmail.com", "Cloud", "Vaporwave", "Other"));
participants.push(new User("Fred", "Weasly", "fred@hotmail.com", "Kotlin", "Other", "Vaporwave"));
participants.push(new User("Ginny", "Weasly", "ginny@hotmail.com", "Vaporwave", "Other", "Cloud"));
participants.push(new User("Draco", "Malfoy", "draco@hotmail.com", "Kotlin", "Mobile", "Machine Learning"));
participants.push(new User("Ed", "Sherran", "ed@hotmail.com", "Vaporwave", "Cloud", "Web App"));
participants.push(new User("Jessie", "Park", "jessi@hotmail.com", "Mobile", "Kotlin", "Python"));
participants.push(new User("Mark", "Tuan", "mark@hotmail.com", "Cloud", "Python", "Vaporwave"));
participants.push(new User("Jackson", "Wang", "jackson@hotmail.com", "Web App", "Vaporwave", "Python"));
participants.push(new User("Bam", "Bam", "bam@hotmail.com", "Machine Learning", "Python", "Other" ));
participants.push(new User("Joey", "Tuan", "joey@hotmail.com", "Other", "Python", "Web App"));
participants.push(new User("Jae", "Park", "jae@hotmail.com", "Web App", "Python", "Vaporwave"));
participants.push(new User("Eman", "Elsayed", "eman@hotmail.com", "Python", "Machine Learning", "Other"));
participants.push(new User("Dana", "Alkofahi", "dana@hotmail.com", "Other", "Mobile", "Kotlin"));
participants.push(new User("Lara", "Ibrahim", "lara@hotmail.com", "Machine Learning", "Python", "Kotlin"));
participants.push(new User("Anna", "Andrew", "anna@hotmail.com", "Cloud", "Mobile", "Other"));
participants.push(new User("Reem", "Wael", "reem@hotmail.com", "Mobile", "Python", "Vaporwave"));

var maxTeamSize = 2;
var teamsFormedSoFarMap = new Map();
var allocatedTeams = []
console.log(allocateTeams(participants));

function createUser(){
    userInfo = document.getElementsByClassName("userInfo");
    selectBoxes = document.getElementsByClassName("optionsList");
    pin = document.getElementById("inputPassword5");
    // new User(userInfo[0], userInfo[1].value, userInfo[2].value, selectBoxes[0].value, selectBoxes[1].value, selectBoxes[2].value)
    displayTeams(new User(userInfo[0], userInfo[1].value, userInfo[2].value, selectBoxes[0].value, selectBoxes[1].value, selectBoxes[2].value))
}
function displayTeams(newUser){
    teamView = document.getElementById("teamsView")
    teamView.innerHTML = "The allocated teams are" + allocateTeams(participants);
}
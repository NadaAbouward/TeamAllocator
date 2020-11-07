class User {
    constructor(name, email, preference1, preference2, preference3) {
       this.name = name;
       this.email = email;
       this.preference1 = preference1;
       this.preference2 = preference2;
       this.preference3 = preference3;
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

//FYI THIS ISN'T COMPLETE YET ITS WRONG AND GIVES WRONG RESULTS I AM FIXING IT ^^
function allocateTeams(usersArray) {
    var tempArray = [];

    getTeamsFirstPerf(usersArray);
    var values = [ ...teamsFormedSoFarMap.values() ];
    var numOfUsersGrouped = values.reduce((a, b) => a + b, 0) * maxTeamSize;
    
    var keys = [...teamsFormedSoFarMap.keys()];

    for(k in keys){
        index = 0;
        if(usersArray[index].has(key[k])) {
            tempArray.push(usersArray[index]);
            usersArray.splice(index, 1);
        }
        index++;
    }

    for (v in values) {
        counter = values[v];
        
    }


    // if(teamsFormedSoFarMap.size > 0) {
    //     for (var i = 0; i < numOfUsersGrouped; i++) {
    //         index = i;
    //         while(!teamsFormedSoFarMap.has(usersArray[index].getFirstPerf())) {
    //             index++;
    //         }
    //         tempArray.push(usersArray[i]);
    //         usersArray.splice(i, 1);
    //     }
    //     allocatedTeams.push(tempArray);
    // }


    tempArray = [];
    teamsFormedSoFarMap.clear();

    

    // getTeamsSecondPerf(usersArray);

    // values =[ ...teamsFormedSoFarMap.values() ];
    // numOfUsersGrouped = values.reduce((a, b) => a + b, 0);

    // if(teamsFormedSoFarMap.size > 0) {
    //     for (var i = 0; i < numOfUsersGrouped; i++) {
    //         index = i;
    //         while(!teamsFormedSoFarMap.has(usersArray[index].getSecondPerf())) {
    //             index++;
    //         }
    //         tempArray.push(usersArray[i]);
    //         usersArray.splice(i, 1);
    //     }
    //     allocatedTeams.push(tempArray);
    // }

    // tempArray = [];
    // teamsFormedSoFarMap.clear();



    // getTeamsThirdPerf(usersArray);
    // values =[ ...teamsFormedSoFarMap.values() ];
    // numOfUsersGrouped = values.reduce((a, b) => a + b, 0);

    // if(teamsFormedSoFarMap.size > 0) {
    //     for (var i = 0; i < numOfUsersGrouped; i++) {
    //         index = i;
    //         while(!teamsFormedSoFarMap.has(usersArray[index].getThirdPerf())) {
    //             index++;
    //         }
    //         tempArray.push(usersArray[i]);
    //         usersArray.splice(i, 1);
    //     }
    //     allocatedTeams.push(tempArray);
    // }

    return allocatedTeams;
}


function generateOptions(){
    selectELements = document.getElementsByClassName("optionsList");
    console.log(selectELements[0]);
    var options = ["Web App", "Kotlin", "Machine Learning", "Mobile", "Cloud","Python", "Vaporwave"];
    for (i=0 ; i<options.length ; i++){
        var option = document.createElement("OPTION");
        option.innerHTML = options[i];
        console.log(selectELements[0]);
        // option.classList.add("btn", "endSessionButton","container")   
        selectELements[0].appendChild(option);              
    } 
}

// generateOptions();




var participants = []
participants.push(new User("Nada", "nada@nada", "Unity", "Java", "Kotlin"));
participants.push(new User("Nayira", "nayira@nayira", "HTML", "Java", "Web Development"));
participants.push(new User("tony", "tony@tony", "Java", "SQL", "Unity"));
participants.push(new User("Shivani", "shivani@shivani", "Python", "Machine Learning", "Unity"));
participants.push(new User("Angus", "angus@angus", "HTML", "Java", "Unity"));
participants.push(new User("jon", "jon@jon", "Python", "Machine Learning", "Unity"));
participants.push(new User("A", "A@A", "Unity", "HTML", "Kotlin"));
participants.push(new User("B", "B@B", "Unity", "Java", "Kotlin"));
participants.push(new User("C", "C@C", "Unity", "HTML", "HTML"));

var maxTeamSize = 1;
var teamsFormedSoFarMap = new Map();
var allocatedTeams = []
// allocateTeams(participants)
console.log(allocateTeams(participants));
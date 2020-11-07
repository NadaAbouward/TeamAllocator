class AllocatorSession(){
    constructor(teamSize, interests){
    this.teamSize = teamSize
    this.interests = interests
    this.PIN = generatePIN()
    this.members = []
    }
    function generatePIN() {
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
    allocateTeams(){
    //allocate Teams Algorithm goes here
    }
    addMember(member){
    //Add a new member to the array of members
    members.push(member)
    }
}

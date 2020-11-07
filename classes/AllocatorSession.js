class AllocatorSession(){
    constructor(teamSize, interests){
    this.teamSize = teamSize
    this.interests = interests
    this.PIN = ''
    this.members = []
    {
    function generatePIN() {
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
}

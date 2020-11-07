class TeamMember {
  constructor(name, email, interest1, interest2, interest3) {
    this.name = name;
    this.email = email;
    this.interest1 = interest1;
    this.interest2 = interest2;
    this.interest3 = interest3;
  }

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
generateOptions();
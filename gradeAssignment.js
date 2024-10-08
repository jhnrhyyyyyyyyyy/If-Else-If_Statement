function gradeAss(){

    let score = prompt("Enter your score:");
    score = parseInt(score);
    
    if (score >= 90){
        alert("Your grade is: Excellent.");
    }else if (score >= 80 && score <= 89){
        alert("Your grade is: Good.");
    } else if (score >= 70 && score <= 79){
        alert("Your grade is: Fair.");
    }else{
        alert("Your grade is: Needs Improvement.");
    }
}
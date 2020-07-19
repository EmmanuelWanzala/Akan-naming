// var weekDays = ["Sunday","Monday","Tuesday",'Wednesday","Thursday","Friday","Saturday"];
// var female = ["Akosya","Adwoa","Abenaa",'Akua","Yaa","Afua","Ama"] ;
// var maleNames = ["Kwasi","Kwadwo","Kwabena",'Kwaku","Yaw","Kofi","Kwame"];


// weekDays[d]
// maleNames[d]

// function akan(){
//     var d=parseInt(document.getElementById('d').value);
//     var m=parseInt(document.getElementById('m').value);
//     var year=document.getElementById('yy').value;
//     var cc=parseInt(year.slice(0,2));
//     var yy=parseInt(year.slice(2,4));
//     var gender=document.getElementById('gender').value

//     alert(gender)

//     if(d<1 || d>31){
//         alert('re-enter valid day')
//     }
//     if(m<1 || m>12 ){
//         alert('re-enter valid month')
//     }
    


//     d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(m+1)/10)) + d ) % 7
     
//     if(gender === 'male'){
//         alert("Your Akan name is"+ d+ ".")
//         return "stay happy"
//     }
//     else if(gender ===  'female'){
//     alert('welcome to jumanji')
//     }
//      else{
//          alert('when is your birthday')
//      }

// }
var akan = function() { 
    var dayWeek = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    
    var maleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
   
    var femaleNames = ["Akosua"," Adwoa", "Abenaa","Akua","Yaa", "Afua", "Ama"];
  
    var day = parseInt(document.getElementById("dd").value);
    var month = parseInt(document.getElementById("mm").value);
    var year = parseInt(document.getElementById("yy").value);
    
   
    var date0fbirth = new Date(year + "/" + month + "/" + day);
    var solution= date0fbirth.getDay();
    var showcase = document.getElementById("showcase");
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    
    if (month ==="" && year ==="" && day ==="" && name==="") {
      alert("Please Enter you credentials");
      return false;
    }
  
 
    
    
   if (year < 0) {
      showcase.style.background ="yellow"
      showcase.style.color= "green"
      showcase.innerHTML = " invalid data"
  }
    
  else if ((month < 1) || (month > 31)) {
      showcase.style.background ="white"
      showcase.style.color= "green"
      showcase.innerHTML = " invalid data"
  }
    
   else if (day < 0 || day > 31) {
      showcase.style.background ="red"
      showcase.style.color= "white"
      showcase.innerHTML = " invalid data"
  }
  
  if(female.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
    showcase.style.background ="yellow"
    showcase.style.color="green"
    // output.style.background ="red"
    showcase.innerHTML = "Being born on a " + dayWeek[solution] + ". Your Akan name is " + femaleNames[solution];
}
    else if(male.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) { 
      showcase.style.background ="white"
      showcase.style.color="green"
        showcase.innerHTML = "Being born on a " + dayWeek[solution] + ". Your Akan name is " + maleNames[solution];
    }
};
  
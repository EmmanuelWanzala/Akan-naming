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
var submission = function() { 
    var daysOfTheWeek = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday"
    // ];
    var maleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
    //   "Kwasi",
    //   "Kwadwo",
    //   "Kwabena",
    //   "Kwaku",
    //   "Yaw",
    //   "Kofi",
    //   "Kwame"
    // ];
    var femaleNames = ["Akosua"," Adwoa", "Abenaa","Akua","Yaa", "Afua", "Ama"];
    //   "Akosua",
    //    " Adwoa",
    //   "Abenaa",
    //   "Akua",
    //   "Yaa",
    //   "Afua",
    //   "Ama"
    // ];
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("day").value);
    // var name =(document.getElementById("name").value);
    var date0fbirth = new Date(year + "/" + month + "/" + day);
    var results = date0fbirth.getDay();
    var output = document.getElementById("output");
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    
    if (month ==="" && year ==="" && day ==="" && name==="") {
      alert("Please Enter you credentials");
      return false;
    }
  
  //   if (month == null || month== "", day == null || day == "", year== null || year == "", name == null || name == "") {
  //     alert("Please Fill All Required Field");
  //     return false;
  //   }
  // }
    
    
   if (year < 0) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = " invalid data! "
  }
    
  else if ((month < 1) || (month > 31)) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = " invalid data! "
  }
    
   else if (day < 0 || day > 31) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = " please enter a valid day! "
  }
  //  var valid = (year>0 && (month > 0 && month <= 12) (day > 0 && day <32))
   
  //  if(valid == false){
  //    alert("No Input received!!");
  //  }
  
    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) { 
      output.style.background ="white"
        output.innerHTML = " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
    }
     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="lime"
      output.style.background ="red"
      output.innerHTML = "you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
  }
  
  };
  
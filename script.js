

filterNumbers = (number) => {
    if (number % 2 !== 1) {
      return number;
    }
  }
  
  
  
  sumOf = (total, number) => {
  return total + number;
  }
  
  
  
  removeSpaces = (nums) => {
   let ans = nums.replace(/ /g, "");
    return ans;
  }
  
  checkForNaN = (arr, message) => {
    let token = ""
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
   if (isNaN(arr[i][j])) {
     token += arr[i][j] + ",";
   } 
    }
  }
    if (token !== "") {
      let writing = document.getElementById("output");
      writing.style = "color: red";
  message.innerHTML = `*Unexpected token '${token}'. Please enter numbers only.`;
  return true;
    }
  }
  
  
  
  submit = () => {
    let message = document.getElementById("output");
    message.style = "color: black";
    message.innerHTML = "";
    let input = document.getElementById("input").value;
   let withoutSpaces = removeSpaces(input);
   let arr = withoutSpaces.split(",");
   if (checkForNaN(arr, message)) {
   return false;
   } else {
     if (document.getElementById("option1").checked) {
       let result = arr.filter(filterNumbers);
       message.innerHTML = result;
     } else {
       let nums = [];
       for (let i = 0; i < arr.length; i++) {
          nums.push(Number(arr[i]));
       }
      
       let answer = nums.reduce(sumOf);
       message.innerHTML = answer;
     }
  
   }
  
  };
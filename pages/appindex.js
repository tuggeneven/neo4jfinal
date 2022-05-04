

let dataArray;

//check the LS if there is data 
function pageLoad () {
  if ( localStorage.getItem('dataInput') == null ){
    dataArray = [];
    console.log('nothing here');
} else {
  let dataArrayString = localStorage.getItem('dataInput');
  console.log(dataArrayString);
  dataArray = JSON.parse(dataArrayString);
  displayData(dataArray);
  console.log(dataArray);
  }
}

document.getElementById('submitBtn').addEventListener('click', submitData);
document.getElementById('deleteBtn').addEventListener('click', clearData);
console.log('Submit ready');   
console.log('Clear ready'); 

pageLoad();

// submiting user entry
function submitData() {
 
  let userInput = document.getElementById('input').value;
 // console.log('user entry successful');
  dataArray.push(userInput);
  displayData(dataArray);
  let stringedArray = JSON.stringify(dataArray);
  localStorage.setItem('dataInput', stringedArray);
  document.getElementById('input').value = "";
}


//Getting LS data and displaying it on HTML
function displayData(displayedArray) {
  console.log('displayfunc called', displayedArray);
  document.getElementById('log').innerHTML = "Data: <br>"
  displayedArray.forEach(arrayItem => {
  document.getElementById('log').innerHTML += `${arrayItem}, `;
});
}

//deleting the LS data
function clearData(){
localStorage.clear('dataInput');
dataArray = [];
displayData(dataArray);
}
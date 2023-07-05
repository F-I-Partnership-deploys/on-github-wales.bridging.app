//Code Copyright 2003 F-I.dev & Bridging.app MIT Licensed see LICENSE.md
cl("Starting Main App Code...");
// Main App Code

// (A) GET HTML TABLE
let table = document.getElementById("datafromcsv");

function pLD(px) {
// (B) AJAX FETCH CSV FILE
fetch(px)
.then(res => res.text())
.then(res => csvData = res)
.then(csv => {
  table.innerHTML = "";
  for (let row of CSV.parse(csv)) {
    let tr = table.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
});
}

// -------------------- End of file -------------------- 
  if (autorun){
  cl('...autorun to load data');
  pLD(dLS);
  cl('data should be loaded');
  setTimeout(() => {
    pLF();
    cl('Links Done First Round');
    sorta(document.getElementById("iDT"));  
    cl('SortA should be done');
  }, 1000);
}else{
    cl('Skipped autorun to load data.');
    cl('Making links on main...');
    pLF();
    cl('...Links on main done.');
    var findIndexTable =  document.getElementById('iDT');
    if (typeof(findIndexTable) != 'undefined' && findIndexTable != null)
    {
      cl('Initiating SortA...');
      sorta(document.getElementById("iDT")); 
      cl('..SortA done.');
    }else{
      cl('No tabele detected to allow sort.');
    }
    
}

function rmiDT(){
const element = document.getElementById("iDT");
element.remove(); // Removes thetable with the 'iDT' id
}

cl("Reached End of app-main.js");
var today = new Date();
var date = new Date();

function prevCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  buildCalendar();
}

function nextCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  buildCalendar();
}
function buildCalendar() {
  var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  var tbCalendar = document.getElementById("calendar");
  var tbCalendarYM = document.getElementById("tbCalendarYM");
  tbCalendarYM.innerHTML =
    "<font color=white>"+today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

  while (tbCalendar.rows.length > 2) {
    tbCalendar.deleteRow(tbCalendar.rows.length - 1);
  }
  var row = null;
  row = tbCalendar.insertRow();
  var cnt = 0;
  for (var i = 0; i < firstDate.getDay(); i++) {
    var cell = row.insertCell();
    cnt = cnt + 1;
  }//이번달 1일 전까지 공란 만들기

  for (i = 1; i <= lastDate.getDate(); i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
    cell.setAttribute("id",`${i}`);
    cnt = cnt + 1;
    if (cnt % 7 == 1) {
      cell.innerHTML = "<font color=#ff5353>" + i;
      
    }
    if (cnt % 7 == 0) {
      row = calendar.insertRow();
      
    }


    if (
      today.getFullYear() == date.getFullYear() &&
      today.getMonth() == date.getMonth() &&
      i == date.getDate()
    ) {
      cell.style.backgroundColor = "#FAF58C";
    }
  }
  

  if(cnt%7 !=0){
    for(i=cnt+1; i<=(tbCalendar.rows.length-2)*7; i++){
      cell=row.insertCell();
      cnt=cnt+1
    }
  }
  else{
    tbCalendar.deleteRow(-1);
  }//tr이 주차만큼 생성
 
  
}
buildCalendar();
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
prev.addEventListener("click", event =>{prevCalendar();});
next.addEventListener("click", event =>{nextCalendar();});


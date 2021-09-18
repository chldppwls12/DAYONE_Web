var today = new Date();
var date = new Date();
//*const dates=Array.from(document.querySelectorAll(".dates"));
function prevCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  buildCalendar();
  //var dates=Array.from(document.querySelectorAll(".dates"));
  //dates.forEach(function(date){console.log("dateClicked!")})
  //dates.forEach(function(date){date.addEventListener("click",dateClick)})
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
    "<font color=white> "+today.getFullYear() + "." + (today.getMonth() + 1)+" ";

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
    cell.setAttribute("class","dates");
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
      //cell.style.backgroundColor = "#FAF58C";
      
      const circle=document.createElement('div');
      cell.appendChild(circle);
      circle.setAttribute("id","circle");
      cell.style.position = "relative";
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
  var dates=Array.from(document.querySelectorAll(".dates"));
  dates.forEach(function(date){date.addEventListener("click",dateClick)});

  
}

var notice=document.querySelector("#notice");
var notice0=null;
function removed(a){
  a.remove();console.log(a);}

function dateClick(event){
  console.log("hi");
  
  //var notice0=document.getElementsByClassName("notice0");
  //var remove=!!document.getElementsByClassName("notice0");
  //console.log(remove);
  //remove.remove();
  //var remove=document.getElementsByClassName("notice0").classList;
  //console.log(remove.contains("notice0"));
  //console.log(notice0.getAttribute("class"))
  //console.log(notice0);
  //var selects=document.querySelectorAll(".noticeCircle")
  //var removes=Array.from(document.getElementByClassName("noticeCircle"));
  /*var removes=Array.from(document.querySelectorAll("noticeCircle"));
    removes.forEach((remove)=>{remove.remove();console.log(remove);console.log(remove!=null);if(remove!=null){remove.remove();}
});*/


  if(notice0!=null){
    //document.getElementsByClassName("notice0").remove();
    var removes0=Array.from(document.querySelectorAll(".notice0"));
    var removes1=Array.from(document.querySelectorAll(".noticeCircle"));
    var removes2=Array.from(document.querySelectorAll(".notice1"));
    var removes3=Array.from(document.querySelectorAll(".noticeReservation"));
    //removes0.forEach((remove)=>{removed(a);});
    removes0.forEach(function(a){a.remove();console.log(a);});
    //removes1.forEach(removed(a));
    removes1.forEach(removed);
    removes2.forEach((remove)=>{remove.remove();console.log(remove);});
    removes3.forEach((remove)=>{remove.remove();console.log(remove);});
    //console.log(notice);
    //removes.removes(1);
    //notice.removeChild(removes);
  }
  //if(check!=null){
    //check.remove();}
   
  var ids=this;
  //ids=event.target을 this로 바꾸니까 바로 해결!
  var idsID=ids.getAttribute("id")
  console.log(idsID);
  notice0=document.createElement("div");
  var noticeCircle=document.createElement("div");
  var notice1=document.createElement("div");
  var noticeReservation=document.createElement("div");
  notice0.setAttribute("class","notice0");
  noticeCircle.setAttribute("class","noticeCircle");
  notice1.setAttribute("class","notice1");
  noticeReservation.setAttribute("class","noticeReservation");
  noticeReservation.innerText=idsID+"일에 등록된 일정이 없습니다."
  notice0.appendChild(noticeCircle);
  notice1.appendChild(noticeReservation);
  notice.appendChild(notice0);
  notice.appendChild(notice1);
  //ids.removeEventListener("click",dateClick);
}

buildCalendar();
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
prev.addEventListener("click",prevCalendar);
next.addEventListener("click", event =>{nextCalendar();});
//var dates=Array.from(document.querySelectorAll(".dates"));
//dates.forEach(function(date){date.addEventListener("click",dateClick)});
//이 두 줄이 원래 밖에 있었는데, 밖에 있던 줄을 buildCalendar();안에 넣으니까 해결!왤까??
//buildCalendar가 일어난 다음에 실행되어야 하는 함수라 이렇게 해야 되는 듯!

//dates.forEach(function(date){date.addEventListener("click",event=>{console.log("dateClicked!")})});
//dates.forEach(function(date){date.addEventListener("click",dateClick,{capture:true})})
//dates.forEach(function(date){date.addEventListener("click",dateClick,{once:true})})
//도 좋은 방식. 13일 눌렀다가 12일 눌렀다가 다시 13일 누르면 클릭안됨..!
//누르면 제일 처음에 notice0이 있으면 그 태그를 지워주고 시작하면 이런 once click event 없어도 될 듯!
/*var circles=document.querySelector("#circle")
circles.removeEventListener("click",dateClick);*/
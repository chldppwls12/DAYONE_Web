
//console.log("hello",year,month,day)
var today = new Date();
var date = new Date();
let dateSends;


var dates=null;
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
  }

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
  }
  //selectDates(dates,dateClick);
  dates=Array.from(document.querySelectorAll(".dates"));
  dates.forEach(function(date){date.addEventListener("click",dateClick)});
  //dates.forEach(date=>date.addEventListener("click",dateSend));//: index에도 있음.
}
//var selectDates=function(a,b){
  //var a=Array.from(document.querySelectorAll(".dates"));
  //a.forEach(function(date){date.addEventListener("click",b)});
//}

//console.log(dates)
//setTimeout(() => {
  //console.log(dates)
//}, 2000);

var notice=document.querySelector("#notice");
var notice0=null;
function removed(a){
  a.remove();console.log(a);}

var hihi=function(a){console.log("hihi",a);}

var dateClick= function (event){
  console.log("hi");

  if(notice0!=null){
    var removes0=Array.from(document.querySelectorAll(".notice0"));
    var removes1=Array.from(document.querySelectorAll(".noticeCircle"));
    var removes2=Array.from(document.querySelectorAll(".notice1"));
    var removes3=Array.from(document.querySelectorAll(".noticeReservation"));
    removes0.forEach(function(a){a.remove();console.log(a);});
    removes1.forEach(removed);
    removes2.forEach((remove)=>{remove.remove();console.log(remove);});
    removes3.forEach((remove)=>{remove.remove();console.log(remove);});
  }
   
  /*var ids=this;
  var idsID=ids.getAttribute("id")
  console.log(idsID);*/
  //createNotice();
  //noticeReservation.innerText=idsID+"일에 등록된 일정이 없습니다."
}
var noticeCircle;
var notice1;
var noticeReservation;
var noticeTime;
var noticeName;

var createNotice = function(){
  notice0=document.createElement("div");
  noticeCircle=document.createElement("div");
  notice1=document.createElement("div");
  noticeReservation=document.createElement("div");
  notice0.setAttribute("class","notice0");
  noticeCircle.setAttribute("class","noticeCircle");
  notice1.setAttribute("class","notice1");
  noticeReservation.setAttribute("class","noticeReservation");
  //noticeReservation.innerText=idsID+"일에 등록된 일정이 없습니다."
  notice0.appendChild(noticeCircle);
  notice1.appendChild(noticeReservation);
  notice.appendChild(notice0);
  notice.appendChild(notice1);

}


buildCalendar();

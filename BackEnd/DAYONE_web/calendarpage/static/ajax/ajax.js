//window.addEventListener('load', function(){});
let btnAjax = document.querySelector(".btnAjax");
    btnAjax.addEventListener("click", (e) => {
      let year = document.querySelector(".year").value;
      let month = document.querySelector(".month").value;
      let day = document.querySelector(".day").value;
      let params = {
        year: year,
        month: month,
        day: day,
      };
      $.ajax({
        url: "{%url 'calendarpage:ajax' %}",
        type: "POST",
        headers: {
          "X-CSRFTOKEN": "{{csrf_token}}",
        },
        data: JSON.stringify(params),
        success: function (data) {
          console.log(data);
          let reservationList = document.querySelector(".reservation-list");
          if (data.length == 0) {
            reservationList.innerHTML = "예약이 없습니다";
          } else {
            reservationList.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
              let span = document.createElement("span");
              span.innerHTML = `예약자: ${data[i]["representative_name"]} / 
                              시작 시간: ${data[i]["start_time"]} /
                              끝나는 시간: ${data[i]["end_time"]} /
                              멤버: ${data[i]["member_arr"]}
                              <br/>`;
              reservationList.appendChild(span);
            }
          }
        },
        error: function () {
          console.log("실패");
        },
      });
    });
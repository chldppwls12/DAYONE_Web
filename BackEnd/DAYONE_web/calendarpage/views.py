from django.shortcuts import redirect, render
from .models import Reservation
from django.contrib.auth import get_user_model
import datetime
from django.contrib import messages

# Create your views here.
def index(request):
  return render(request, 'calendarpage/index.html')

def can_reservation(er, new_start_time, new_end_time):
  exist_start_time = er.start_time
  exist_end_time = er.end_time
  new_start_time = datetime.datetime.strptime(new_start_time, '%H:%M:%S').time()
  new_end_time = datetime.datetime.strptime(new_end_time, '%H:%M:%S').time()
  if new_end_time <= exist_start_time or exist_end_time <= new_start_time:
    return True
  else:
    return False

#오후 ~ 그 다음 오전/오후까지 예약 불가
def new(request):
  current_user = request.user
  members = get_user_model().objects.exclude(id=current_user.id)
  if request.method == 'GET':
    return render(request, 'calendarpage/reservation.html', {'members': members})
  else:
    new_date = request.POST['date']
    new_start_time = request.POST['start_time']
    new_end_time = request.POST['end_time']
    existing_reservation = Reservation.objects.filter(date=new_date)
    flag = True
    for er in existing_reservation.all():
      flag = can_reservation(er, new_start_time, new_end_time)
      if not flag:
        break
    if not flag:
      messages.info(request, "예약 시간이 겹칩니다.")
      return redirect('calendarpage:new')
    else:
      reservation = Reservation()
      reservation.representative = current_user
      reservation.content = request.POST['content']
      reservation.date = new_date
      reservation.start_time = new_start_time
      reservation.end_time = new_end_time
      add_members = request.POST.getlist('members')
      add_members_obj = []
      for member in add_members:
        add_members_obj.append(members.filter(username=member))
      if int(reservation.start_time.split(':')[0]) < 12:
        time_category = '오전'
      else:
        time_category = '오후'
      reservation.save()
      for member in add_members_obj:
        reservation.member.add(members.get(id=member[0].id))
      return render(request, 'calendarpage/reservationCheck.html', {'reservation': reservation, 'time_category': time_category})
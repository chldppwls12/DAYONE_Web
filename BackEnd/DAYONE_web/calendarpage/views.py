from django.shortcuts import render
from .models import Reservation
from django.contrib.auth import get_user_model

# Create your views here.
def index(request):
  return render(request, 'calendarpage/index.html')

def new(request):
  current_user = request.user
  members = get_user_model().objects.exclude(id=current_user.id)
  if request.method == 'GET':
    return render(request, 'calendarpage/reservation.html', {'members': members})
  else:
    reservation = Reservation()
    reservation.representative = current_user
    reservation.content = request.POST['content']
    reservation.date = request.POST['date']
    reservation.start_time = request.POST['start_time']
    reservation.end_time = request.POST['end_time']
    add_members = request.POST.getlist('members')
    add_members_obj = []
    for member in add_members:
      add_members_obj.append(members.filter(username=member))
    if int(reservation.start_time.split(':')[0]) < 12:
      time_category = '오전'
    else:
      time_category = '오후'
    print(add_members_obj)
    reservation.save()
    for member in add_members_obj:
      reservation.member.add(members.get(id=member[0].id))
    return render(request, 'calendarpage/reservationCheck.html', {'reservation': reservation, 'time_category': time_category})
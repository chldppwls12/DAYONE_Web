from django.contrib import admin
from .models import Reservation, TeamMember

# Register your models here.
@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
  list_display = [
    'pk', 'representative', 'content',
    'date', 'start_time', 'end_time']

@admin.register(TeamMember)
class TeamMember(admin.ModelAdmin):
  pass
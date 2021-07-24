from django.db import models
from django.conf import settings

# Create your models here.

#settings에 AUTH_USER_MODEL 설정하기
class Reservation(models.Model):
  representative = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  content = models.CharField(max_length=200, blank=True)
  date = models.DateField()
  start_time = models.TimeField()
  end_time = models.TimeField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  is_deleted = models.BooleanField(default=False)

class TeamMember(models.Model):
  reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
  member = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
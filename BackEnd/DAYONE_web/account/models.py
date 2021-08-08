from django.db import models
from django.contrib.auth.models import User
import datetime
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    major = models.CharField(max_length = 30)
    birth_day = models.DateField()
    age = models.IntegerField()
    sex = models.CharField(max_length = 1, choices = (
        ('F', 'Female'),
        ('M', 'Male')
    ))
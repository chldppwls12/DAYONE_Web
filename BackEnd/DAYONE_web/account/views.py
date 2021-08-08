from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from .models import Profile
from datetime import date


# Create your views here.

def login_index(req):
    return render(req, 'account/login.html')

def log_in(req):
    user = authenticate(
        username = req.POST['id'],
        password = req.POST['pw']
    )
    
    if user is not None:
        login(req, user)
        return HttpResponseRedirect(reverse('mainpage:index'))
    else:
        return HttpResponse("failed")

def log_out(req):
    logout(req)
    return HttpResponseRedirect(reverse('mainpage:index'))

def join_index(req):
    return render(req, 'account/join.html')

def join(req):
    
    if req.POST['pw'] == req.POST['check_pw']:
        user = User.objects.create_user(
            username = req.POST['id'],
            password = req.POST['pw'],
            email = req.POST['email'],
            first_name = req.POST['first_name'],
            last_name = req.POST['last_name']
        )
        birth_day = date.fromisoformat(req.POST['birth_day'])
        profile = Profile(
            user = user,
            major = req.POST['major'],
            birth_day = birth_day,
            age = date.today().year - birth_day.year + 1,
            sex = req.POST['sex']
            )

        profile.save()

    return HttpResponseRedirect(reverse("account:login_index"))
    

def mypage(req, username):
    if req.user.is_authenticated:
        user_info = {
            'id' : req.user.username,
            'email' : req.user.email,
            'last_name' : req.user.last_name,
            'first_name' : req.user.first_name,
            'major' : req.user.profile.major,
            'birth_day' : req.user.profile.birth_day.__str__,
        }
        if req.user.profile.sex == 'Male':
            user_info['sex'] = '남성'
        elif req.user.profile.sex == 'feMale':
            user_info['sex'] = '여성'
        return render(req, 'account/mypage.html', user_info)
    else:
        return HttpResponseRedirect('account:login_index')
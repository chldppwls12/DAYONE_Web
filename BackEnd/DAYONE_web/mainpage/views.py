from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

# Create your views here.

def index(req):
    if req.user.is_authenticated:
        in_or_out = '로그아웃'
        to_go = reverse('account:logout')
        to_mypage = reverse('account:mypage', kwargs= {'username' : req.user.username})
        
    else:
        in_or_out = '로그인'
        to_go = reverse('account:login_index')
        to_mypage = reverse('account:login_index')

    return render(req, 'mainpage/index.html', {'is_auth' : in_or_out, 'to_go' : to_go, 'to_mypage' : to_mypage})
from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(req):
    return render(req, 'mainpage/index.html', {})

def login_index(req):
    return render(req, 'mainpage/login.html', {})

def login(req):
    return HttpResponse("ID : " + req.POST['id'] + "\nPW : " + req.POST['pw'])
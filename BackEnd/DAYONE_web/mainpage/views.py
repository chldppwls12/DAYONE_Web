from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(req):
    return render(req, 'mainpage/index.html', {})
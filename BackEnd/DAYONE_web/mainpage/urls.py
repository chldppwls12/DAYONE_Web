from django.urls import path
from . import views

app_name = "mainpage"
urlpatterns = [
    path('', views.index, name = 'index'),
    path('login', views.login_index, name = 'login_index'),
    path('login/auth', views.login, name = 'login'),
]
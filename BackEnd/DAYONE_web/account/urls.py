from django.urls import path
from . import views

app_name = "account"
urlpatterns = [
    path('login', views.login_index, name = 'login_index'),
    path('logout', views.log_out, name = 'logout'),
    path('login/auth', views.log_in, name = 'login'),
    path('join', views.join_index, name = "join_index"),
    path('join/submit', views.join, name = "join"),
    path('<str:username>', views.mypage, name = 'mypage'),
]
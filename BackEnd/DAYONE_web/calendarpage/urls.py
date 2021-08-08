from django.urls import path
from . import views

app_name = "calendarpage"
urlpatterns = [
  path('', views.index, name='index'),
  path('new/', views.new, name='new'),
  path('delete/<int:id>', views.delete, name='delete'),
]
from django.urls import path
from . import views

app_name = "calendarpage"
urlpatterns = [
    path('', views.index, name='index'),
    path('new/', views.new, name='new'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('list/', views.show_list, name='show'),
    path('ajax/', views.ajax_prac, name='ajax'),
    path('ajax0/', views.ajax0, name='ajax0')
]

from django.urls import path

from . import views

urlpatterns = [
    path("all", views.TrainerListAV.as_view(), name="all_trainers"),
    path("<int:pk>", views.TrainerDetailAV.as_view(), name="detail")
]
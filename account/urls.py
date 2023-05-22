from django.urls import path

from . import views

urlpatterns = [
    path("trainers", views.TrainerListAV.as_view(), name="all_trainers"),
    path("trainer/<int:pk>", views.TrainerDetailAV.as_view(), name="detail"),
]

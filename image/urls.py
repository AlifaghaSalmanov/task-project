from django.urls import path

from . import views

urlpatterns = [
    path("<str:type>", views.ImageListAV.as_view(), name="images")
]
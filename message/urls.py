from django.urls import path

from . import views

urlpatterns = [
    path("email/create/", views.EmailCreateAV.as_view(), name="email-create"),
    path("email/update/", views.EmailUpdateAV.as_view(), name="email-update"),
    path("emails/", views.EmailListAV.as_view(), name="email-list"),
    path("send/", views.SendEmail.as_view(), name="send-email"),
]

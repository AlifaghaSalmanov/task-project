import os

from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render
from dotenv import load_dotenv
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView
from rest_framework.response import Response

from .models import ActiveEmail, Inbox
from .serializer import ActiveEmailSerializer, InboxSerializer

load_dotenv()


class EmailCreateAV(CreateAPIView):
    queryset = ActiveEmail.objects.all()
    serializer_class = ActiveEmailSerializer


class EmailUpdateAV(UpdateAPIView):
    queryset = ActiveEmail.objects.all()
    serializer_class = ActiveEmailSerializer

    def get_object(self):
        email = self.request.data.get("email")
        return ActiveEmail.objects.get(email=email)


class EmailListAV(ListAPIView):
    queryset = ActiveEmail.objects.filter(is_active=True)
    serializer_class = ActiveEmailSerializer


class SendEmail(CreateAPIView):
    queryset = Inbox.objects.all()
    serializer_class = InboxSerializer

    def create(self, request, *args, **kwargs):
        print(f"{os.getenv('EMAIL_HOST_USER')=}")
        send_mail(
            "From " + request.data.get("email"),
            request.data.get("message"),
            settings.EMAIL_HOST_USER,
            [os.getenv("EMAIL_HOST_USER")],
        )
        return super().create(request, *args, **kwargs)

from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView
from rest_framework.response import Response

from .models import ActiveEmail, Inbox
from .serializer import ActiveEmailSerializer, InboxSerializer


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

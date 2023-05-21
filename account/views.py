from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Trainer
from .serializer import TrainerDetailSerializer, TrainerListSerializer


class TrainerListAV(ListAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerListSerializer


class TrainerDetailAV(RetrieveAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerDetailSerializer
    filter_backends = [DjangoFilterBackend]

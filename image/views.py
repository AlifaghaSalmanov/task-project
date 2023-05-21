from django.shortcuts import get_object_or_404, render
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView

from .models import Image, Type
from .serializer import ImageSerializers


class ImageListAV(ListAPIView):
    def get_queryset(self):
        self.type = get_object_or_404(Type, name=self.kwargs["type"])
        return Image.objects.filter(type=self.type)

    serializer_class = ImageSerializers

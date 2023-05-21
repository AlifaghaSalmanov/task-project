from django.contrib import admin

from .models import Image, Type

# Register your models here.
admin.site.register(Type)

class ImageAdmin(admin.ModelAdmin):
    list_display = ('type','title','content','image')
    list_filter = ('type',)
    search_fields = ('type__name','title','content')

admin.site.register(Image,ImageAdmin)

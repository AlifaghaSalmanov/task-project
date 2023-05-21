from django.contrib import admin

from .models import Trainer

# Register your models here.


class TrainerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "image", "about")
    list_filter = ("first_name",)
    search_fields = ("first_name", "last_name", "about")


admin.site.register(Trainer, TrainerAdmin)

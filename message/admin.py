from django.contrib import admin

# Register your models here.
from .models import ActiveEmail, Inbox, SendActiveEmail


class ActiveEmailAdmin(admin.ModelAdmin):
    list_display = ("email", "is_active")
    list_filter = ("is_active",)
    search_fields = ("email",)


class InboxAdmin(admin.ModelAdmin):
    list_display = ("email", "first_name", "last_name", "created_at")
    list_filter = ("created_at",)
    search_fields = ("email", "first_name", "last_name")


class SendActiveEmailAdmin(admin.ModelAdmin):
    list_display = ("subject", "created_at")
    list_filter = ("created_at",)
    search_fields = ("subject",)


admin.site.register(ActiveEmail, ActiveEmailAdmin)
admin.site.register(Inbox, InboxAdmin)
admin.site.register(SendActiveEmail, SendActiveEmailAdmin)

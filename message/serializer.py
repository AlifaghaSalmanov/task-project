from rest_framework import serializers

from .models import ActiveEmail, Inbox


class ActiveEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActiveEmail
        fields = ("email", "is_active")


class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = ("first_name", "last_name", "email", "message", "created_at")

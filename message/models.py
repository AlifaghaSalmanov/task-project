from django.conf import settings
from django.core.mail import send_mail
from django.db import models


# Create your models here.
class ActiveEmail(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email


class Inbox(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


class SendActiveEmail(models.Model):
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        emails = ActiveEmail.objects.filter(is_active=True)
        for email in emails:
            send_mail(
                self.subject,
                self.message,
                settings.EMAIL_HOST_USER,
                [email.email],
            )
        super().save(*args, **kwargs)

    def __str__(self):
        return self.subject

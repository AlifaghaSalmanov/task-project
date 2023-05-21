from django.db import models

# Create your models here.


class Trainer(models.Model):
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(max_length=255, null=True, blank=True)
    about = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.first_name

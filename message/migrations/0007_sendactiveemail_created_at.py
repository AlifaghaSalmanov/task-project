# Generated by Django 4.2.1 on 2023-05-29 15:28

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("message", "0006_sendactiveemail"),
    ]

    operations = [
        migrations.AddField(
            model_name="sendactiveemail",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]

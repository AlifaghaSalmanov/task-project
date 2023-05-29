# Generated by Django 4.2.1 on 2023-05-22 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("message", "0004_alter_activeemail_email"),
    ]

    operations = [
        migrations.CreateModel(
            name="Inbox",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=255)),
                ("last_name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("message", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
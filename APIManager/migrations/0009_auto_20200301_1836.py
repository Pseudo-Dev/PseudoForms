# Generated by Django 3.0.3 on 2020-03-01 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIManager', '0008_auto_20200301_1824'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formdata',
            name='owner',
            field=models.CharField(max_length=120),
        ),
    ]

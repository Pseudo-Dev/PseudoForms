# Generated by Django 3.0.3 on 2020-02-12 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIManager', '0003_auto_20200212_0724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formdata',
            name='formData',
            field=models.CharField(default='m', max_length=10000),
        ),
    ]

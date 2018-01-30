from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core import serializers
from .models import Idioma


@receiver(post_save, sender=Idioma)
def post_save_idioma(sender, instance, **kwargs):
    if kwargs['created']:
        with open("file.json", "w") as out:
            data = serializers.serialize("json", instance)
            out.write(data)
            data2 = serializers.serialize("json", instance)
            out.write(data)
            print("creado")
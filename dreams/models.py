import json
from django.db import models
from django.db.models.signals import post_save
from django.core import serializers
from django.dispatch import receiver
from users.models import UserProfile
# Create your models here.


class Dream(models.Model):
    agradable = models.BooleanField(default=True)
    userprofile = models.ForeignKey(UserProfile)
    descripcion = models.TextField(max_length=300, blank=True)

    personaje1 = models.CharField(max_length=40, blank=True)
    personaje2 = models.CharField(max_length=40, blank=True)

    def __str__(self):
        return str(self.userprofile)

class MenuIdioma(models.Model):
    idioma = models.CharField(max_length=30)
    activo = models.BooleanField(default=False)
    def __str__(self):
        return self.idioma

class Idioma(models.Model):
    lenguaje = models.ForeignKey(MenuIdioma, related_name="idioma_traductor")
    #pantalla 1

    sub_pregunta = models.CharField(max_length=30)
    sad_image = models.CharField(max_length=30)
    happy_image = models.CharField(max_length=30)

    btn_continuar = models.CharField(max_length=30)
    btn_cancelar = models.CharField(max_length=30)
    btn_confirmar = models.CharField(max_length=30)
    sad_mensaje = models.TextField(max_length=200)
    happy_mensaje = models.TextField(max_length=200)
    ayuda1 = models.TextField(max_length=200)

    def __str__(self):
        return str(self.lenguaje)


@receiver(post_save, sender=Idioma)
def post_save_idioma(sender, instance, **kwargs):
    print(instance.__dict__)
    name = str(instance.__dict__['_lenguaje_cache'])
    extension = '.json'
    nombre_archivo = name+extension
    print(name+extension)

    hola = instance.__dict__['_state']
    instance.__dict__.pop('_state')
    instance.__dict__.pop('_lenguaje_cache')
    print(instance.__dict__)
    with open(nombre_archivo, "w") as out:
        #data = serializers.serialize("json", instance.__dict__)
        #out.write(data)
        data = json.dumps(instance.__dict__)
        out.write(data)
    instance.__dict__['_state'] = hola




from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^$', index, name="inicio"),
    url(r'^agradable$', agradable, name="agradable"),
    url(r'^chat$', chat, name="chat"),
    url(r'^desagradable$', desagradable, name="desagradable"),
    url(r'^instruccion$', instruccion, name="instruccion"),
    url(r'^introduccion$', introduccion,
        name="introduccion"),
    url(r'^introducciones$', introducciones,
        name="introducciones"),
    url(r'^personaje-agradables$', personaje_agradable,
        name="personaje_agradable"),
    url(r'^personaje-desagradables$', personaje_desagradable,
        name="personaje_desagradable"),
    url(r'^cambio-lenguaje/$', cambio_lenguaje, name='cambio_lenguaje'),
    url(r'^crear-sueño/$', crear_sueño, name="crear_sueño"),
    url(r'^crear-descripcion/$', crear_descripcion, name="crear_descrip"),
    url(r'^crear-personajes/$', crear_personajes, name="crear_personaje"),
    url(r'^mis-suenos/$', mis_suenos, name="mis_suenos"),


]
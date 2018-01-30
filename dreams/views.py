import json
from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Idioma, Dream

@login_required
def index(request):
    datos = json.loads(open('ENGLISH.json').read())
    datos['idiomas'] = Idioma.objects.all()
    print(datos)
    return render(request, 'dreams/describir(inicio).html', datos)


def agradable(request):
    return render(request, 'dreams/agradable.html', {})


def chat(request):
    return render(request, 'dreams/chat.html', {})


def desagradable(request):
    return render(request, 'dreams/desagradable.html', {})


def describir(request):
    return render(request, 'dreams/describir(inicio).html', {})


def instruccion(request):
    return render(request, 'dreams/instruccion.html', {})


def introduccion(request):
    return render(request, 'dreams/introduccion.html', {})


def introducciones(request):
    return render(request, 'dreams/introducciones.html', {})


def personaje_agradable(request):
    return render(request, 'dreams/personajes-agradable.html', {})


def personaje_desagradable(request):
    return render(request, 'dreams/personajes-desagradable.html', {})


def cambio_lenguaje(request):
    if request.is_ajax():
        idioma = request.GET['idioma']
        extension = '.json'
        nombre_archivo = idioma + extension
        datos = json.loads(open(nombre_archivo).read())
        response = json.dumps(datos)

        return HttpResponse(response, content_type='application/json')

def crear_sueño(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        estado = request.GET['estado_sueño']

        if estado == "1":
            dream = Dream(userprofile_id=user)
            dream.save()
            print(dream.id)
        else:
            dream = Dream(agradable=False, userprofile_id=user)
            dream.save()
            print(dream.id);
        return HttpResponse(dream.id)


def crear_descripcion(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        id = int(request.GET['id_sueno'])
        texto = request.GET['texto']
        dream = Dream.objects.get(id=id)
        dream.descripcion = texto
        dream.save()

        return HttpResponse("positivo")


def crear_personajes(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        id = int(request.GET['id_sueno'])
        personaje1 = request.GET['personaje1']
        personaje2 = request.GET['personaje2']
        dream = Dream.objects.get(id=id)
        dream.personaje1 = personaje1
        dream.personaje2 = personaje2
        dream.save()
        return HttpResponse("positivo")


def mis_suenos(request):
    user = request.user.userprofile.id
    dreams = Dream.objects.filter(userprofile_id=user)

    return render(request, 'dreams/mis_sueños.html', {'dreams': dreams})

# coding=utf-8
from django.shortcuts import render


def mainpage(request):
    ctx = []

    return render(request, 'index.html', ctx)

def xwdt(request):
    ctx = []
    return render(request, 'gallery.html', ctx)


def about(request):
    ctx = []
    return render(request, 'about.html', ctx)


def contact(request):
    ctx = []
    return render(request, 'contact.html', ctx)

def news(request):
    ctx = []
    return render(request, 'news.html', ctx)

def newsdetail(request):
    ctx = []
    return render(request, 'news-detail.html', ctx)

def field(request):
    ctx = []
    return render(request, 'field.html', ctx)
# coding=utf-8
from django.shortcuts import render


def mainpage(request):
    ctx = []

    return render(request, 'index.html', ctx)


def tcs(request):
    ctx = []
    return render(request, 'tcs.html', ctx)


def ito(request):
    ctx = []
    return render(request, 'ito.html', ctx)


def bpo(request):
    ctx = []
    return render(request, 'bpo.html', ctx)


def pgs(request):
    ctx = []
    return render(request, 'pgs.html', ctx)


def mobsolu(request):
    ctx = []
    return render(request, 'mobile_solutions.html', ctx)


def digital(request):
    ctx = []
    return render(request, 'digital.html', ctx)


def about(request):
    ctx = []
    return render(request, 'about.html', ctx)


def contact(request):
    ctx = []
    return render(request, 'contact.html', ctx)
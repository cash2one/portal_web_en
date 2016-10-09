# coding=utf-8
from django.shortcuts import render

from para.models import CNews, CDomain


def get_base_info(request):
    ctx = {}
    # domain
    domains = CDomain.objects.all()
    listmenu = []
    for d in domains:
        if d.types.names not in listmenu:
            listmenu.append(d.types.names)

    listret = []
    for l in listmenu:
        listdm = []
        for d in domains:
            if l == d.types.names:
                listdm.append(d)
        listret.append({'menumain': l, 'menus': listdm})
    ctx['domainmenus'] = listret
    return ctx


def mainpage(request):
    ctx = get_base_info(request)

    # news
    news = CNews.objects.all()
    ctx['news'] = news

    return render(request, 'index.html', ctx)


def xwdt(request):
    ctx = get_base_info(request)
    return render(request, 'gallery.html', ctx)


def about(request):
    ctx = get_base_info(request)
    return render(request, 'about.html', ctx)


def contact(request):
    ctx = get_base_info(request)
    return render(request, 'contact.html', ctx)


def news(request):
    ctx = get_base_info(request)
    # news
    news = CNews.objects.all()
    ctx['news'] = news
    return render(request, 'news.html', ctx)


def newsdetail(request, newsid):
    ctx = get_base_info(request)
    newsobj = CNews.objects.get(pk=newsid)
    ctx['newsobj'] = newsobj
    return render(request, 'news-detail.html', ctx)


def field(request):
    ctx = get_base_info(request)
    return render(request, 'field.html', ctx)

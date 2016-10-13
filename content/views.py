# coding=utf-8
from django.shortcuts import render

from para.models import CNews, CDomain, CSolution


def get_base_info(request):
    ctx = {}
    # domain
    domains = CDomain.objects.filter(pubflag=1)
    listdomainmenu = []
    for d in domains:
        if d.types.names not in listdomainmenu:
            listdomainmenu.append(d.types.names)

    listdomainret = []
    for l in listdomainmenu:
        listdm = []
        for d in domains:
            if l == d.types.names:
                listdm.append(d)
        listdomainret.append({'menumain': l, 'menus': listdm})
    ctx['domainmenus'] = listdomainret

    # solution
    solutions = CSolution.objects.filter(pubflag=1)
    listsolutionmenu = []
    for s in solutions:
        if s.types.names not in listsolutionmenu:
            listsolutionmenu.append(s.types.names)

    listsolutionret = []
    for l in listsolutionmenu:
        listdm = []
        for s in solutions:
            if l == s.types.names:
                listdm.append(s)
        listsolutionret.append({'menumain': l, 'menus': listdm})
    ctx['solutionmenus'] = listsolutionret
    return ctx


def mainpage(request):
    ctx = get_base_info(request)

    # news
    news = CNews.objects.all()
    ctx['news'] = news

    # solutions
    solutions = CDomain.objects.filter(homeflag=1)[0:6]
    ctx['solutions'] = solutions

    return render(request, 'index.html', ctx)


def xwdt(request):
    ctx = get_base_info(request)
    return render(request, 'gallery.html', ctx)


def contact(request):
    ctx = get_base_info(request)
    return render(request, 'contact.html', ctx)


def news(request):
    ctx = get_base_info(request)
    # news
    news = CNews.objects.all().order_by('-pubtime')
    ctx['news'] = news
    return render(request, 'news.html', ctx)


def domaindetail(request, domainid):
    ctx = get_base_info(request)
    newsobj = CDomain.objects.get(pk=domainid)
    ctx['newsobj'] = newsobj
    ctx['newstime'] = False
    return render(request, 'news-detail.html', ctx)


def solutiondetail(request, solutionid):
    ctx = get_base_info(request)
    newsobj = CSolution.objects.get(pk=solutionid)
    ctx['newsobj'] = newsobj
    ctx['newstime'] = False
    return render(request, 'news-detail.html', ctx)


def newsdetail(request, newsid):
    ctx = get_base_info(request)
    newsobj = CNews.objects.get(pk=newsid)
    ctx['newsobj'] = newsobj
    ctx['newstime'] = True
    return render(request, 'news-detail.html', ctx)


def field(request):
    ctx = get_base_info(request)
    return render(request, 'field.html', ctx)

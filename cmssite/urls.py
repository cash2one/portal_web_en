"""cmssite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url, patterns
from django.contrib import admin
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'content.views.mainpage'),
    url(r'^xwdt/', 'content.views.xwdt'),
    url(r'^about/', 'content.views.about'),
    url(r'^contact/', 'content.views.contact'),
    url(r'^news/', 'content.views.news'),
    url(r'^newsdetail/', 'content.views.newsdetail'),
     url(r'^field/', 'content.views.field'),

]

urlpatterns += [
    url(r'^media/(?P<path>.*)', 'django.views.static.serve',
        {'document_root': 'c://git//cms//static//'}),
]

urlpatterns += patterns('api.views',
    url(r'^api/$', 'index'),
    url(r'^api/docs/$', 'docs'),
    url(r'^api/docs/(?P<json>\w+)/$', 'module'),
)

urlpatterns += staticfiles_urlpatterns()
if settings.DEBUG:
    urlpatterns += patterns('',
                            url(r'^media/(?P<path>.*)$',
                                'django.views.static.serve',
                                {'document_root': settings.MEDIA_ROOT,}),
                            )

#!/usr/bin/python
# -*- coding=utf-8 -*-

from django.db import models
from DjangoUeditor.models import UEditorField
from utils.storage import *


class Para(models.Model):
    key = models.CharField(max_length=100, db_index=True, unique=True, verbose_name=u'参数KEY')
    val = models.CharField(max_length=100, blank=True, null=True, verbose_name=u'参数值')
    file = models.FileField(upload_to='files/', storage=ImageStorage(), blank=True, null=True, verbose_name=u'参数文件')
    explain = models.CharField(max_length=255, blank=True, null=True, verbose_name=u'参数说明')

    class Meta:
        db_table = "t_para"
        verbose_name_plural = u"参数"
        verbose_name = u"参数"

    def __unicode__(self):
        return ''


class CTypes(models.Model):
    names = models.CharField(max_length=255, unique=True, verbose_name=u'类型')

    class Meta:
        db_table = "t_types"
        verbose_name_plural = u"类型"
        verbose_name = u"类型"

    def __unicode__(self):
        return self.names


class CNews(models.Model):
    title = models.CharField(max_length=255, unique=True, verbose_name=u'标题')
    summary = models.CharField(max_length=255, verbose_name=u'摘要')
    pubtime = models.DateField(verbose_name=u'发布时间')
    pic = models.ImageField(upload_to='domain', storage=ImageStorage(), verbose_name=u'图片')
    content = UEditorField(u"文档内容", width=840, height=460, imagePath="news/", toolbars='full', )

    class Meta:
        db_table = "t_news"
        verbose_name_plural = u"新闻"
        verbose_name = u"新闻"

    def __unicode__(self):
        return self.title


class CDomain(models.Model):
    title = models.CharField(max_length=255, unique=True, verbose_name=u'标题')
    types = models.ForeignKey(CTypes, blank=True, null=True, verbose_name=u'领域类型')
    summary = models.CharField(max_length=255, blank=True, null=True, verbose_name=u'摘要')
    pubtime = models.DateField(verbose_name=u'发布时间', blank=True, null=True, )
    pic = models.ImageField(upload_to='domain', storage=ImageStorage(), blank=True, verbose_name=u'图片')
    content = UEditorField(u"文档内容", width=840, height=460, imagePath="domain/", toolbars='full', )

    class Meta:
        db_table = "t_domain"
        verbose_name_plural = u"领域业务"
        verbose_name = u"领域业务"

    def __unicode__(self):
        return self.title


class CSolution(models.Model):
    title = models.CharField(max_length=255, unique=True, verbose_name=u'标题')
    types = models.ForeignKey(CTypes, verbose_name=u'解决方案类型')
    summary = models.CharField(max_length=255, verbose_name=u'摘要')
    pubtime = models.DateField(verbose_name=u'发布时间')
    pic = models.ImageField(upload_to='solution', storage=ImageStorage(), blank=True, verbose_name=u'图片')
    content = UEditorField(u"文档内容", width=840, height=460, imagePath="solution/", toolbars='full',)

    class Meta:
        db_table = "t_solution"
        verbose_name_plural = u"解决方案"
        verbose_name = u"解决方案"

    def __unicode__(self):
        return self.title

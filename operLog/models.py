#!/usr/bin/python
# -*- coding=utf-8 -*-

from django.db import models


class COperLog(models.Model):
    oper = models.CharField(max_length=255, verbose_name=u"操作")
    ipaddr = models.CharField(max_length=255, blank=True, null=True, verbose_name=u"操作IP地址")
    desc = models.CharField(max_length=255, blank=True, null=True, verbose_name=u"备注信息")
    createTime = models.DateTimeField(auto_now_add=True, verbose_name=u"操作时间")

    class Meta:
        db_table = "t_operlog"
        verbose_name_plural = verbose_name = u"操作日志"

    def __unicode__(self):
        return ""

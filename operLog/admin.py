#!/usr/bin/python
# -*- coding=utf-8 -*-

from django.contrib import admin
from models import COperLog


class COperLogAdmin(admin.ModelAdmin):
    show_bookmarks = False
    search_fields = ["oper", "ipaddr"]
    list_display = ["oper", "ipaddr", "createTime", "desc", ]
    list_filter = ["ipaddr"]


admin.site.register(COperLog, COperLogAdmin)

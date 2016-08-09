#!/usr/bin/python
# -*- coding=utf-8 -*-

from django.contrib import admin
from models import Para


class ParaAdmin(admin.ModelAdmin):
    list_display = ['key', 'val', 'file', 'explain']
    # list_filter = []  # 过滤字段
    # list_editable = []  # 列表编辑字段
    # readonly_fields = []  # 只读字段

    # 去掉删除
    # def has_change_permission(self, request, obj=None):
    # 去掉增加
    # def has_add_permission(self, request, obj=None):
    # 过滤编辑页面外键
    # def formfield_for_foreignkey(self, db_field, request=None, **kwargs):
    # 删除单条
    # def delete_model(self, request, obj):
    # 删除多条
    # def delete_models(self, request, queryset):
    # 保存
    # def save_model(self, request, obj, form, change):
    # 保存关联表
    # def save_related(self, request, form, formsets, change):
    # 列表过滤
    # def get_search_results(self, request, queryset, search_term):
    # 编辑页面显示字段
    # def get_fieldsets(self, request, obj=None):
    # 编辑页面自定义检查重载函数
    # def _create_formsets(self, request, obj, change):

admin.site.register(Para, ParaAdmin)



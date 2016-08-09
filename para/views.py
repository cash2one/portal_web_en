#!/usr/bin/python
# -*- coding=utf-8 -*-

from django.http import HttpResponse
from utils.request_auth import *
from utils.err_code import *
import json
import traceback
import logging

logger = logging.getLogger(__name__)

# 检查新版本
def new_ver(request):
    dictResp = auth_check(request, "GET")
    if dictResp != {}:
        return HttpResponse(json.dumps(dictResp, ensure_ascii=False), content_type="application/json")

    try:
        ver = request.GET["ver"]  # 版本号
        device = request.GET["device"]  # 设备("1":Android "2":Ios)

        dictResp = {"c": ERR_SUCCESS[0], "m": ERR_SUCCESS[1], "newVer": [], "url": []}
        return HttpResponse(json.dumps(dictResp, ensure_ascii=False), content_type="application/json")

    except:
        sErrInfo = traceback.format_exc()
        logger.error(sErrInfo)
        dictResp = {"c": -1, "m": sErrInfo}
        return HttpResponse(json.dumps(dictResp, ensure_ascii=False), content_type="application/json")


// 跳转时间
g_seekTime = 0;
// 最否跳转
g_bSeek = true;
// 上次下发时间
g_issueTime = 0;
// 定时下发周期时间
g_intervalTime = 0;
// 视频ID
g_videoId = -1;
// 是否播放视频
g_bPlay = true;
//播放时间
g_playTime = 0;
//上次时间，暂时记录
g_lastt = 0;
// 定时任务对象
g_oInterval = null;
//当前视频是否为第一次
g_first = true;
//是否拖动
g_bounceTime = false;

function loadedHandler() {

    addPlayListener();
    if (CKobject.getObjectById('ckplayer_a1').getType()) {
        CKobject.getObjectById('ckplayer_a1').addListener('time', timeHandler);
        CKobject.getObjectById('ckplayer_a1').addListener('pause', pauseHandler);
        CKobject.getObjectById('ckplayer_a1').addListener('ended', endedHandler);
    }
    else {
        CKobject.getObjectById('ckplayer_a1').addListener('time', 'timeHandler');
        CKobject.getObjectById('ckplayer_a1').addListener('pause', 'pauseHandler');
        CKobject.getObjectById('ckplayer_a1').addListener('ended', 'endedHandler');
    }
}

function addPlayListener() {
    if (CKobject.getObjectById('ckplayer_a1').getType()) {
        CKobject.getObjectById('ckplayer_a1').addListener('play', playHandler);
    }
    else {
        CKobject.getObjectById('ckplayer_a1').addListener('play', 'playHandler');
    }
}

function removePlayListener() {//删除播放监听事件
    if (CKobject.getObjectById('ckplayer_a1').getType()) {//说明使用html5播放器
        CKobject.getObjectById('ckplayer_a1').removeListener('play', playHandler);
        //CKobject.getObjectById('ckplayer_a1').removeListener('time', timeHandler);
        CKobject.getObjectById('ckplayer_a1').removeListener('ended', endedHandler);
    }
    else {
        CKobject.getObjectById('ckplayer_a1').removeListener('play', 'playHandler');
        //CKobject.getObjectById('ckplayer_a1').removeListener('time', 'timeHandler');
        CKobject.getObjectById('ckplayer_a1').removeListener('ended', 'endedHandler');
    }
}

function playHandler() {
    //跳转
    //if (g_bSeek == true && g_seekTime > 0) {
    //    CKobject.getObjectById('ckplayer_a1').videoSeek(g_seekTime);
    //    g_bSeek = false;
    //    g_lastt = g_seekTime;
    //}
    //removePlayListener();
    //console.log("playHandler");
    //isFirstVideo(g_videoId);
    if (g_oInterval != null) {
        clearInterval(g_oInterval);
    }
    g_playTime = 0;
    g_oInterval = setInterval("myInterval()", 10000);//1000为1秒钟
}
function pauseHandler() {
    g_playTime = 0;
    if (g_oInterval != null) {
        clearInterval(g_oInterval);
    }
    //console.log("pauseHandler");
}

function endedHandler() {
    // alert("学习完成！");
    learnTime(g_videoId, g_intervalTime, 0, 1);
}

function timeHandler(t) {
    return ;
    if (t > (g_intervalTime + g_issueTime)) {
        g_issueTime = t;
        learnTime(g_videoId, g_intervalTime, parseInt(t), 0);
    }
    g_playTime += (t - g_lastt);
    g_lastt = t;

    //oStatus = CKobject.getObjectById('ckplayer_a1').getStatus()
    //console.log(oStatus.play);
    //if (oStatus.play == true) {
    //    g_playTime += (t - g_lastt);
    //    g_lastt = t;
    //}
    //else {
    //    console.log("aaaaaaaaaaaa");
    //    g_lastt = t;
    //}
}

function changeVideo(videoId, videoUrl, seekTime, intervalTime, first) {
    autoPlay(videoId, videoUrl, seekTime, intervalTime, first);
}

function autoPlay(videoId, videoUrl, seekTime, intervalTime, first) {
    var flashvars = {
        //v:85,
        f: videoUrl,
        //f: 'http://movie.ks.js.cn/flv/other/2014/06/20-2.flv',
        c: 0,
        p: 1,
        //b:1,
        loaded: 'loadedHandler',
        my_url: encodeURIComponent(window.location.href)
    };

    //fys = first;
    g_issueTime = g_seekTime = seekTime;
    g_intervalTime = intervalTime;
    g_videoId = videoId;
    var video = [videoUrl + '->video/mp4'];
    //var params = {bgcolor:'#FFF',height:"460", width:"938", quality:"high",align:"middle",allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
    var params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'};
    CKobject.embed('/static/js/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', '100%', false, flashvars, video, params);
    //  var flashvars = {
    //  f: videoUrl,
    //  c: 0,
    //  p: 1,
    //  b: 0,
    //  i: '/static/images/letitgo.jpg',
    //  loaded: 'loadedHandler',
    //  my_url: encodeURIComponent(window.location.href)
    //};
    //var video = ['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
    //CKobject.embed('/static/js/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', '100%', false, flashvars, video);
}


function myInterval() {
    //console.log(g_playTime);
    if (g_playTime < 5 && g_playTime != 0) {
        CKobject.getObjectById('ckplayer_a1').marqueeLoad(true, '网速慢，视频正在缓冲中！');
    }
    else {
        CKobject.getObjectById('ckplayer_a1').marqueeClose();
    }
    g_playTime = 0;
}

function isFirstVideo(videoId) {
    var param = {'videoId': videoId};
    $.ajax({
        url: "/user/isFirstVideo/",
        type: "POST",
        data: param,
        success: function (data) {
            var jsonObject = data;
            if (jsonObject.c != 0) {
                if (jsonObject.e == '' || jsonObject.e == undefined || jsonObject.e == null) {

                } else {
                    //alert(data.e);
                }
            } else {
                if (jsonObject.first == '1') {
                    CKobject.getObjectById('ckplayer_a1').changeStyle('setup', '1,0,0,1,1,2,0,1,1,0,0,0,200,0,2,1,0,1,0,1,2,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,0,1,250,0,90,0,0,0');
                }
                else {
                    CKobject.getObjectById('ckplayer_a1').changeStyle('setup', '1,0,0,1,1,2,0,1,1,0,0,0,200,0,2,1,0,1,0,1,2,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,0,1,250,0,90,0,0,0');
                }
            }
        },
        error: function (e) {
        }
    });
}

function learnTime(videoId, second, curTime, end) {
    var curTime = arrive_timer_format(curTime);
    if (curTime.split(':')[0].length <= 1) {
        curTime = "0" + curTime;
    }
    var param = {'videoId': videoId, 'second': second, 'curTime': curTime, 'end': end};
    $.ajax({
        url: "/user/learnTime/",
        type: "POST",
        data: param,
        success: function (data) {
           var jsonObject = data;
            if (jsonObject.c != 0) {
                if (jsonObject.e == '' || jsonObject.e == undefined || jsonObject.e == null) {

                } else {
                    if(data.c==8){
                       window.location.href="/tologin/";
                    }
                    else{
                       alert(data.e);
                    }
                }
            } else {

                if (typeof(jsonObject.singleList) != 'undefined' && jsonObject.singleList != null && jsonObject.singleList.length > 0) {
                    g_bPlay = false;
                    addPoup(jsonObject.singleList, jsonObject.interval);
                }
            }
        },
        error: function (e) {
            //alert(e);
            //  alert('系统错误，请稍后重试!');
            //$("#errorMsg").html('系统错误，请稍后重试!').show();
        }
    });

}

function arrive_timer_format(s) {
    var t;
    if (s > -1) {
        hour = Math.floor(s / 3600);
        min = Math.floor(s / 60) % 60;
        sec = s % 60;
        day = parseInt(hour / 24);
        if (day > 0) {
            hour = hour - 24 * day;
            t = day + "day " + hour + ":";
        }
        else t = hour + ":";
        if (min < 10) {
            t += "0";
        }
        t += min + ":";
        if (sec < 10) {
            t += "0";
        }
        t += sec;
    }
    return t;
}


function checkPay(interval) {
    var singleArray = [];
    $("#question-list_1").find(".wrong-tip").each(function (i) {
        // alert($.trim($(this).text()));
        if ($.trim($(this).text()) == '√') {
            var arr = {"stateText": '√'};
            singleArray.push(arr);
        }
    })

    var count = parseInt($("#startT").text());
    var maxT = parseInt($("#maxT").text());

    if (count == maxT) {
        // alert(JSON.stringify(singleArray));
        if (singleArray.length > 0) {
            //alert('jin');
            CKobject.getObjectById('ckplayer_a1').playOrPause();
        }
        else {
            // alert('xccc--ddd');
            var nowTime = parseInt($("#nowTime").text()) + 1;
            //  alert("当前:=---"+nowTime);

            //  alert("减去:=="+interval);

            CKobject.getObjectById('ckplayer_a1').videoSeek(interval);
        }
        layer.close(rewardObj);
        $("#startT").text(0);
        $("#maxT").text(0)
    }
    // CKobject.getObjectById('ckplayer_a1').videoSeek(88);
    // CKobject.getObjectById('ckplayer_a1').promptLoad();//重新加载
}

//type=1,对应单选和判断提  type=2对应多选题目
var strTempSource = "";//type=2时 多选题 累加选项
function isRight(objText, objSource, objContent, lid, type, interval){
    var msg = "√";
    var tiMsg = "正确答案是";
    if (type == 1) {
        if ($("." + lid).attr('dd') == 'false') {
            $("#startT").text(parseInt($("#startT").text()) + 1);
            $("." + lid).attr('dd', 'true');
            //  alert($("#startT").text());
        }
        if (objText == 1) {
            tiMsg += "A";
        }
        else if (objText == 2) {
            tiMsg += "B";
        }
        else if (objText == 3) {
            tiMsg += "C";
        }
        else if (objText == 4) {
            tiMsg += "D";
        }
    }
    else {

    }
    if (objText == objSource) {
        strTempSource = "";
        msg = "√";
        tiMsg = '';
    }
    else {
        msg = "×";
    }
    $("#" + objContent).find('strong').eq(0).text(msg);
    checkPay(interval);
    // $("#"+objContent).find('span').eq(0).text(tiMsg);
    selectChange();
}


//关闭窗口继续播放
function nextPay() {
    var questionLength = $("#question-list_1 li").length;
    questionLength = questionLength - 1
    var singLeng = 0;
    $("#question-list_1").find(".wrong-tip").each(function (i) {
        if ($.trim($(this).text()) != '') {
            singLeng = singLeng + 1;
        }
    })
    if (questionLength == singLeng) {
        layer.close(rewardObj);
        CKobject.getObjectById('ckplayer_a1').playOrPause();
        questionLength = [];
        sstate = 0;
    }
    else {
        showMsg('练习题目未做完!');
        return false;
    }
}


function isRight(objText, objSource, objContent, lid, type, interval) {

    var msg = "√";
    var tiMsg = "正确答案是";
    if (type == 1) {
        if ($("." + lid).attr('dd') == 'false') {
            $("#startT").text(parseInt($("#startT").text()) + 1);
            $("." + lid).attr('dd', 'true');
            //  alert($("#startT").text());
        }
        if (objText == 1) {
            tiMsg += "A";
        }
        else if (objText == 2) {
            tiMsg += "B";
        }
        else if (objText == 3) {
            tiMsg += "C";
        }
        else if (objText == 4) {
            tiMsg += "D";
        }
    }
    else {

    }
    if (objText == objSource) {
        strTempSource = "";
        msg = "√";
        tiMsg = '';
    }
    else {
        msg = "×";
    }
    $("#" + objContent).find('strong').eq(0).text(msg);
    checkPay(interval);
    // $("#"+objContent).find('span').eq(0).text(tiMsg);
    selectChange();
}

function addPoup(singleList, interval) {
    // alert("singleList----:"+JSON.stringify(singleList));
    $("#maxT").text(singleList.length);
    if (singleList.length > 0) {
        //alert('1111');
        var str = "";
        for (var i = 0; i < singleList.length; i++) {
            var singObj = singleList[i];
            str += "<li class='" + singObj.id + "_1' dd='false'  dt='" + singObj.right + "'>";
            str += "<p class='question-title' id='question_1_" + (i + 1) + "'>" + (i + 1) + "、" + singObj.title + "：</p>";
            str += "<div class='question-option'>";
            for (var j = 0; j < singObj.optionList.length; j++) {
                var context = singObj.optionList[j];
                str += "<div class='question-option-one' dd='" + singObj.right + "'>";
                if ((j + 1) == 1) {
                    str += "<div class='question-option-A question-option-icon'>";
                    str += "<input type='radio' onclick=isRight('" + singObj.right + "','A','con_1_" + singObj.id + "','" + singObj.id + "_1',1," + interval + ") name='question_" + singObj.id + "' value='A' class='item'>";
                    str += "</div>";
                }
                else if ((j + 1) == 2) {
                    str += "<div class='question-option-B question-option-icon'>";
                    str += "<input type='radio' onclick=isRight('" + singObj.right + "','B','con_1_" + singObj.id + "','" + singObj.id + "_1',1," + interval + ")  name='question_" + singObj.id + "' value='B' class='item'>";
                    str += "</div>";
                }

                else if ((j + 1) == 3) {
                    str += "<div class='question-option-C question-option-icon'>";
                    str += "<input type='radio' onclick=isRight('" + singObj.right + "','C','con_1_" + singObj.id + "','" + singObj.id + "_1',1," + interval + ")  name='question_" + singObj.id + "' value='C' class='item'>";
                    str += "</div>";
                }
                else if ((j + 1) == 4) {
                    str += "<div class='question-option-D question-option-icon'>";
                    str += "<input type='radio' onclick=isRight('" + singObj.right + "','D','con_1_" + singObj.id + "','" + singObj.id + "_1',1," + interval + ")  name='question_" + singObj.id + "' value='D' class='item'>";
                    str += "</div>";
                }
                str += "<p>" + context + "</p>";
                str += "</div>";
            }

            str += "</div>";
            str += "<p class='question-answer' id='con_1_" + singObj.id + "'><strong class='wrong-tip' style='font-size:20px'></strong><span class='correct-answer' ></span></p>";
            str += "</li>";
        }
    }
    str += "<li><input type='button' class='quiz-sub'  onclick='nextPay()' value='提交'/></li>";
    $("#question-list_1").html(str);
    $(".question-option").find(":radio").on("click", function () {
        $(this).parent().find(":radio").prop("checked", false);
        $(this).prop("checked", true);
        selectChange();
        g_bPlay = true;
    });

    showDig();
}

function showDig() {
    CKobject.getObjectById('ckplayer_a1').playOrPause();
//页面层
    rewardObj = layer.open({
        title: '在线学习平台',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['800px', '600px'], //宽高
        move: ['.xubox_title', true],
        border: 0, //去掉默认边框
        shade: 0,
        closeBtn: 0,
        left: '100px',
        offset: ['23%', '24.5%'],
        content: $("#blk1")
    });
}
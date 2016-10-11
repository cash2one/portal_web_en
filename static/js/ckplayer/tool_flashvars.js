// JavaScript Document
$(document).ready(function($) {
	layer.close(layerdiv);
	Calculation();
	layerTip();
});
var tips=null;
function getF(s){
	return $('#flashvars_'+s).val();
}
function sendF(s,v){
	$('#flashvars_'+s).val(v);
}
function closeTip(){
	if(tips!=null){
		layer.close(tips);
		tips=null;
	}
}
function showTip(d,t){
	if(tips!=null){
		layer.close(tips);
		tips=null;
	}
	tips=layer.tips(t, d , {guide: 0});
}
function layerTip(){
	$('#flashvars_s').change(
		function(){
			sendF('f','');
			var z=parseInt(getF('s'));
			if(z>0){
				$('.t_li_1').show();
				$('.t_li_2').show();
				if(z<3){
					sendF('f','url.php?id=[$pat]');
					sendF('a','88');
					t_sm_1_fun();
				}
				else if(z=3){
					sendF('f','geturl.swf');
					sendF('a','88');
					t_sm_1_fun();
				}
				else{
					sendF('f','m3u8.swf');
					sendF('a','http://www.ckplayer.com/video/88.m3u8');
					t_sm_1_fun();
				}
			}
			else{
				$('.t_li_1').hide();
				$('.t_li_2').hide();
				sendF('f','http://movie.ks.js.cn/flv/other/1_0.flv');
				sendF('a','');
			}
			Calculation();
		}
	);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_f').on(
		'mouseover',
		function(){
			var z=parseInt(getF('s'));
			var t='只需要输入一个普通的视频地址即可，支持http协议地址和rtmp协议地址';
			switch(z){
				case 1:
					t='输入一个可以成功输出视频地址的的网址，其中动态变量可以用[$pat],[$pat1],[$pat2]...来代替';
					break;
				case 2:
					t='输入一个可以成功输出视频地址的的(xml结构化的)网址，其中动态变量可以用[$pat],[$pat1],[$pat2]...来代替';
					break;
				case 3:
				case 4:
					t='输入插件地址,应该是swf格式的，并不是分享其它网站的swf文件';
					break;
				default:
					break;
			}
			showTip(this,t);
		}
	);
	$('#flashvars_f').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_f').change(t_sm_1_fun);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_a').on(
		'mouseover',
		function(){
			var z=parseInt(getF('s'));
			var t='';
			switch(z){
				case 1:
				case 2:
					t='可以输入一个变量或字符和f值拼接成一个完整的地址，多个变量可以用"|"隔开';
					break;
				case 3:
				case 4:
					t='输入视频地址或其它参数，也可以不填写';
					break;
				default:
					break;
			}
			showTip(this,t);
		}
	);
	$('#flashvars_a').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_a').change(t_sm_1_fun);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_html5').on(
		'mouseover',
		function(){
			var t='选择是否需要兼容手机,IOS端播放';
			showTip(this,t);
		}
	);
	$('#flashvars_html5').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_html5').change(html5Change);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_html5arr').on(
		'mouseover',
		function(){
			var t='视频地址数组，如：\'1.mp4->video/mp4\',\'1.webm->video/webm\'';
			showTip(this,t);
		}
	);
	$('#flashvars_html5arr').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_html5arr').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_html5z').on(
		'mouseover',
		function(){
			var t='选择是否需要兼容手机,IOS端播放';
			showTip(this,t);
		}
	);
	$('#flashvars_html5z').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_html5z').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_p').change(flashvars_pChange);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_i').on(
		'mouseover',
		function(){
			var t='当视频默认暂停或不加载时，可以设置一张图片地址供默认加载，让视频初始化时有个效果';
			showTip(this,t);
		}
	);
	$('#flashvars_i').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_i').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_o').on(
		'mouseover',
		function(){
			var t='这里可以设置给视频一个总时间，也可以留空';
			showTip(this,t);
		}
	);
	$('#flashvars_o').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_o').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_w').on(
		'mouseover',
		function(){
			var t='这里可以设置给视频一个总字节，也可以留空';
			showTip(this,t);
		}
	);
	$('#flashvars_w').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_w').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_v').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_wh').on(
		'mouseover',
		function(){
			var z=parseInt(getF('s'));
			var t='默认留空，可以设置比如：“16:9”,"100:100"';
			showTip(this,t);
		}
	);
	$('#flashvars_wh').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_wh').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_e').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_h').change(flashvars_hChange);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_q').on(
		'mouseover',
		function(){
			var t='这里是设置视频拖动时需要传递给服务器的参数，默认start，例如请求地址可能是：1.flv?start=36，即表示可以直接从36秒处播放';
			showTip(this,t);
		}
	);
	$('#flashvars_q').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_q').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_g').on(
		'mouseover',
		function(){
			var t='跳过片头功能，可以设置成秒数，比如：50，也可以设置成时:分:秒的形式如\'01:02:30\'或\'02:30\'';
			showTip(this,t);
		}
	);
	$('#flashvars_g').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_g').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_j').on(
		'mouseover',
		function(){
			var t='跳过片尾功能，如果是正数，比如：500，则视频播放到500秒时，跳转到结尾，如果是负数，比如：-500，则播放到（视频总时间-500）时跳到结尾，这里并不是真正的跳到结尾，而是必需在播放结束设置成触发JS的效果时才有效。主要是做自动下一集的功能的。';
			showTip(this,t);
		}
	);
	$('#flashvars_j').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_j').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_k').on(
		'mouseover',
		function(){
			var t='提示点时间列表，即把所有需要提示的时间点列出来，如：30|60|160|320|450';
			showTip(this,t);
		}
	);
	$('#flashvars_k').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_k').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_n').on(
		'mouseover',
		function(){
			var t='提示点文字列表，即把所有需要提示的文字列出来，需要跟上面的提示点时间列表一一对应，如：30秒提示内容|60秒提示内容|160秒提示内容|320秒提示内容|450秒提示内容';
			showTip(this,t);
		}
	);
	$('#flashvars_n').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_n').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_lv').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_st').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_fc').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_un').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_up').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_link').change(linkChange);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_m').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_qadvf').change(qadvfChange);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_y').on(
		'mouseover',
		function(){
			var t='用一个网址去单独控制广告内容，这个网址可以接受a值传过来的变量，比如adv.php?id=[$pat]，a值=1则从adv.php?id=1的网址获取前置广告内容，该网址应该是输出{l->1.swf}{r->1.php}{t->10}这样的';
			showTip(this,t);
		}
	);
	$('#flashvars_y').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_y').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_l').on(
		'mouseover',
		function(){
			var t='前置广告地址，支持swf，视频，图片，多个用“|”隔开';
			showTip(this,t);
		}
	);
	$('#flashvars_l').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_l').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_r').on(
		'mouseover',
		function(){
			var t='前置广告的链接地址，可以有多个，用“|”隔开';
			showTip(this,t);
		}
	);
	$('#flashvars_r').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_r').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_t').on(
		'mouseover',
		function(){
			var t='前置广告的时间，可以有多个，用“|”隔开';
			showTip(this,t);
		}
	);
	$('#flashvars_t').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_t').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_d').on(
		'mouseover',
		function(){
			var t='暂停广告的地址，可以有多个，多个用“|”隔开，可随机播放';
			showTip(this,t);
		}
	);
	$('#flashvars_d').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_d').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_u').on(
		'mouseover',
		function(){
			var t='暂停广告的链接地址，多个用"|"隔开';
			showTip(this,t);
		}
	);
	$('#flashvars_u').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_u').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_z').on(
		'mouseover',
		function(){
			var t='缓冲广告，只能是一个，swf格式的';
			showTip(this,t);
		}
	);
	$('#flashvars_z').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_z').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_c').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_x').on(
		'mouseover',
		function(){
			var t='';
			var z=$('#flashvars_c').val();
			if(z==1){
				t='自定义风格配置文件，默认是ckplayer.xml，要改成您定义的文件名称';
			}
			else{
				t='自定义风格配置函数，默认是的ckplayer.js中的ckstyle()，修改后需要对应的改变ckplayer.js中的ckstyle()函数名称';
			}
			showTip(this,t);
		}
	);
	$('#flashvars_x').on('mouseout',function(){
		closeTip();
	});
	$('#flashvars_x').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_share').change(shareChange);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_my_title').change(Calculation);
	$('#flashvars_my_url').change(Calculation);
	$('#flashvars_my_pic').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	$('#flashvars_load').change(Calculation);
	/*-------------------------------------------------------------------------------------*/
	
}
/*=======================*/
function shareChange(){
	var isH=getF('share');
	if(isH==1){
		$('.t_li_11').show();
	}
	else{
		$('.t_li_11').hide();
	}
	Calculation();
}
/*=======================*/
function qadvfChange(){
	var isH=getF('qadvf');
	if(isH==1){
		$('.t_li_9').show();
		$('.t_li_8').hide();
	}
	else{
		$('.t_li_9').hide();
		$('.t_li_8').show();
	}
	Calculation();
}
/*=======================*/
function linkChange(){
	var isH=getF('link');
	if(isH==1){
		$('.t_li_6').show();
		$('.t_li_7').hide();
		$('.t_li_8').hide();
		$('.t_li_10').hide();
	}
	else{
		$('.t_li_6').hide();
		$('.t_li_7').show();
		$('.t_li_8').show();
		$('.t_li_10').show();
	}
	Calculation();
}
/*=======================*/
function flashvars_hChange(){
	var isH=getF('h');
	if(isH==0){
		$('.t_li_5').hide();
	}
	else{
		$('.t_li_5').show();
	}
	Calculation();
}
/*=======================*/
function flashvars_pChange(){
	var isP=getF('p');
	if(isP<2){
		$('.t_li_4').hide();
	}
	else{
		$('.t_li_4').show();
	}
	if(isP==1){
		$('.t_li_12').hide();
	}
	else{
		$('.t_li_12').show();
	}
	Calculation();
}
/*=======================*/
function html5Change(){
	var isHtml5=getF('html5');
	if(isHtml5==0){
		$('.t_li_3').hide();
	}
	else{
		$('.t_li_3').show();
		sendF('html5arr','\'http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4\'');
	}
	Calculation();
}
/*=======================*/
function t_sm_1_fun(){
	var z=parseInt(getF('s'));
	var f=getF('f');
	var a=getF('a');
	var t='';
	var str=f;
	if(z<3 && a && f){
		var arr=a.split('|');
		var i=0;
		str=str.split('[$pat]').join(arr[0]);
		for(i=0;i<arr.length;i++){
			str=str.split('[$pat'+i+']').join(arr[i]);
		}
	}
	switch(z){
		case 1:
			t='播放器会调用页面地址：“'+str+'”以获得需要播放的视频列表，详细的说明可以看<a href="/tool/#p_3_7_31" target="_blank">用网址形式调用视频地址-可以隐藏视频地址</a>';
			break;
		case 2:
			t='播放器会调用页面地址：“'+str+'”以获得需要播放的视频列表，详细的说明可以看<a href="/tool/#p_3_7_32" target="_blank">用xml（地址）形式调用视频</a>';
			break;
		case 3:
			t='播放器会加载"'+f+'"，该插件可以根据你的需求进行读取视频地址的操作发送给播放器播放，详细的说明可以看<a href="/tool/#p_3_7_33" target="_blank">使用swf向播放器传递视频地址进行播放-可以隐藏视频地址</a>';
			break;
		case 4:
			t='播放器会加载"'+f+'"，该插件可以根据你的需求读取视频地址并且收集要播放的流发送给播放器播放，详细的说明可以看<a href="/tool/#p_3_7_34" target="_blank">使用swf形式向播放器发送一个视频流进行播放</a>，也可以参考论坛里提供的m3u8播放插件的源码进行制作，<a href="/bbs/forum.php?mod=viewthread&tid=8947" target="_balnk">点击查看下载插件</a>';
			break;
		default:
			break;
	}
	$('.t_li_2').html(t);
	Calculation();
}
/*=================================================================*/

function Calculation(){
	var tab='&nbsp;&nbsp;&nbsp;&nbsp;';
	var i=0,y=0;
	var F={};
	var k='';
	var html='<pre class="pred">';
	html+='&lt;div id=&quot;a1&quot;&gt;&lt;/div&gt;<br />';
  	html+='&lt;script type=&quot;text/javascript&quot; src=&quot;/ckplayer/ckplayer.js&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;<br />';
	html+='&lt;script type=&quot;text/javascript&quot;&gt;<br />';
	if(getF('load')==1){
		html+=tab+'function loadedHandler(){<br />';
		html+=tab+'&nbsp;&nbsp;&nbsp;&nbsp;alert(\'加载已完成\')<br />';
		html+=tab+'}<br />';
	}
	html+=tab+'var flashvars={<br />';
	//写入flashvars
	F['f']=getF('f');
	var _s=getF('s');
	if(_s>0){
		F['a']=getF('a');
		F['s']=_s;
	}
	if(getF('c')==0){
		F['c']=0;
	}
	if(getF('x')!=''){
		F['x']=getF('x');
	}
	if(getF('p')>0){
		F['p']=getF('p');
	}
	if(getF('p')!=1){
		if(getF('i')!=''){
			F['i']=getF('i');
		}
	}
	if(getF('p')==2){
		if(getF('o')){
			F['o']=getF('o');
		}
		if(getF('w')){
			F['w']=getF('w');
		}
	}
	if(getF('v')!=80){
		F['v']=getF('v');
	}
	if(getF('wh')){
		F['wh']=getF('wh');
	}
	if(getF('e')!=2){
		F['e']=getF('e');
	}
	if(getF('h')>0){
		F['h']=getF('h');
		if(getF('q') && getF('q')!='start'){
			F['q']=getF('q');
		}
		if(getF('g')){
			F['g']=getF('g');
		}
	}
	if(getF('k')){
		F['k']=getF('k');
	}
	if(getF('n')){
		F['n']=getF('n');
	}
	if(getF('lv')==1){
		F['lv']=getF('lv');
	}
	if(getF('st')==1){
		F['st']=getF('st');
	}
	if(getF('fc')==1){
		F['fc']=getF('fc');
	}
	if(getF('un')==1){
		F['un']=getF('un');
	}
	if(getF('up')==1){
		F['up']=getF('up');
	}
	if(getF('link')==1){
		if(getF('m')!=''){
			F['m']=getF('m');
		}
	}
	else{
		if(getF('qadvf')==1 && getF('y')!=''){
			F['y']=getF('y');
		}
		else{
			if(getF('l')!=''){
				F['l']=getF('l');
			}
			if(getF('r')!=''){
				F['r']=getF('r');
			}
			if(getF('t')!=''){
				F['t']=getF('t');
			}
		}
		if(getF('d')!=''){
			F['d']=getF('d');
		}
		if(getF('u')!=''){
			F['u']=getF('u');
		}
		if(getF('z')!=''){
			F['z']=getF('z');
		}
	}
	if(getF('share')==1){
		if(getF('my_url')!=''){
			F['my_url']=getF('my_url');
		}
		if(getF('my_title')!=''){
			F['my_title']=getF('my_title');
		}
		if(getF('my_pic')!=''){
			F['my_pic']=getF('my_pic');
		}
	}
	if(getF('load')==1){
		F['loaded']='loadedHandler';
		F['b']=0;
	}
	//写入
	for(k in F){
		i++;
	}
	for(k in F){
		var z=!isNaN(F[k]) || (k=='my_url' && F[k]=='encodeURIComponent(window.location.href)') || (k=='my_title' && F[k]=='encodeURIComponent(document.title)')?F[k]:'\''+F[k]+'\'';
		y++;
		var d=y<i?',':'';
		html+=tab+tab+k+':'+z+d+'<br />';
	}
	//写入完成flashvars
	html+=tab+'};<br />';
	html+=tab+'var params={bgcolor:\'#FFF\',allowFullScreen:true,allowScriptAccess:\'always\',wmode:\'transparent\'};<br />';
	//判断是否需要使用html5
	var isHtml5=getF('html5');
	if(isHtml5==0){
		html+=tab+'CKobject.embedSWF(\'/ckplayer/ckplayer.swf\',\'a1\',\'ckplayer_a1\',\'100%\',\'100%\',flashvars,params);<br />';
	}
	else{
		var html5z=getF('html5z')==1?'true':'false';
		html+=tab+'var video=['+getF('html5arr')+'];<br />';
		html+=tab+'CKobject.embed(\'/ckplayer/ckplayer.swf\',\'a1\',\'ckplayer_a1\',\'100%\',\'100%\','+html5z+',flashvars,video,params);<br />';
	}
	html+='&lt;/script&gt;';
	html+='</pre>';
	$('.t_cord').html(html);
	$('.pred').laycode({
		title: 'HTML',
		skin: 2, 
    	by: false 
	});
}
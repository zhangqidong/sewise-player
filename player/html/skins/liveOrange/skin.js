/*
 * Name: LiveWhite SewisePlayerSkin framework V1.0.0
 * Author: Jack Zhang
 * Website: http://www.sewise.com/
 * Date: 24th March 2014
 * Copyright: 2014, Sewise
 * 
 */


(function(a){a.SewisePlayerSkin={version:"1.0.0"};a.SewisePlayer=a.SewisePlayer||{}})(window);(function(a){a.SewisePlayer.ILivePlayer=a.SewisePlayer.ILivePlayer||{live:function(){},play:function(){},pause:function(){},stop:function(){},seek:function(){},changeClarity:function(){},setVolume:function(){},toPlay:function(){},duration:function(){},liveTime:function(){},playTime:function(){},type:function(){},showTextTip:function(){},hideTextTip:function(){},muted:function(){}}})(window);(function(a){a.SewisePlayerSkin.ILiveSkin=a.SewisePlayerSkin.ILiveSkin||{player:function(){},started:function(){},paused:function(){},stopped:function(){},seeking:function(){},buffering:function(){},bufferProgress:function(){},loadedProgress:function(){},programTitle:function(){},duration:function(){},playTime:function(){},startTime:function(){},loadSpeed:function(){},initialClarity:function(){},lang:function(){},logo:function(){},clarityButton:function(){},timeDisplay:function(){},controlBarDisplay:function(){},
topBarDisplay:function(){},timeUpdate:function(){}}})(window);(function(){SewisePlayerSkin.Utils={stringer:{secondsToHMS:function(a){if(!(0>a)){var b=this.time2FigFill(Math.floor(a/3600)),i=this.time2FigFill(a/60%60),a=this.time2FigFill(a%60);return b+":"+i+":"+a}},secondsToMS:function(a){if(!(0>a)){var b=this.time2FigFill(a/60),a=this.time2FigFill(a%60);return b+":"+a}},time2FigFill:function(a){var b,a=Math.floor(a);10>a?b="0"+a:b=""+a;return b},dateToTimeString:function(){var a=new Date,b=a.getFullYear(),i=a.getMonth()+1,f=a.getDate(),k=this.time2FigFill(a.getHours()),
c=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+"-"+i+"-"+f+" "+k+":"+c+":"+a}}}})();(function(a){SewisePlayerSkin.ElementObject=function(){this.$sewisePlayerUi=a(".sewise-player-ui");this.$container=this.$sewisePlayerUi.parent();this.$video=this.$container.find("video").get(0);this.$controlbar=this.$sewisePlayerUi.find(".controlbar");this.$playBtn=this.$sewisePlayerUi.find(".controlbar-btns-play");this.$pauseBtn=this.$sewisePlayerUi.find(".controlbar-btns-pause");this.$stopBtn=this.$sewisePlayerUi.find(".controlbar-btns-stop");this.$fullscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
this.$normalscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");this.$soundopenBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundopen");this.$soundcloseBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundclose");this.$shareBtn=this.$sewisePlayerUi.find(".controlbar-btns-share");this.$playtime=this.$sewisePlayerUi.find(".controlbar-playtime");this.$controlBarProgress=this.$sewisePlayerUi.find(".controlbar-progress");this.$progressPlayedLine=this.$sewisePlayerUi.find(".controlbar-progress-playedline");
this.$progressPlayedPoint=this.$sewisePlayerUi.find(".controlbar-progress-playpoint");this.$progressLoadedLine=this.$sewisePlayerUi.find(".controlbar-progress-loadedline");this.$progressSeekLine=this.$sewisePlayerUi.find(".controlbar-progress-seekline");this.$logo=this.$sewisePlayerUi.find(".logo");this.$logoIcon=this.$sewisePlayerUi.find(".logo-icon");this.$topbar=this.$sewisePlayerUi.find(".topbar");this.$programTitle=this.$sewisePlayerUi.find(".topbar-program-title");this.$topbarClock=this.$sewisePlayerUi.find(".topbar-clock");
this.$buffer=this.$sewisePlayerUi.find(".buffer");this.$bigPlayBtn=this.$sewisePlayerUi.find(".big-play-btn");this.defStageWidth=this.$container.width();this.defStageHeight=this.$container.height()}})(window.jQuery);(function(a){SewisePlayerSkin.ElementLayout=function(b){function i(){null!=document.fullscreenElement||null!=document.msFullscreenElement||null!=document.mozFullScreenElement||null!=document.webkitFullscreenElement?o.fullScreen():o.normalScreen()}var f=b.$container,k=b.$controlBarProgress,c=b.$playtime,o=this,g=b.defStageWidth,p=b.defStageHeight,d=parseInt(g)-288;0>d&&(d+=c.width(),c.hide());k.css("width",d);document.addEventListener("fullscreenchange",i);document.addEventListener("MSFullscreenChange",
i);document.addEventListener("mozfullscreenchange",i);document.addEventListener("webkitfullscreenchange",i);this.fullScreen=function(b){if("not-support"==b){var b=a(window).width(),d=a(window).height();f.css("width",b);f.css("height",d)}else f.css("width","100%"),f.css("height","100%");b=parseInt(f.width())-288;0>b?(b+=c.width(),c.hide()):c.show();k.css("width",b)};this.normalScreen=function(){f.css("width",g);f.css("height",p);d=parseInt(g)-288;0>d?(d+=c.width(),c.hide()):c.show();k.css("width",
d)}}})(window.jQuery);(function(){SewisePlayerSkin.LogoBox=function(a){var b=a.$logoIcon;this.setLogo=function(a){b.css("background","url("+a+") 0px 0px no-repeat");b.attr("href","http://www.sewise.com/")}}})(window.jQuery);(function(){SewisePlayerSkin.TopBar=function(a){var b=a.$topbar,i=a.$programTitle,f=a.$topbarClock;setInterval(function(){var a=SewisePlayerSkin.Utils.stringer.dateToTimeString();f.text(a)},1E3);this.setTitle=function(a){i.text(a)};this.show=function(){b.css("visibility","visible")};this.hide=function(){b.css("visibility","hidden")}}})(window.jQuery);(function(a){SewisePlayerSkin.ControlBar=function(b,i,f){function k(a){a=h+(a.pageX-q);0<a&&a<m&&(n.css("width",a),j.css("left",a-t/2))}function c(b){p.unbind("mousemove",k);a(document).unbind("mouseup",c);x=b.pageX;q!=x&&(h=n.width(),r=h/m,l.seek(r*s));u=!1}function o(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=h+(e.targetTouches[0].pageX-q),0<a&&a<m&&(n.css("width",a),j.css("left",a-t/2)))}function g(a){e=a.originalEvent;j.unbind("touchmove",o);j.unbind("touchend",g);if(1==
e.changedTouches.length)x=e.changedTouches[0].pageX,q!=x&&(h=n.width(),r=h/m,l.seek(r*s));u=!1}var p=b.$container,d=b.$video,B=b.$controlbar,C=b.$playBtn,y=b.$pauseBtn,J=b.$stopBtn,z=b.$fullscreenBtn,v=b.$normalscreenBtn,D=b.$soundopenBtn,A=b.$soundcloseBtn,K=b.$playtime,n=b.$progressPlayedLine,j=b.$progressPlayedPoint,L=b.$progressLoadedLine,w=b.$progressSeekLine,M=b.$buffer,E=b.$bigPlayBtn,l,s=0.1,F=0,H="00:00:00",I="00:00:00",t=0,u=!1,q=0,x=0,h=0,m=0,r=0,G=!0,t=j.width(),m=w.width();y.hide();v.hide();
A.hide();M.hide();B.click(function(a){a.originalEvent.stopPropagation()});p.click(function(){G?(B.css("visibility","hidden"),f.hide(),G=!1):(B.css("visibility","visible"),f.show(),G=!0)});C.click(function(){l.play()});y.click(function(){l.pause()});J.click(function(){l.stop()});E.click(function(a){a.originalEvent.stopPropagation();l.play()});z.click(function(){z.hide();v.show();var a=p.get(0);a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?
a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():d.webkitEnterFullscreen?(d.play(),d.webkitEnterFullscreen(),z.show(),v.hide()):i.fullScreen("not-support")});v.click(function(){z.show();v.hide();document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():i.normalScreen()});D.click(function(){l.muted(!0);
D.hide();A.show()});A.click(function(){l.muted(!1);D.show();A.hide()});w.mousedown(function(a){h=a.pageX-a.target.getBoundingClientRect().left;m=w.width();n.css("width",h);j.css("left",h-t/2);r=h/m;l.seek(r*s)});j.mousedown(function(b){this.blur();u=!0;q=b.pageX;h=n.width();m=w.width();p.bind("mousemove",k);a(document).bind("mouseup",c)});j.bind("touchstart",function(a){e=a.originalEvent;j.blur();a=e.targetTouches[0];u=!0;q=a.pageX;h=n.width();m=w.width();j.bind("touchmove",o);j.bind("touchend",g)});
this.setPlayer=function(a){l=a};this.started=function(){C.hide();y.show();E.hide()};this.paused=function(){C.show();y.hide();E.show()};this.setDuration=function(a){s=a;I=SewisePlayerSkin.Utils.stringer.secondsToHMS(s)};this.timeUpdate=function(a){F=a;H=SewisePlayerSkin.Utils.stringer.secondsToHMS(F);K.text(H+"/"+I);u||(h=100*(F/s)+"%",n.css("width",h),a=n.width()-t/2,j.css("left",a))};this.loadProgress=function(a){L.css("width",100*a+"%")}}})(window.jQuery);(function(a,b){b(document).ready(function(){var a=SewisePlayer.ILivePlayer,b=new SewisePlayerSkin.ElementObject,k=new SewisePlayerSkin.ElementLayout(b),c=new SewisePlayerSkin.LogoBox(b),o=new SewisePlayerSkin.TopBar(b),g=new SewisePlayerSkin.ControlBar(b,k,o);SewisePlayerSkin.ILiveSkin.player=function(b){a=b;g.setPlayer(a)};SewisePlayerSkin.ILiveSkin.started=function(){g.started()};SewisePlayerSkin.ILiveSkin.paused=function(){g.paused()};SewisePlayerSkin.ILiveSkin.stopped=function(){g.stopped()};
SewisePlayerSkin.ILiveSkin.duration=function(a){g.setDuration(a)};SewisePlayerSkin.ILiveSkin.timeUpdate=function(a){g.timeUpdate(a)};SewisePlayerSkin.ILiveSkin.loadedProgress=function(a){g.loadProgress(a)};SewisePlayerSkin.ILiveSkin.programTitle=function(a){o.setTitle(a)};SewisePlayerSkin.ILiveSkin.logo=function(a){c.setLogo(a)};try{SewisePlayer.CommandDispatcher.dispatchEvent({type:SewisePlayer.Events.PLAYER_SKIN_LOADED,playerSkin:SewisePlayerSkin.ILiveSkin})}catch(p){console.log("No Main Palyer")}})})(window,
window.jQuery);

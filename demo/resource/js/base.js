/**
 * Created by liubing on 2017/8/12.
 */

// ��̬����css�ļ�
function loadStyles(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

// ��̬����js�ű��ļ�
function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

// ����
loadStyles("../resource/css/index.css");
loadScript("https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js");
loadScript("../resource/js/vue/vue.js");
//loadScript("../resource/js/vue-resource/vue-resource.js");
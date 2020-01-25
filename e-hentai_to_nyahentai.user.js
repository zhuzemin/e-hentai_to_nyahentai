// ==UserScript==
// @name        e-hentai to nyahentai
// @namespace   e-hentai_to_nyahentai
// @supportURL  https://github.com/zhuzemin
// @description A button in e-hentai, for search Gallery in nyahentai
// @include     https://exhentai.org/g/*/*
// @include     https://e-hentai.org/g/*/*
// @version     1.0
// @run-at      document-start
// @author      zhuzemin
// @license     Mozilla Public License 2.0; http://www.mozilla.org/MPL/2.0/
// @license     CC Attribution-ShareAlike 4.0 International; http://creativecommons.org/licenses/by-sa/4.0/
// ==/UserScript==
var config = {
    'debug': false
}
var debug = config.debug ? console.log.bind(console)  : function () {
};

function SearchNyahentai() {
    var title=document.title.replace(/( - ExHentai\.org)|( - E-Hentai Galleries)|[^\w\d\[\]]/g," ");
    window.open("https://en.nyahentai3.com/search/q_"+encodeURI(title));
}

function CreateButton(text,func){
    btn=document.createElement("button");
    btn.type="button";
    btn.onclick="";
    btn.innerHTML=text;
    btn.addEventListener('click',func);
    var gd2=document.querySelector("#gd2");
    gd2.insertBefore(btn, null);
}

var init = function () {
    CreateButton('Search in nyahentai',function () {
        SearchNyahentai();
});

}
window.addEventListener('DOMContentLoaded', init);

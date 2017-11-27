// ==UserScript==
// @name              fadebox
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       change position of fadebox to top
// @include           https://xcraft.ru/*
// @run-at document-end
// ==/UserScript==

var fb=document.getElementById('fadeBox');
fb.style.top='0%';
fb.style.left='700px';


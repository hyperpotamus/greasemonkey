// ==UserScript==
// @name              fadebox
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       change position of fadebox to top
// @include           https://xcraft.ru/*
// @include           https://xcraft.net/*
// @run-at document-end
// ==/UserScript==

var fb=document.getElementById('fadeBox');
fb.style.top='0%';
fb.style.left='750px';


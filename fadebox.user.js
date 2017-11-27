// ==UserScript==
// @name              fadebox
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       change position of fadebox to top
// @include           https://xcraft.ru/*
// ==/UserScript==

var fb=getElementsById('fadeBox')[0];
fb.style.top='0%';
fb.style.left='700px';


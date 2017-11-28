// ==UserScript==
// @name              spyblock
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       look at spy report
// @include           https://xcraft.ru/*
// @run-at            document-end
// ==/UserScript==

console.log('spyblock script run');
var sbr=document.getElementsByClassName('spy_block_resources')[0];
var met=sbr.getElementsByClassName("metal res-icon very-small")[0].innerHTML;
var cry=sbr.getElementsByClassName("crystal res-icon very-small")[0].innerHTML;
var gas=sbr.getElementsByClassName("deuterium res-icon very-small")[0].innerHTML;
console.log(met);
console.log(cry);
console.log(gas);

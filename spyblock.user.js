// ==UserScript==
// @name              spyblock
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       look at spy report
// @include           https://xcraft.ru/*
// @run-at            document-end
// ==/UserScript==

console.log('spyblock script run');
var iover=document.getElementsByClassName('fvk_info box_lb ui_wrapper')[0];
var dyndiv=iover.getElementsByClassName('container')[0];
dyndiv.addEvent('load', PageBitHasLoaded);

function PageBitHasLoaded (zEvent)
{
  console.log('spyblock loaded');
var sbr=document.getElementsByClassName('spy_block_resources');
if (sbr) {
var met=sbr[0].getElementsByClassName("metal res-icon very-small")[0].innerHTML;
var cry=sbr[0].getElementsByClassName("crystal res-icon very-small")[0].innerHTML;
var gas=sbr[0].getElementsByClassName("deuterium res-icon very-small")[0].innerHTML;
console.log(met);
console.log(cry);
console.log(gas);}
}

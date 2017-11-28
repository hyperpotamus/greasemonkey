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
dyndiv.addEventListener('DOMNodeInserted', PageBitHasLoaded);

function PageBitHasLoaded (zEvent)
{
  console.log('spyblock loaded');
var sbr=document.getElementsByClassName('spy_block_resources');
if (sbr) {
 var met=parseInt(sbr[0].getElementsByClassName("metal res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 var cry=parseInt(sbr[0].getElementsByClassName("crystal res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 var gas=parseInt(sbr[0].getElementsByClassName("deuterium res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 console.log(met);
 console.log(cry);
 console.log(gas);
 console.log('sum=',met+cry+gas);
 var ressum=met+cry+gas;
 var baklusha=Math.floor(1+ressum/2/4559);
 console.log('need ',baklusha,' baklushas');
 var dstr = '<div> need ' + baklusha + ' baklushas </div>';
 console.log(dstr);
 var newElement = document.createElement('div');
 newElement.innerHTML = dstr;
 console.log(newElement.innerHTML);
 sbr.parentNode.insertBefore(newElement, sbr.nextSibling);
 }
}

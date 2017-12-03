// ==UserScript==
// @name              spyblock
// @namespace         https://hyperpotamus.github.io/greasemonkey/
// @description       look at spy report
// @include           https://xcraft.ru/*
// @run-at            document-end
// ==/UserScript==

console.log('spyblock script run');
var iover=document.getElementsByClassName('window-1 infos')[0];
var dyndiv=iover.getElementsByClassName('content container')[0];
dyndiv.addEventListener('DOMNodeInserted', PageBitHasLoaded);
var maindiv=document.getElementsByClassName('adp__content')[0];
maindiv.addEventListener('DOMNodeInserted', MainDivHasLoaded);
var baknum=0;

function PageBitHasLoaded (zEvent)
{
  var baklushaCapacity=4559;
  console.log('spyblock loaded');
var sbr=document.getElementsByClassName('spyblock');
if (sbr) {
 var met=parseInt(sbr[0].getElementsByClassName("metal res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 var cry=parseInt(sbr[0].getElementsByClassName("crystal res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 var gas=parseInt(sbr[0].getElementsByClassName("deuterium res-icon very-small")[0].innerHTML.replace(/[^\d.]/g, ''), 10);
 var senergy=sbr[0].getElementsByClassName("energy res-icon very-small")[0].innerHTML;
 console.log(met);
 console.log(cry);
 console.log(gas);
 console.log(senergy);
 console.log('sum=',met+cry+gas);
 var ressum=met+cry+gas;
 var baklusha=Math.floor(1+ressum/2/baklushaCapacity);
  baknum=baklusha;
 console.log('need ',baklusha,' baklushas');
 var lastSeven = senergy.substr(senergy.length - 7);
  console.log(lastSeven);
 if (lastSeven != 'klushas') {
 sbr[0].getElementsByClassName("energy res-icon very-small")[0].innerHTML=senergy + ' ' + baklusha + ' baklushas';}
/*
*/
 }
}
function MainDivHasLoaded (zEvent) {
  console.log('MainDiv loaded ',baknum);
  var bfield=document.getElementById('fleet_ship232');
  if (bfield) {
    console.log('baklushas set');
    bfield.value=baknum;
  }
}

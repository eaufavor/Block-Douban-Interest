// ==UserScript==
// @name         Block Douban Interest
// @namespace    
// @version      0.1
// @description  block douban interest
// @author       eaufavor
// @match        http://*.douban.com/*
// @exclude      http://www.douban.com/interest*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


var divs = document.getElementsByClassName('status-item');
for (var i=0;i<divs.length; i++) {
    if ( divs[i].getAttribute('data-action') == "0" ){
        divs[i].style.display = 'none';
    }
}

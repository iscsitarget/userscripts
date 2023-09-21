// ==UserScript==
// @name         THM-RemoveGlossaryLinks
// @namespace    iscsitarget
// @version      1.0
// @description  Remove links with the class "glossary-term" and keep the text inside the <a> tags. The text inside these tags doesn't play well with my note-taking application. This solves it.
// @author       iscsitarget
// @match        https://tryhackme.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeGlossaryLinks() {
        var glossaryLinks = document.querySelectorAll('a.glossary-term');
        glossaryLinks.forEach(function(link) {
            var text = link.textContent;
            var span = document.createElement('span');
            span.textContent = text;
            link.parentNode.replaceChild(span, link);
        });
    }
})();

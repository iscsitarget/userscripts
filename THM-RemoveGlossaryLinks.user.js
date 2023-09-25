// ==UserScript==
// @name         THM-RemoveGlossaryLinks
// @namespace    iscsitarget
// @version      1.1
// @description  Remove links with the class "glossary-term" and keep the text inside the <a> tags. The text inside these tags doesn't play well with my note-taking application. This solves it.
// @author       iscsitarget
// @match        https://tryhackme.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Remove glossary links
    function removeGlossaryLinks() {
        var glossaryLinks = document.querySelectorAll('a.glossary-term');
        glossaryLinks.forEach(function(link) {
            var text = link.textContent;
            var span = document.createElement('span');
            span.textContent = text;
            link.parentNode.replaceChild(span, link);
        });
    }

    // Remove when new content is added
    function handleMutations(mutationsList) {
        mutationsList.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(addedNode) {
                    if (addedNode.nodeType === 1) { // Check if it's an element node
                        removeGlossaryLinks(addedNode);
                    }
                });
            }
        });
    }

    // Start observing changes in the entire document
    var observer = new MutationObserver(handleMutations);
    observer.observe(document, { subtree: true, childList: true });

    // Remove glossary links on initial page load
    removeGlossaryLinks();
})();

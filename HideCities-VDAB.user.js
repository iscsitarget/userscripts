// ==UserScript==
// @name         HideCities-VDAB
// @namespace    iscsitarget
// @version      1.0
// @description  Hide certain cities from showing up on VDAB.
// @author       iscsitarget
// @match        https://www.vdab.be/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const cities = [
        "brussel",
        "ixelles",
        "anderlecht",
        "schaarbeek",
        "etterbeek",
        "sint-gillis",
        "ukkel",
        "elsene",
        "sint-jans-molenbeek",
        "vorst",
        "sint-pieters-woluwe",
        "sint-lambrechts-woluwe",
        "berchem-sainte-agathe",
        "koekelberg",
        "ganshoren",
        "jette",
        "koekelberg"
    ];

    function containsCity(text) {
        const lowerText = text.toLowerCase();
        return cities.some(city => lowerText.includes(city));
    }

    function handleMutations(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const strongElements = node.querySelectorAll('strong');
                        for (const strongElement of strongElements) {
                            const parentLI = strongElement.closest('li');
                            if (parentLI && containsCity(strongElement.innerHTML.toLowerCase())) {
                                parentLI.style.display = 'none';
                            }
                        }
                    }
                }
            }
        }
    }

    const observer = new MutationObserver(handleMutations);
    observer.observe(document.body, { childList: true, subtree: true });
})();
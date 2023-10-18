// ==UserScript==
// @name         HideCities-Indeed
// @namespace    iscsitarget
// @version      1.0
// @description  Hide certain cities from showing up on Indeed.
// @author       iscsitarget
// @match        https://*.indeed.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const cities = [
        "brussel",
        "brussels",
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

    function hideCityElements() {
        const companyLocationElements = document.querySelectorAll('.companyLocation');
        companyLocationElements.forEach(element => {
            if (containsCity(element.textContent.toLowerCase())) {
                const parentLI = element.closest('li');
                if (parentLI) {
                    parentLI.style.display = 'none';
                }
            }
        });
    }

    hideCityElements();
})();
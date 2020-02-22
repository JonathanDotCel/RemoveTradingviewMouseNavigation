// ==UserScript==
// @name         TradingView - Remove mouse navigation
// @namespace    https://www.tradingview.com
// @version      0.1
// @description  Removes the mouse navigation buttons from the bottom of each sub chart on TradinView
// @author       Jonathan Cel - https://github.com/JonathanDotCel/
// @match        https://*.tradingview.com/chart/*
// @grant        none
//
// You may have to add this if you're running into JQuery issues.
//
// @xrequire http://code.jquery.com/jquery-latest.js
//
// ==/UserScript==

$(document).ready(function() {

    // We'll want it fast enough that it's not annoying but not
    // so fast as to chew up CPU on an already-heavy page.
    // Using intervals make the code more immediately identifiable
    // and so trustworthy, so no MutationObservers, etc.

    var clearTimer = self.setInterval( AttemptClear, 200 );

    function AttemptClear(){

        // Should include the hidden and unhidden states.
        var tooltips = $(".control-bar-wrapper");

        // If we didn't find any then wait it out.
        // They're created on hover (not just hidden away)
        if ( tooltips.length == 0 ) return false;

        //alert( "found " + tooltips.length );

        // Otherwise, enumerate
        tooltips.each( function(){

            $(this).remove();

        });

        return true;

    }

    // window.clearInterval( clearTimer );

});

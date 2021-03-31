"use strict";
$(document).ready(function(){
    // preload images in caches
    $("#image_list a").each(function() {
        var swappedImage = new Image();     // Image object
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links
    $("#image_list a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#main_image").attr("src", imageURL);

        // swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of the link
        evt.preventDefault();
    });

    $("li:first-child a").focus();
});
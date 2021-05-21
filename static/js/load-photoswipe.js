/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/

/* Show an alert if this js file has been loaded twice */
if (window.loadphotoswipejs) {
    window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6")
}
var loadphotoswipejs = 1

$( document ).ready(function() {
    var galleries = {};

    // for every figure element on the page
    $('figure').each(function() {
        if ($(this).attr('class') == 'no-photoswipe') return true;

        var $figure = $(this),
            $a = $figure.find('a'),
            $img = $figure.find('img');

        var item = {
            src: $a.attr('href'),
            title: $img.attr('alt'),
            msrc: $img.attr('src'),
            // temporary default size for when the "data-size" attribute wasn't set
            w: 1920,
            h: 1080
        };

        var gallery_id = $figure.attr('class').replace("gallery_", "");

        // if data-size on <a> tag is set, read it and create an item
        if ($figure.data('size')) {
            [item["w"], item["h"]] = $figure.data('size').split('x');

            //console.log("Using pre-defined dimensions for " + item["src"]);
        // if not, set temp default size then load the image to check actual size
        } else {
            console.log("Using default dimensions for " + item["src"]);
            // load the image to get its dimensions and updage the item (check every 30ms)
            var img = new Image();
            img.src = item["src"];
            var wait = setInterval(function() {
                var w = img.naturalWidth,
                    h = img.naturalHeight;

                if (w && h) {
                    clearInterval(wait);
                    item.w = w;
                    item.h = h;
                    console.log("Got actual dimensions for " + img.src);
                }
            }, 30);
        }

        if (!(gallery_id in galleries)) {
            galleries[gallery_id] = []
        }

        var items = galleries[gallery_id];
        var index = items.length;
        items.push(item);

        $figure.on('click', function(event) {
            event.preventDefault(); // prevent the normal behaviour i.e. load the <a> hyperlink

            var $pswp = $('.pswp')[0];
            var options = {
                index: index,
                bgOpacity: 0.8,
                showHideOpacity: true
            }
            new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
        });
    });
});

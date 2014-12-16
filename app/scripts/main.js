jQuery(function ($) {

    var helpers = {

        Elements: {
            progressEl: $("#progressBar"),
            content: $("#content"),
            hamburger: $('#hamburger')
        },

        progressBar: function() {
			function progress(percent, $element) {
			    var progressBarWidth = percent * $element.width() / 100;
			    $element.find('div').animate({ width: progressBarWidth }, 500);
			    $element.append('<span class="percent-text">' + percent + "%</span>");
			}

			progress(20, helpers.Elements.progressEl);            
        },

        toggleMenu: function() {
            helpers.Elements.hamburger.on('click', function(){
                $(this).toggleClass('open');
                $('.menu').toggleClass('open'); 
                console.log('duh');
            });
        },

        init: function() {
            helpers.progressBar();
            helpers.toggleMenu();
        }

    };

    // Initialize on DOM ready
    $(helpers.init);

});
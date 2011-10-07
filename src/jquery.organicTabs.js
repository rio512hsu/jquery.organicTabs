(function($) {

    $.organicTabs = function(el, options) {
    
        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find(".nav");
                
        base.init = function() {
        
            base.options = $.extend({},$.organicTabs.defaultOptions, options);
            
            base.$nav.delegate("li > a", "click", function() {
            
                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),
                
                // List moving to
                    $newList = $(this),
                    
                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),
                
                // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
                $allListWrap.height(curListHeight);
                                        
                if ((curList.length > 0) && (listID.length > 0) && (listID != curList) && ( base.$el.find(":animated").length === 0)) {
                                            
                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.fadingSpeed, base.options.fadingEasing, function() {
                        
                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.fadingSpeed, base.options.fadingEasing);
                        
                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#"+listID).height();
                        $allListWrap.animate({
                            height: newHeight
                        }, base.options.sizingSpeed, base.options.sizingEasing);
                        
                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("current");
                        $newList.addClass("current");
                            
                    });
                    
                }   
                
                // Don't behave like a regular link
                // Stop propagation and bubbling
                return false;
            });
            
        };
        base.init();
    };
    
    $.organicTabs.defaultOptions = {
        fadingSpeed: 300,         // Speed of fading animations
        fadingEasing: "swing",    // Easing used for fading animations
        
        sizingSpeed: 300,         // Speed of resizing animations
        sizingEasing: "swing"     // Easing used for resizing animations
    };
    
    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };
    
})(jQuery);
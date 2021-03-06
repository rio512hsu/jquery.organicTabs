
jQuery.organicTabs
=============

This jQuery plugin has first been authored by Chris Coyier at [css-tricks.com](http://css-tricks.com/4530-organic-tabs/).
Here's what he stated as the goal of his [tutorial](http://css-tricks.com/4530-organic-tabs/):

> The plan is to build a tabbed area, something pretty simple to do from scratch with jQuery, and then make it behave better. Of course, we'll keep it simple, and keep the markup clean and semantic. The guts of the functionality will be based on calculating heights and animating between those heights on the fly.


The idea behind this repository is to enhance the original code to remove some quirks and improve/add some features.


Usage
-----

### HTML Markup

To be able to use _organicTabs_, your HTML Markup must be adapted to some of its expectations.
Here is an example of a compatible markup:

    <div id="tabbed-area">
        <ul class="nav">
            <li><h2><a href="#featured" class="current">Featured</a></h2></li>
            <li><h2><a href="#core">Core</a></h2></li>
            <li><h2><a href="#classics">Classics</a></h2></li>
        </ul>

        <div class="list-wrap">
            <div id="featured">
                <p>Featured Stuff in here!</p>
            </div>

            <div id="core" class="hidden">
                <p>Core Stuff in here!</p>
            </div>

            <div id="classics" class="hidden">
                <p>Classic Stuff in here!</p>
            </div>
        </div> <!-- END List Wrap -->
    </div> <!-- END Tabbed Area -->


Here are the requirements:

   - _organicTabs_ is applied on a _tabbed area_ which wraps the tabs buttons/links and their corresponding content.

   - Tabs buttons must be listed in an (un)ordered list with the CSS class "nav" set.

   - In this list, each _li_ item must contain a (possibly nested) anchor tag which will be the clickable element that'll trigger the tab's display.

   - This anchor tags have the following requirements:
     - The currently displayed tab receives the CSS class "current". The default tab must have this class set in the markup.
     - The _href_ attribute of each anchor tag must be "#" followed by the _id_ of the element to display as the tab's content.

   - The tabs' contents elements must be wrapped in a _div_ with the CSS class "list-wrap" set.
  
   - Containers for each tab must have their _id_ set to the corresponding anchor tag's _href_ attribute as explained above.

   - Containers for tabs that are not the default tab must be hidden. The script will fade them in when their corresponding anchor tag is clicked.


### Javascript

Here's how you would call _organicTabs_ for the example above:

    $("#tabbed-area").organicTabs();

You can also customize the animation speed:

    $("#tabbed-area").organicTabs({
        fadingSpeed: 150,
        sizingSpeed: 200
    });

#### Options (and default values)

    {
        headingsSelector: ".nav",        // jQuery selector string to find headings list(s) inside the target element
        contentsSelector: ".list-wrap",  // jQuery selector string to find contents container(s) inside the target element

        updateAlong: null,	      	     // Provide elements to be updated along with the regular wrapper. It's useful in
				                    	 // nesting cases when you want a parent element to be resized correctly

        fadingSpeed: 300,                // Speed of fading animations
        fadingEasing: "swing",           // Easing used for fading animations

        sizingSpeed: 300,                // Speed of resizing animations
        sizingEasing: "swing"            // Easing used for resizing animations
    }

#### To apply the default organicTabs automatically

The plugin will automatically be run on tabbed areas declaring the _data-organic-tabs_ attribute as follows:

    <div id="tabbed-area" data-organic-tabs="organic">
        ...
    </div>

Default options will be used in this case.


### Instance methods

Once *organicTabs* has been initialized on a DOM element, you can call methods on the same element to get or set the state
of the tabs. This is done much like with jQueryUI Widgets, for instance to get the current tab ID:

    var tabID = $("#tabbed-area").organicTabs("currentTab");

The available methods are:

#### currentTab

Get the ID of the current tab

**Parameters**: none
**Returns**: The ID of the currently selected tab

#### changeTo(tabID)

Open another tab

**Parameters**:

    tabID   (String)    The ID of the tab to activate. If it's already the current tab, nothing will happen.

**Returns**: nothing


### Triggered events

The following events are triggered on the tabbed area object:

#### organicTabs.changed
Triggered when the current tab has been changed.

**Arguments**: event object, new tab ID, new tab DOM element

Usage sample:

    $("#tabbed-area").on("organicTabs.changed", function(event, tabID, $tabEl) {
        console.log("The tab '" + tabID + "' has been activated");
    });


### Nesting tabbed areas

See wiki page [*How to nest tabs?*](https://github.com/olance/jquery.organicTabs/wiki/How-to-nest-tabs%3F)


Credits
-------

Thanks of course go to Chris Coyier for a simple yet effective plugin!

License
-------

The [original code](http://css-tricks.com/4530-organic-tabs/) by Chris Coyier has been released under this very permissive (^^) license:

> (...) the idea is that you can take this, hack it to pieces, do whatever you want with it, preferably become rich and famous.


This modified version of organicTabs is released under the MIT license:

> Copyright (c) 2010 Olivier Lance

> Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

> The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

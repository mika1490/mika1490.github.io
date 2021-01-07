// Use $(document).ready to ensure the page has fully loaded.
$(document).ready(function() {
    // As soon as the document is ready, we want to show the header and title which shouldn't be dependent upon the user scrolling.
    $('.nav').addClass('visible');
    $('.home').addClass('visible');
    $('.about').addClass('visible');
    $('.project-section').addClass('visible');
    // This toggles the hamburger icon menu and alters the background colors for focus
    $(".myIcon-toggle-about").click(function(){
        $('.navbar-collapse').toggle();
        $('.myIcon-toggle').toggleClass("active")
        $('.page-content').toggleClass("active")
    });
    $(".myIcon-toggle-location").click(function(){
        let navLocation = window.location.href;
        $('.navbar-collapse').toggle();
        $('.myIcon-toggle').toggleClass("active")
        $('.page-content').toggleClass("active")
        if (navLocation === 'index.com/#projects'){
            location.replace(navLocation);
            return false;
        }
    });
    // This function will navigate to #projects from the collapsed navbar view
    $(".projects-link").click(function(){
        $('.myIcon-toggle').toggleClass("active");
        $('.navbar-collapse').toggle();
        if ($('.page-content').is(":hidden")){
            $('.page-content').toggleClass("active");
        }
        /* location.replace('http://mikadumont.com/#projects');
        return false; */
    })
    
    $(".about-link").click(function(){
        // $('.navbar-collapse').toggle();
        // $('.myIcon-toggle').toggleClass("active");
        // if ($('.page-content').is(":hidden")){
        //     $('.page-content').toggleClass("active");
        // }
        location.replace('about.html');
        return false;
    })
    $(".memoji").click(function(){
        if ($(".navbar-collapse").is(":visible")){
            $('.navbar-collapse').hide();
            $('.myIcon-toggle').toggleClass("active");
        }
        if ($(".page-content").is(":hidden")){
            $('.page-content').toggleClass("active");
        }

        location.replace('index.html');
        return false;
    })
    // $(".memoji-about").click(function(){
    //     if ($(".navbar-collapse").is(":visible")){
    //         $('.navbar-collapse').hide();
    //         $('.myIcon-toggle').toggleClass("active");
    //     }
    //     if ($(".page-content").is(":hidden")){
    //         $('.page-content').toggleClass("active");
    //     }

    //     location.replace('http://127.0.0.1:5501/about.html#home');
    //     return false;
    // })
    
    // The scroll event will run every time a user moves the page.
    $(document).on("scroll", function() {
        // pageTop = how far down the page the user has scrolled (technically, finding the amount of pixels down the document the top of the browser currently is).
        let pageTop = $(document).scrollTop()
        // pageBottom = pageTop plus the amount of pixels the window (the viewable portion) is: The threshold for tags coming into view isn't the top of the browser window (currently 0 pixels at start) but the bottom of the browser window. 
        let pageBottom = pageTop + $(window).height()
        // Now we assign tags to section (in quotes since it isn't a special js word like document and window)
        let tags = $(".section")
        // The tags variable is an array (list) of tags we've picked.
        for (let i = 0; i < tags.length; i++){
            // Get the individual tag in our list:
            let tag = tags[i]
            // Then we want to use jQuery to check its position and if it's visually higher up the page than the pageBottom variable, add a CSS class to it.
            if ($(tag).position().top < pageBottom){
                $(tag).addClass("visible")
            }
            // We could also make it fade back out once it's out of view:
            else { $(tag).removeClass("visible")}
        }
    })
    
});
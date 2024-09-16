
// header profile
$(function(){
    $(".header-container .user-info .profile").click(function(){
        $(this).next(".menu").fadeToggle(0);
    return false;
    });
    $(".main-container .filter-box a").click(function(){
        $(this).next(".filter-list").fadeToggle(0);
    return false;
    });
    $(".main-container .company-information ul li a.add").click(function(){
        $(this).parent().parent().next(".menu").fadeToggle(0);
    return false;
    });
    $("ul.show-contact-list li .name").click(function(){
        $(this).next(".info").fadeToggle(0);
        $(this).toggleClass( "arr-down" );
    return false;
    });
});

// Popupd
$(function(){
  $('.popup-link').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
})


// side menu
$(function(){
    $("#sidemenu-btn").click(function(){
        $(this).toggleClass("bg-c-circle");
        $("#side-menu").toggleClass( "menu-show-off" );
        $("#side-menu").find("li").removeClass("selected-2");
        return false;
    });
});

$(function(){
    $(".menu-show-off ul li h4").click(function(){
        $(this).parent().parent().find("li").removeClass("selected-2");
        $(this).parent().addClass("selected-2");
        $("#sidemenu-btn").addClass("bg-c-circle");
        $("#side-menu").removeClass("menu-show-off");
        return false;
    });
});
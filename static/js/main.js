$(document).ready(() => {
    //---Semantic ui Js---
    lazyLoadingImage();
    changePositionBg();
    stickyUI();
    accordionUI();
    animateCard();
    searchBar();

    //---General js---
    goTo();
    menuButtton();
});

// ------Semantic ui JS------

    // lazy loading images
var lazyLoadingImage = () => {
    $('#page img')
        .visibility({
            type       : 'image',
            transition : 'fade up in',
            duration   : 1000
        })
    ;
    console.log("lazy load..");
}

    // Background follow scrolling
var changePositionBg = () => {
    $(window).scroll( () => {
        if ($(window).scrollTop() == 0){
            $("div.bg").css("background-position", "50% 100%");
        }else if (($(window).scrollTop() <= 50)){
            $("div.bg").css("background-position", "50% 90%");
        }else if (($(window).scrollTop() <= 100)){
            $("div.bg").css("background-position", "50% 80%");
        }else if (($(window).scrollTop() <= 150)){
            $("div.bg").css("background-position", "50% 70%");
        }else if (($(window).scrollTop() <= 200)){
            $("div.bg").css("background-position", "50% 60%");
        }else if (($(window).scrollTop() <= 250)){
            $("div.bg").css("background-position", "50% 50%");
        }else if (($(window).scrollTop() <= 300)){
            $("div.bg").css("background-position", "50% 40%");
        }else if (($(window).scrollTop() <= 350)){
            $("div.bg").css("background-position", "50% 30%");
        }else if (($(window).scrollTop() <= 400)){
            $("div.bg").css("background-position", "50% 20%");
        }else if (($(window).scrollTop() <= 500)){
            $("div.bg").css("background-position", "50% 10%");
        }else{
            $("div.bg").css("background-position", "50% 0%");
        }
    });
}

    //Sticky left and right Rail
var stickyUI = () => {
    $('.ui.sticky')
        .sticky({context: '#context'})
    ;
}

    //Accordion
var accordionUI = () => {
    $('.ui.accordion')
        .accordion({
            onOpen: () => {
                lazyLoadingImage();
            },
            onClose: () => {
                $('.ui.accordion').accordion('refresh');
            }
        })
    ;
}

// animate about me
var animateCard = () => {
    $('.shape .slide-s')
        .on('click', () => {
            $('.shape').shape('flip right');
        }
    );
}

// search bar
var searchBar = () => {
    $('.ui.search')
        .search({
            source : content,
            searchFields   : [
                'description'
            ],
            fullTextSearch: false,
        }
    );
    $("#search-1")
        .on("click", () => {
            search("#searchfield-1");
        }
    );
    $("#search-2")
        .on("click", () => {
            search("#searchfield-2");
        }
    );
}
var content = [
    {
        title: 'About Me',
        description: 'About Me',
    },
    {
        title: 'About Me',
        description: 'Personality',
    },
    {
        title: 'About Me',
        description: 'Objective',
    },
    {
        title: 'About Me',
        description: 'Education',
    },
    {
        title: 'About Me',
        description: 'Language',
    },
    {
        title: 'Skills',
        description: 'Skills',
    },
    {
        title: 'Skills',
        description: 'Programming',
    },
    {
        title: 'Skills',
        description: 'Graphic Design Software',
    },
    {
        title: 'Skills',
        description: 'Other talent',
    },
    {
        title: 'Experiences',
        description: 'Experiences',
    },
    {
        title: 'Experiences',
        description: 'Jun. 2017 - Dec. 2017',
    },
    {
        title: 'Experiences',
        description: 'Pronto Tools',
    },
    {
        title: 'Experiences',
        description: 'Aug. 2016 - Mar. 2017',
    },
    {
        title: 'Experiences',
        description: 'NSC 2017',
    },
    {
        title: 'Experiences',
        description: 'Sep. 2016',
    },
    {
        title: 'Experiences',
        description: 'KMITL Innovative Award 2016',
    },
    {
        title: 'Hobbies and Interests',
        description: 'Hobbies and Interests',
    },
]
var search = (searchField) => {
    var res = $(searchField).val();
    var trueRes = "";
    
    if (res == "About Me") {
        trueRes = "#about-me";
    } else if (res == "Skills") {
        trueRes = "#skills";
    } else if (res == "Experiences") {
        trueRes = "#experiences";
    } else if (res == "Hobbies and Interests"){
        trueRes = "#hobbies";
    }
    console.log(trueRes);
    console.log(res);
    $('html, body').animate({
        scrollTop: $(trueRes).offset().top
    }, 1000);
}



// ----- General Js -------

var goTo = () => {
    $(".item.aboutme-top").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1000);
    });
    $(".item.skills-top").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
    $(".item.exp-top").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#experiences").offset().top
        }, 1000);
    });
    $(".item.hob-top").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#hobbies").offset().top
        }, 1000);
    });
    $("#findme-btn").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1000);
    });
    $("#gotop").on("click",function() {
        $('html, body').animate({
            scrollTop: $("#page").offset().top
        }, 1000);
    });
}

var menuButtton = () => {
    $(".btn-menu").on("click", () => {
        $('.ui.left.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
        }
    );
}



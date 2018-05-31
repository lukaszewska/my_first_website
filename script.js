var startFirstAnimatedLine = function() {
    var firstAnimatedLine = document.querySelector('.first-animated-line');
    firstAnimatedLine.classList.add('first-animated-line-start');
};

window.onload=startFirstAnimatedLine;



var addNavBackground = function() {
    var menuWrap = document.getElementById('menu-wrap');
    var hello = document.getElementById('hello');
    if(menuWrap.getBoundingClientRect().top > hello.getBoundingClientRect().top-40) {
        menuWrap.style.backgroundColor='#838A90';
    }
    else {
        menuWrap.style.backgroundColor='transparent';    
    }
};

window.addEventListener('scroll', addNavBackground);



var openMenu = document.querySelector('#open-menu');
var closeMenu = document.querySelector('#close-menu');
var navigation = document.querySelector('#navigation');
var clickedSection = document.getElementsByClassName('nav');

openMenu.addEventListener('click', function(e) {
navigation.classList.toggle('open');
e.stopPropagation();
});
closeMenu.addEventListener('click', function() {
navigation.classList.remove('open');
});
for(var i=0; i<clickedSection.length; i++) {
    clickedSection[i].addEventListener('click', function() {
        navigation.classList.remove('open');
    });
};



var showActiveNavButton = function() {
    var menu = document.querySelector('#topnav');
    var menuLinks = menu.getElementsByClassName('nav');
    var activeLink;
    for (var i=0; i<menuLinks.length;i++) {
        menuLinks[i].classList.remove('active');
        if(document.querySelector(menuLinks[i].hash).getBoundingClientRect().top < menu.offsetHeight+400) {
            activeLink = menuLinks[i];
        }
    }
    if(activeLink) {
        activeLink.classList.add('active');
    }
};

window.addEventListener('scroll', showActiveNavButton);



var startAnimatedLine = function() {
    var animatedLine = document.getElementsByClassName('animated-line');
    for(var i=0; i<animatedLine.length; i++) {
        
        if(animatedLine[i].getBoundingClientRect().top < 0.35*window.innerHeight) {
            animatedLine[i].classList.add('animated-line-start');
        }
        else if(animatedLine[i].getBoundingClientRect().top > window.innerHeight) {
            animatedLine[i].classList.remove('animated-line-start');
        }
    }
};

window.addEventListener('scroll', startAnimatedLine);


var startLastAnimatedLine = function() {
    var lastAnimatedLine = document.querySelector('.last-animated-line');
        
        if(lastAnimatedLine.getBoundingClientRect().top < 0.7*window.innerHeight) {
            lastAnimatedLine.classList.add('last-animated-line-start');
        }
        else if(lastAnimatedLine.getBoundingClientRect().top > window.innerHeight) {
            lastAnimatedLine.classList.remove('last-animated-line-start');
        }
};

window.addEventListener('scroll', startLastAnimatedLine);



var skillsShowLevel = function() {
    var skills = document.getElementsByClassName('single-skill-animated');
    for(var i=0; i<skills.length; i++) {
        if(skills[i].getBoundingClientRect().top < 0.85*window.innerHeight) {
            skills[i].classList.add('single-skill-animated-start');
        }
    }
};

window.addEventListener('scroll', skillsShowLevel);



var portfolioShowContent = function() {
    var portfolio = document.getElementsByClassName('portfolio-item');
    for(var i=0; i<portfolio.length; i++) {
        portfolio[i].addEventListener('mouseover', function() {
            this.firstElementChild.classList.add('rotate');
            var content = this.firstElementChild.nextElementSibling;
            content.style.display='block';
        });
    }
    for(var j=0; j<portfolio.length; j++) {
        portfolio[j].addEventListener('mouseleave', function() {
            this.firstElementChild.classList.remove('rotate');
            var content = this.firstElementChild.nextElementSibling;
            content.style.display='none';
        });
    }
};

portfolioShowContent(); 



/*It doesn't work w IE and Edge
var scrollToSection = function(event) {
    event.preventDefault();
    var clickedLink = this;
    var target = document.querySelector(clickedLink.hash);
    var menu = document.querySelector('#topnav');
    
    var scrollTarget = menuScrollTarget = window.pageYOffset + target.getBoundingClientRect().top - menu.offsetHeight;
    
    window.scroll({
        top: scrollTarget,
        left: 0,
        behavior: 'smooth'
    }); 
};

var menuLinks = document.querySelector('#topnav').getElementsByTagName('a');
for(var i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', scrollToSection);
}*/



var menu = document.querySelector('#menu-wrap');

//scroll to AboutMe
var aboutMe = document.getElementById('about-me-menu');
var targetAboutMe = document.querySelector(aboutMe.hash);

var scrollToAboutMe = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    
    if (window.pageYOffset < window.pageYOffset + (targetAboutMe.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToAboutMeUp, 10);    
    }
    else if (window.pageYOffset > window.pageYOffset + (targetAboutMe.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToAboutMeDown, 10);
    }
   
};

var scrollToAboutMeUp = function() {
    var scrollAboutMe =  window.pageYOffset + (targetAboutMe.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue += 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue > scrollAboutMe) {
        var x = scrollAboutMe-scrollAnimationValue;
        window.scrollBy(0, x+1);
        clearInterval(scrollAnimationTimer);
    }
};
 
var scrollToAboutMeDown = function() {
    var scrollAboutMe =  window.pageYOffset + (targetAboutMe.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue -= 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue < scrollAboutMe) {
        var y = scrollAboutMe-scrollAnimationValue;
        window.scrollBy(0, y+1);
        clearInterval(scrollAnimationTimer);
    }
};
aboutMe.addEventListener('click', scrollToAboutMe); 



//scroll to Portfolio
var portfolio = document.getElementById('portfolio-menu');
var targetPortfolio = document.querySelector(portfolio.hash);

var scrollToPortfolio = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    
    if (window.pageYOffset < window.pageYOffset + (targetPortfolio.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToPortfolioUp, 10);    
    }
    else if (window.pageYOffset > window.pageYOffset + (targetPortfolio.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToPortfolioDown, 10);
    }
   
};

var scrollToPortfolioUp = function() {
    var scrollPortfolio =  window.pageYOffset + (targetPortfolio.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue += 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue > scrollPortfolio) {
        var x = scrollPortfolio-scrollAnimationValue;
        window.scrollBy(0, x+1);
        clearInterval(scrollAnimationTimer);
    }
};
 
var scrollToPortfolioDown = function() {
    var scrollPortfolio =  window.pageYOffset + (targetPortfolio.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue -= 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue < scrollPortfolio) {
        var y = scrollPortfolio-scrollAnimationValue;
        window.scrollBy(0, y+1);
        clearInterval(scrollAnimationTimer);
    }
};
portfolio.addEventListener('click', scrollToPortfolio); 



//scroll to Skills
var skills = document.getElementById('skills-menu');
var targetSkills = document.querySelector(skills.hash);

var scrollToSkills = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    
    if (window.pageYOffset < window.pageYOffset + (targetSkills.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToSkillsUp, 10);    
    }
    else if (window.pageYOffset > window.pageYOffset + (targetSkills.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToSkillsDown, 10);
    }
   
};

var scrollToSkillsUp = function() {
    var scrollSkills =  window.pageYOffset + (targetSkills.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue += 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue > scrollSkills) {
        var x = scrollSkills-scrollAnimationValue;
        window.scrollBy(0, x+1);
        clearInterval(scrollAnimationTimer);
    }
};
 
var scrollToSkillsDown = function() {
    var scrollSkills =  window.pageYOffset + (targetSkills.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue -= 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue < scrollSkills) {
        var y = scrollSkills-scrollAnimationValue;
        window.scrollBy(0, y+1);
        clearInterval(scrollAnimationTimer);
    }
};
skills.addEventListener('click', scrollToSkills);



//scroll to Contact
var contact = document.getElementById('contact-menu');
var targetContact = document.querySelector(contact.hash);

var scrollToContact = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    
    if (window.pageYOffset < window.pageYOffset + (targetContact.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToContactUp, 10);    
    }
    else if (window.pageYOffset > window.pageYOffset + (targetContact.getBoundingClientRect().top - menu.offsetHeight)) {
         scrollAnimationTimer = setInterval(scrollToContactDown, 10);
    }
   
};

var scrollToContactUp = function() {
    var scrollContact =  window.pageYOffset + (targetContact.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue += 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue > scrollContact) {
        var x = scrollContact-scrollAnimationValue;
        window.scrollBy(0, x+1);
        clearInterval(scrollAnimationTimer);
    }
};
 
var scrollToContactDown = function() {
    var scrollContact =  window.pageYOffset + (targetContact.getBoundingClientRect().top - menu.offsetHeight);

    scrollAnimationValue -= 100; 
    window.scrollTo(0, scrollAnimationValue);

    if(scrollAnimationValue < scrollContact) {
        var y = scrollContact-scrollAnimationValue;
        window.scrollBy(0, y+1);
        clearInterval(scrollAnimationTimer);
    }
};
contact.addEventListener('click', scrollToContact); 



var scrollUp = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    scrollAnimationTimer = setInterval(scrollUpStep, 25);
};

var scrollUpStep = function() {
    scrollAnimationValue -= 100;
    window.scrollTo(0, scrollAnimationValue);
    if(scrollAnimationValue <= 0) {
        clearInterval(scrollAnimationTimer);
    }
};

var logo = document.querySelector('#logo');
logo.addEventListener('click', scrollUp);



var scrollDown = function(event) {
    event.preventDefault();
    scrollAnimationValue = window.pageYOffset;
    scrollAnimationTimer = setInterval(scrollDownStep, 25);
};

var scrollDownStep = function() {
    var aboutMe = document.querySelector('#about-me-top-wrap');
    var menuWrap = document.querySelector('#menu-wrap');
    var scrollTarget = window.pageYOffset + aboutMe.getBoundingClientRect().top - menuWrap.offsetHeight;
    scrollAnimationValue += 40;
    window.scrollTo(0, scrollAnimationValue);
    if(scrollAnimationValue >= scrollTarget) {
        clearInterval(scrollAnimationTimer);
    }
};

var downOpen = document.querySelector('.fa-angle-down');
downOpen.addEventListener('click', scrollDown);
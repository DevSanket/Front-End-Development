const navList = document.querySelector('#Nav ul');
const navBtn = document.querySelector('#Nav-btn');

navBtn.addEventListener('click',() => {
    if(navList.classList.contains('nav-phone_inactive')){
       navList.classList.remove("nav-phone_inactive");
       navList.classList.add("nav-phone_active");
    }
    else{
        navList.classList.add('nav-phone_inactive');
        navList.classList.remove('nav-phone_active');
    }

    const toggleNavBtn = document.querySelector("#Nav-btn i");

    if(toggleNavBtn.classList.contains('fa-bars')){
        toggleNavBtn.classList.replace('fa-bars','fa-times')
    }else{
        toggleNavBtn.classList.replace('fa-times','fa-bars')
    }
});



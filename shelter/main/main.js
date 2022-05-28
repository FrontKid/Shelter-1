const BURGER_BTN = document.querySelector("#burger-btn");
const BURGER_LIST = document.querySelector("#burger-list");
const NAVIGATION_LINK = [document.querySelector("#navigation-link-1"),
                        document.querySelector("#navigation-link-2"),
                        document.querySelector("#navigation-link-3"),
                        document.querySelector("#navigation-link-4")];
const GRAY_BACKGROUND = document.querySelector("#gray-background");

const PETS = [['Katrine', "Cat", "British Shorthair", "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.", "6 months", ["panleukopenia"], ["none"], ["none"], './assets/img/pets-katrine.png'],
            ['Jennifer', "Dog", "Labrador", "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.", "2 months", ["none"], ["none"], ["none"], './assets/img/pets-jennifer.png'], 
            ['Woody', "Dog", "Golden Retriever", "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.", "3 years 6 months", ["adenovirus", "distemper"], ["right back leg mobility reduced"], ["none"], './assets/img/pets-woody.png'], 
            ['Sophia', "Dog", "Shih tzu", "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.", "1 month", ["parvovirus"], ["none"], ["none"], './assets/img/pets-sophia.png'], 
            ['Timmy', "Cat", "British Shorthair", "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.", "2 years 3 months", ["calicivirus", "viral rhinotracheitis"], ["kidney stones"], ["none"], './assets/img/pets-timmy.png'], 
            ['Charly', "Dog", "Jack Russell Terrier", "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.", "8 years", ["bordetella bronchiseptica", "leptospirosis"], ["deafness", "blindness"], ["lice", "fleas"], './assets/img/pets-charly.png'], 
            ['Scarlet', "Dog", "Jack Russell Terrier", "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.", "3 months", ["parainfluenza"], ["none"], ["none"], './assets/img/pets-scarlet.png'], 
            ['Freddie', "Cat", "British Shorthair", "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.", "2 months", ["rabies"], ["none"], ["none"], './assets/img/pets-freddie.png']];
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left")
const ITEM_ACTIVE = document.querySelector("#item-active");
const ITEM_RIGHT = document.querySelector("#item-right");

const POPUP = document.querySelector("#popup");
const POPUP_CLOSE_BTN = document.querySelector("#card-btn");
const BACK = document.querySelector('#back');
let cards = [document.querySelector("#element0"),
            document.querySelector("#element1"),
            document.querySelector("#element2")];



const openMenu = () => {
    BURGER_BTN.classList.add('burger-menu-active');
    BURGER_LIST.classList.add('active-menu');
    BURGER_BTN.classList.remove('burger-menu-not-active');
    BURGER_LIST.classList.remove('not-active-menu');
    GRAY_BACKGROUND.classList.add('gray-active');
    GRAY_BACKGROUND.classList.remove('gray-not-active');
    document.body.style.overflow = 'hidden';
    BURGER_BTN.removeEventListener('click', processMenu);
    NAVIGATION_LINK[0].removeEventListener('click', closeMenu);
    GRAY_BACKGROUND.removeEventListener('click', closeMenu);
}
const closeMenu = () => {
    BURGER_BTN.classList.add('burger-menu-not-active');
    BURGER_LIST.classList.add('not-active-menu');
    BURGER_BTN.classList.remove('burger-menu-active');
    BURGER_LIST.classList.remove('active-menu');
    GRAY_BACKGROUND.classList.add('gray-not-active');
    GRAY_BACKGROUND.classList.remove('gray-active');
    document.body.style.overflow = 'auto';
    BURGER_BTN.removeEventListener('click', processMenu);
    NAVIGATION_LINK[0].removeEventListener('click', closeMenu);
    GRAY_BACKGROUND.removeEventListener('click', closeMenu);
}
const processMenu = () => {
    if (!BURGER_LIST.classList.contains('active-menu')) {
        openMenu();
    } else if (!BURGER_LIST.classList.contains('not-active-menu')){
        closeMenu();
    }
}

BURGER_BTN.addEventListener('click', processMenu);
BURGER_LIST.addEventListener('animationend', () => {
    BURGER_BTN.addEventListener('click', processMenu);
    if (BURGER_LIST.classList.contains('active-menu')) {
        NAVIGATION_LINK[0].addEventListener('click', closeMenu);
        NAVIGATION_LINK[2].addEventListener('click', closeMenu);
        NAVIGATION_LINK[3].addEventListener('click', closeMenu);
        GRAY_BACKGROUND.addEventListener('click', closeMenu);
    }
});



const moveLeft = () => {
    CAROUSEL.classList.add('move-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
    removeEventCards();
}
const moveRight = () => {
    CAROUSEL.classList.add('move-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
    removeEventCards()
}
const calcNextPets = () => {
    petsNow = [...petsNext];
    for (let i = 0; i<n; i++) {
        while (true) {
            let a = Math.abs(Math.round(Math.random()*8 - 0.5));
            if (!petsNow.slice(0,n).includes(a) && !petsNext.slice(0,n).includes(a)) {
                petsNext[i] = a;
                break;
            }
        }
    }
}
const createID = () => {
    for (let i = 0; i < 3; i++) {
        let element = document.querySelector(`#item-active > div.element.element${i}`);
        element.setAttribute('id', `element${i}`);
        cards[i] = document.querySelector(`#element${i}`);
    }
    createEventCards();
}
const createNextItem = () => {
    for (let i = 0; i < n; i++) {
        document.querySelector(`#next-photo${i}`).style.background = `url(${PETS[petsNext[i]][8]})`;
        document.querySelector(`#next-name${i}`).innerHTML = PETS[petsNext[i]][0];
    }
    for (let i = 6; i < 6+n; i++) {
        document.querySelector(`#next-photo${i}`).style.background = `url(${PETS[petsNext[i-6]][8]})`;
        document.querySelector(`#next-name${i}`).innerHTML = PETS[petsNext[i-6]][0];
    }
}
const calcN = () => {
    let windowWidth = document.body.clientWidth;
    n = windowWidth >= 1280 ? 3 : windowWidth >= 768 ? 2 : 1;
}

let n;
let petsNow = [0, 1, 2];
let petsNext = [4, 5, 6];

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', () => {
    calcN();
    calcNextPets();
    ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    createID();
    createNextItem();
    CAROUSEL.classList.remove('move-left');
    CAROUSEL.classList.remove('move-right');
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});

let num;
const generateCard = () => {
    document.querySelector('#card-photo').setAttribute('src', PETS[petsNow[num]][8]);
    for (let i = 0; i < 8; i++) {
        if (i > 4) {
            document.querySelector(`#text${i}`).innerHTML = PETS[petsNow[num]][i].join(', ');
            continue;
        }
        document.querySelector(`#text${i}`).innerHTML = PETS[petsNow[num]][i];
    }
}
const openPopup = () => {
    POPUP.classList.add('popup-active');
    POPUP.classList.remove('popup-not-active');
    POPUP.classList.remove('popup-not-active2');
    document.body.style.overflow = 'hidden';
    POPUP_CLOSE_BTN.removeEventListener('click', closePopup);
    BACK.removeEventListener('click', closePopup);
    removeEventCards();
}
const closePopup = () => {
    POPUP.classList.add('popup-not-active');
    POPUP.classList.remove('popup-active');
    document.body.style.overflow = 'auto';
    POPUP_CLOSE_BTN.removeEventListener('click', closePopup);
    BACK.removeEventListener('click', closePopup);
}
const openCard0 = () => {
    num = 0;
    generateCard();
    openPopup();
}
const openCard1 = () => {
    num = 1;
    generateCard();
    openPopup();
}
const openCard2 = () => {
    num = 2;
    generateCard();
    openPopup();
}
const createEventCards = () => {
    cards[0].addEventListener('click', openCard0);
    cards[1].addEventListener('click', openCard1);
    cards[2].addEventListener('click', openCard2);
}
const removeEventCards = () => {
    cards[0].removeEventListener('click', openCard0);
    cards[1].removeEventListener('click', openCard1);
    cards[2].removeEventListener('click', openCard2);
}

createEventCards();
POPUP.addEventListener('animationend', () => {
    if (POPUP.classList.contains('popup-active')) {
        POPUP_CLOSE_BTN.addEventListener('click', closePopup);
        BACK.addEventListener('click', closePopup);
    } else {
        createEventCards();
        POPUP.classList.add('popup-not-active2');
    }
})
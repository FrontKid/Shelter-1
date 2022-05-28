//-----------------------------------------
//PAGINATION
//-----------------------------------------


const PETS = [['Katrine', "Cat", "British Shorthair", "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.", "6 months", ["panleukopenia"], ["none"], ["none"], './assets/img/pets-katrine.png'],
            ['Jennifer', "Dog", "Labrador", "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.", "2 months", ["none"], ["none"], ["none"], './assets/img/pets-jennifer.png'], 
            ['Woody', "Dog", "Golden Retriever", "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.", "3 years 6 months", ["adenovirus", "distemper"], ["right back leg mobility reduced"], ["none"], './assets/img/pets-woody.png'], 
            ['Sophia', "Dog", "Shih tzu", "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.", "1 month", ["parvovirus"], ["none"], ["none"], './assets/img/pets-sophia.png'], 
            ['Timmy', "Cat", "British Shorthair", "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.", "2 years 3 months", ["calicivirus", "viral rhinotracheitis"], ["kidney stones"], ["none"], './assets/img/pets-timmy.png'], 
            ['Charly', "Dog", "Jack Russell Terrier", "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.", "8 years", ["bordetella bronchiseptica", "leptospirosis"], ["deafness", "blindness"], ["lice", "fleas"], './assets/img/pets-charly.png'], 
            ['Scarlet', "Dog", "Jack Russell Terrier", "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.", "3 months", ["parainfluenza"], ["none"], ["none"], './assets/img/pets-scarlet.png'], 
            ['Freddie', "Cat", "British Shorthair", "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.", "2 months", ["rabies"], ["none"], ["none"], './assets/img/pets-freddie.png']];

const BTN_START_PAGE = document.querySelector('#btn-start-page');
const BTN_PREV_PAGE = document.querySelector('#btn-prev-page');
const PAGE_NUMBER = document.querySelector('#num-page');
const BTN_NEXT_PAGE = document.querySelector('#btn-next-page');
const BTN_END_PAGE = document.querySelector('#btn-end-page');

let cards1280 = [];
for (let i = 0; i < 6; i++) {
    cards1280.push([0,1,2,3,4,5,6,7]);
}
const generatePages1280 = () => {
    for (let j = 0; j < 6; j++) {
        let arr = [0,0,0,0,0,0,0,0];
        for(let i = 0; i < 8; i++) {
            while (true) {
                let a = 1+Math.abs(Math.round(Math.random()*101 - 0.5));
                if (!arr.includes(a)) {
                    arr[i] = a;
                    break;
                }
            }
        }
        cards1280[j].sort( (a, b) => arr[a] - arr[b]);
    }
    let windowWidth = document.body.clientWidth;
    if (windowWidth < 1280 && windowWidth >= 768) {
        for (let y = 6; y < 8; y++) {
            cards1280.push([]);
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 8; j++) {
                    if (!cards1280[y].includes(cards1280[i][j])) {
                        cards1280[y].push(cards1280[i][j]);
                        cards1280[i].splice(j,1);
                        break;
                    }
                }
            }
        }
    }
    if (windowWidth < 768) {
        for (let y = 6; y < 16; y++) {
            cards1280.push([]);
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 8; j++) {
                    if (!cards1280[y].includes(cards1280[i][j])) {
                        cards1280[y].push(cards1280[i][j]);
                        cards1280[i].splice(j,1);
                        break;
                    }
                }
                if (i == 2) {
                    cards1280.push([]);
                    y++;
                }
            }
        }
    }
    for (let i = 0; i < cards1280[0].length; i++) {
        document.querySelector(`#card-photo${i}`).style.background = `url(${PETS[cards1280[numPage][i]][8]})`;
        document.querySelector(`#card-name${i}`).innerHTML = PETS[cards1280[numPage][i]][0];
    }
}

let numPage = 0;
const numPageMax = () => {
    let windowWidth = document.body.clientWidth;
    return windowWidth >= 1280 ? 5 : windowWidth >= 768 ? 7 : 15;
}
generatePages1280();


const switchPage = () => {
    for (let i = 0; i < cards1280[0].length; i++) {
        document.querySelector(`#card-photo${i}`).style.background = `url(${PETS[cards1280[numPage][i]][8]})`;
        document.querySelector(`#card-name${i}`).innerHTML = PETS[cards1280[numPage][i]][0];
    }
    PAGE_NUMBER.innerHTML = numPage+1;
    if (numPage == 0) {
        BTN_START_PAGE.setAttribute("disabled", "disabled");
        BTN_PREV_PAGE.setAttribute("disabled", "disabled");
        BTN_NEXT_PAGE.removeAttribute("disabled");
        BTN_END_PAGE.removeAttribute("disabled");
    } else if (numPage == numPageMax()) {
        BTN_END_PAGE.setAttribute("disabled", "disabled");
        BTN_NEXT_PAGE.setAttribute("disabled", "disabled");
        BTN_START_PAGE.removeAttribute("disabled");
        BTN_PREV_PAGE.removeAttribute("disabled");
    } else {
        BTN_START_PAGE.removeAttribute("disabled");
        BTN_PREV_PAGE.removeAttribute("disabled");
        BTN_NEXT_PAGE.removeAttribute("disabled");
        BTN_END_PAGE.removeAttribute("disabled");
    }
}

const switchPageStart = () => {
    numPage = 0;
    switchPage();
}
const switchPagePrev = () => {
    numPage--;
    switchPage();
}
const switchPageNext = () => {
    numPage++;
    switchPage();
}
const switchPageEnd = () => {
    numPage = numPageMax();
    switchPage();
}

BTN_START_PAGE.addEventListener('click', switchPageStart);
BTN_PREV_PAGE.addEventListener('click', switchPagePrev);
BTN_NEXT_PAGE.addEventListener('click', switchPageNext);
BTN_END_PAGE.addEventListener('click', switchPageEnd);


//-----------------------------------------
//GAMBURGER MENU
//-----------------------------------------

const BURGER_BTN = document.querySelector("#burger-btn");
const BURGER_LIST = document.querySelector("#burger-list");
const NAVIGATION_LINK = [document.querySelector("#navigation-link-1"),
                        document.querySelector("#navigation-link-2"),
                        document.querySelector("#navigation-link-3"),
                        document.querySelector("#navigation-link-4")];
const GRAY_BACKGROUND = document.querySelector("#gray-background");

const openMenu = () => {
    BURGER_BTN.classList.add('burger-menu-active');
    BURGER_LIST.classList.add('active-menu');
    BURGER_BTN.classList.remove('burger-menu-not-active');
    BURGER_LIST.classList.remove('not-active-menu');
    GRAY_BACKGROUND.classList.add('gray-active');
    GRAY_BACKGROUND.classList.remove('gray-not-active');
    document.body.style.overflow = 'hidden';
    BURGER_BTN.removeEventListener('click', processMenu);
    NAVIGATION_LINK[1].removeEventListener('click', closeMenu);
    GRAY_BACKGROUND.removeEventListener('click', closeMenu);
    document.querySelector("body > header").style.overflow = 'visible';
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
    NAVIGATION_LINK[1].removeEventListener('click', closeMenu);
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
        NAVIGATION_LINK[1].addEventListener('click', closeMenu);
        NAVIGATION_LINK[3].addEventListener('click', closeMenu);
        GRAY_BACKGROUND.addEventListener('click', closeMenu);
    }
});


//-----------------------------------------
//POPUP
//-----------------------------------------


const POPUP = document.querySelector("#popup");
const POPUP_CLOSE_BTN = document.querySelector("#card-btn");
const BACK = document.querySelector('#back');
let cards = fillCards([]);

function fillCards(arr) {
    for (let i = 0; i < 8; i++) {
        arr.push(document.querySelector(`#element${i}`))
    }
    return arr;
}


let num;
const generateCard = () => {
    document.querySelector('#card-photo').setAttribute('src', PETS[cards1280[numPage][num]][8]);
    for (let i = 0; i < 8; i++) {
        if (i > 4) {
            document.querySelector(`#text${i}`).innerHTML = PETS[cards1280[numPage][num]][i].join(', ');
            continue;
        }
        document.querySelector(`#text${i}`).innerHTML = PETS[cards1280[numPage][num]][i];
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
const openCard3 = () => {
    num = 3;
    generateCard();
    openPopup();
}
const openCard4 = () => {
    num = 4;
    generateCard();
    openPopup();
}
const openCard5 = () => {
    num = 5;
    generateCard();
    openPopup();
}
const openCard6 = () => {
    num = 6;
    generateCard();
    openPopup();
}
const openCard7 = () => {
    num = 7;
    generateCard();
    openPopup();
}
const createEventCards = () => {
    cards[0].addEventListener('click', openCard0);
    cards[1].addEventListener('click', openCard1);
    cards[2].addEventListener('click', openCard2);
    cards[3].addEventListener('click', openCard3);
    cards[4].addEventListener('click', openCard4);
    cards[5].addEventListener('click', openCard5);
    cards[6].addEventListener('click', openCard6);
    cards[7].addEventListener('click', openCard7);
}
const removeEventCards = () => {
    cards[0].removeEventListener('click', openCard0);
    cards[1].removeEventListener('click', openCard1);
    cards[2].removeEventListener('click', openCard2);
    cards[3].removeEventListener('click', openCard3);
    cards[4].removeEventListener('click', openCard4);
    cards[5].removeEventListener('click', openCard5);
    cards[6].removeEventListener('click', openCard6);
    cards[7].removeEventListener('click', openCard7);
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
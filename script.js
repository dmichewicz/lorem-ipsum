let slider = document.querySelector('.slider');
let content = document.querySelector('.content');
let fade = document.querySelector('.halfBlack');
let dot = document.querySelector('.dot');
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let greenLine = document.querySelector('#greenLine');
let whiteLine = document.querySelector('#whiteline');



//methods

const textViewer = () => {
    let readMore = document.querySelector('.readMore');
    let moreText = document.querySelector(' .moreText');
    readMore.addEventListener('click' , () => {
        moreText.style.display = 'inline';
        readMore.style.display = 'none';
    }
    );
};

const dotChanger = (activeDot, deactiveDot1, deactiveDot2) => {
    activeDot.style.height = '14px';
    activeDot.style.width = '14px';
    activeDot.style.background = 'white';
    deactiveDot1.style.height = '12px';
    deactiveDot1.style.width = '12px';
    deactiveDot1.style.background ='rgba(255, 255, 255, 0.5)';
    deactiveDot2.style.height = '12px';
    deactiveDot2.style.width = '12px';
    deactiveDot2.style.background ='rgba(255, 255, 255, 0.5)';
};

const animationReset = () => {

    greenLine.classList.remove("animatedLine");
    void greenLine.offsetWidth;
    greenLine.classList.add("animatedLine");

    content.classList.remove("animatedContent");
    void content.offsetHeight;
    content.classList.add("animatedContent");

    fade.classList.remove("halfBlackFadeIn");
    void fade.offsetHeight;
    fade.classList.add("halfBlackFadeIn");


};


const slideChanger = (slideNumber) => {
    let delay = setTimeout(slideNumber, 5000);


    dot1.addEventListener('click', () => {
        clearTimeout(delay);
        firstSlide();
        
    }
    );
    
    dot2.addEventListener('click', () => {
        clearTimeout(delay);
        secondSlide();
    }
    );
    
    dot3.addEventListener('click', () => {
        clearTimeout(delay);
        thirdSlide();
    }
    );
};


//preloading 
    slider.style.background = 'url("1.jpg") no-repeat center center fixed';
    slider.style.background = 'url("2.jpg") no-repeat center center fixed';
    slider.style.background = 'url("3.jpg") no-repeat center center fixed';


//slides

const firstSlide = () => {

    animationReset();
    dotChanger(dot1, dot2, dot3);

    slider.style.background = 'url("1.jpg") no-repeat center center fixed';
    h1.innerHTML = `Quisque vulputate mi consectetur`;
    h2.innerHTML = `Quisque vulputate mi consectetur`;
    p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod<span class="readMore">...</span><span class="moreText">, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.<span class="moreText">`;
       
    textViewer();
    slideChanger(secondSlide);
  

    
       
    
    };

const secondSlide = () => {

    animationReset();
    dotChanger(dot2, dot1, dot3);

    slider.style.background = 'url("2.jpg") no-repeat center center fixed';
    h1.innerHTML = `Pellentesque eleifend, dui sit amet`;
    h2.innerHTML = `Mauris diam fermentum massa.`;
    p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod<span class="readMore">...</span><span class="moreText">, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.</span>`;
   
    textViewer();   
    slideChanger(thirdSlide);

    };


const thirdSlide = () => {

    animationReset();
    dotChanger(dot3, dot2, dot1);

    slider.style.background = 'url("3.jpg") no-repeat center center fixed';
    h1.innerHTML = `Nam rhoncus nec nibh sit amet`;
    h2.innerHTML = `Donec mauris dolor, suscipit a felis auctor.`;
    p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod<span class="readMore">...</span><span class="moreText">, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.</span>`;

    
    textViewer();
    slideChanger(firstSlide);

};

//run

firstSlide();








const header = (entries) => {
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    }
}


const observer = new IntersectionObserver(header);

const items=document.getElementsByClassName('start-animation');

for(const item of items){
    observer.observe(item);
}

const bottom = (entries) => {
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
    }
}


const observer2 = new IntersectionObserver(bottom);

const items2=document.getElementsByClassName('start-animation2');

for(const item of items2){
    observer2.observe(item);
}
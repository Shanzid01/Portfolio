export const isElementInViewport= (elem)=> {
    let el=document.getElementsByClassName(elem)[0];
    if(!el) return false;
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
};
export const doParallax=(elem, factor, property="top")=>{
    let timer=null;
    window.addEventListener('scroll', ()=>{
        if(!isElementInViewport(elem)) return;
        if(timer!==null)  clearTimeout(timer);
        timer = setTimeout(()=> {
            document.getElementsByClassName(elem)[0].style[property]=-(window.pageYOffset*factor)+"px";
        }, 0);
    });
}
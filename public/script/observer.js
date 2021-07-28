const fade = document.querySelectorAll('.fade')
const slideIn = document.querySelectorAll('.slideIn')
const slideDowns = document.querySelectorAll('.slidedown')
const standStill = document.querySelectorAll('.standstill')
// console.log(slideIn.length);

const slideOption = { 
    threshold:0.4,
    rootMargin:"-20px -50px 0px 0px"

}
const slideObserver = new IntersectionObserver((entries, slideObserver)=>{

    entries.forEach(entry =>{
       if(!entry.isIntersecting){
            return;
       }else{
        //    console.log(entry.target);
           entry.target.classList.add("appearOnslide")
           slideObserver.unobserve(entry.target)
       }
    })


    


}, slideOption)



fade.forEach(fader =>{
    slideObserver.observe(fader)

})
slideIn.forEach(slide =>{
    slideObserver.observe(slide)
    
})
slideDowns.forEach(slideDown =>{
    slideObserver.observe(slideDown)
    
})
standStill.forEach(stand =>{
    slideObserver.observe(stand)
    
})
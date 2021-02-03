// change active link on stroll
const navLink = document.querySelectorAll("nav, ul li ");
const sections = document.querySelectorAll("section")

window.addEventListener("scroll", () =>{
    let current = "";
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHight / 3)){
            current = section.getAttribute('id')
           
        }
})
   
     navLink.forEach(li =>{
         li.classList.remove('active');
            if(li.classList.contains(current)){
                li.classList.add('active')
            }
     })
})


// background on scroll
const header = document.getElementById("header")
const menu = document.getElementById("bar")
const ul = document.querySelector("ul")
const clickToRemove = document.querySelector(".clickToRemove")

const cancelNaav = document.getElementById("cancel")
window.addEventListener("scroll", ()=>{
    if(pageYOffset > 50){
        header.classList.add("backgroundOnStroll")
    }else{
        header.classList.remove("backgroundOnStroll")
       

    }
})


// menubar
menu.addEventListener("click", (e)=>{
        ul.classList.add("toggleNav")
            clickToRemove.classList.add("showTab")
            cancelNaav.classList.add("showTab")
                menu.classList.add("remove")
})

cancelNaav.addEventListener("click", (e)=>{
        ul.classList.remove("toggleNav")
            clickToRemove.classList.remove("showTab")
            cancelNaav.classList.remove("showTab")
                menu.classList.remove("remove")
})
    


clickToRemove.addEventListener("click", (e)=>{
       ul.classList.remove("toggleNav")
         clickToRemove.classList.remove("showTab")
         menu.classList.remove("remove")
         cancelNaav.classList.remove("showTab")

    
})

    
    

    // pageloader
    
    window.addEventListener("load", fadeIn);
        const loader = document.querySelector(".loader");   
        function fadeIn(){
        loader.classList.add("removeLoader");
}

// testimonias counters
// html dom
const counters = document.querySelectorAll(".counters")
// speed
const speed = 1500
// loop through counter

counters.forEach(counter =>{
    // function to help us run our counter anytime
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-nr')
        const count = +counter.innerHTML
        const inc = target / speed
        
        if(count < target){
            counter.innerHTML = Math.ceil(count + inc)
            setTimeout(updateCounter, 2)

        }else{
            counter.innerHTML = target
        }
    }

    updateCounter()
})






























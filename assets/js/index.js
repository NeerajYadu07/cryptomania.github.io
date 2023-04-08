// <=======================COUNTER==============================>

const workSection=document.querySelector('.section-work-data');
  const workObserver=new IntersectionObserver((entries,observer)=> {
    const [entry]=entries;
    
    if(!entry.isIntersecting)return;
  const counterNum=document.querySelectorAll(".counter-numbers");
  const speed = 200;
  
  counterNum.forEach((currElem)=>{
    
    const updateNumber=()=>{
      const targetNum=parseInt(currElem.dataset.number);
      const initialNum=parseInt(currElem.innerText);
      var incrementNum=Math.trunc(targetNum/speed);
      console.log(incrementNum);
      if(incrementNum==0){
        incrementNum=0.01;
      }
      if(initialNum<targetNum){
        currElem.innerText=`${initialNum+incrementNum}+`;
        setTimeout(updateNumber,10);
      }

    }
    updateNumber();
  });
  observer.unobserve(workSection);
},{root:null,threshold:0});
workObserver.observe(workSection);

// <=======================COUNTER==============================>


// <=======================RESPOSIVE SIDE NAVBAR==============================>

const observer=new IntersectionObserver((entries)=> {
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show');

          }
        })
        
        
      });
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
      
// <=======================RESPOSIVE SIDE NAVBAR==============================>


// <=======================MARKET DATA API FETCH==============================>


var baseUrl = "https://api.coinranking.com/v2/coins";
var apiKey = "coinrankingfb24642d1dcd13d5505af74a3b37403a16dfabc1a19af735";

fetch(`${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
  })
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;
        var i=0;
        for(i=0;i<8;i++){
          document.querySelector(`.img-${i+1}`).src = `${coinsData[i].iconUrl}`; 
          document.querySelector(`.name-${i+1}`).innerHTML = `${coinsData[i].name}`; 
          document.querySelector(`.mc-${i+1}`).innerHTML = `$ ${coinsData[i].marketCap}`; 
          document.querySelector(`.lp-${i+1}`).innerHTML = `$ ${coinsData[i].price}`; 
          var ch=coinsData[i].change;
          if(ch>0){
            document.querySelector(`.change-${i+1}`).classList.add("green");
            document.querySelector(`.change-${i+1}`).innerHTML = `+${coinsData[i].change}%`; 
          }
          else{
            document.querySelector(`.change-${i+1}`).classList.add("red");
            document.querySelector(`.change-${i+1}`).innerHTML = `${coinsData[i].change}%`;
          }
          
        }
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

// <=======================MARKET DATA API FETCH==============================>

// <=======================STICKY NAVBAR==============================>

const headerElem=document.querySelector('.header');
  const mobile_nav=document.querySelector('.mobile-navbar-btn');
  
  mobile_nav.addEventListener('click',()=>{
    headerElem.classList.toggle("active");
  })
  const serviceSection = document.querySelector('.section-hero');
    const intobserver=new IntersectionObserver((entries)=> {
      const ent=entries[0];
      console.log(ent);
      !ent.isIntersecting?
      document.body.classList.add("sticky"):document.body.classList.remove("sticky");
    },{root:null,threshold:0});
    intobserver.observe(serviceSection);

// <=======================STICKY NAVBAR==============================>

// <=======================SCROLL TO TOP==============================>


const heroSection=document.querySelector(".section-hero");
const footerElement=document.querySelector(".section-footer");
  const scrollElement= document.createElement("div");
  scrollElement.classList.add("scrollTop-style");
  scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
  footerElement.after(scrollElement);
  const scrollTop=()=>{
    heroSection.scrollIntoView({behavior:"smooth"});
  }
  scrollElement.addEventListener("click",scrollTop);
  
  // <=======================SCROLL TO TOP==============================>
  
  // <=======================SWIPER==============================>
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "",
    spaceBetween: 30,
    autoplay:{
      delay:1500,
      disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const myJsMedia=(widthSize)=>{
    if(widthSize.matches){
       new Swiper(".mySwiper", {
        slidesPerView: "1",
        spaceBetween: 30,
        autoplay:{
          delay:1500,
            disableOnInteraction:false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
    }
    else{
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "2",
        spaceBetween: 30,
        autoplay:{
          delay:1500,
          disableOnInteraction:false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  const widthSize=window.matchMedia("(max-width:780px)");
  
  myJsMedia(widthSize);
  widthSize.addEventListener('change',myJsMedia);
  
  // <=======================SWIPER==============================>
  
  
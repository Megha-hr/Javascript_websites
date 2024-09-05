const cards_container=document.getElementById("cards-container");

let requesturl;

let category="general"


function generateui(articles){
  const cardContainer=document.getElementById("cards-container");
  cardContainer.innerHTML="";
  if(articles<1){
    var display=document.createElement("h1");
    display.textContent="Please use correct keyword";
    cardContainer.appendChild(display);
  }
  articles.forEach(article=>{

    if (!article.urlToImage) return;
    const card=document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click",()=>{
      window.open(article.url,"_blank");
    });
    
   const truncatedTitle=article.title.length > 60 ?article.title.slice(0,60)+"...." :article.title;
    
    card.innerHTML=`  <img src="${article.urlToImage || "https://via.placeholder.com/400x200"}" alt="${article.title}">
                <div class="card-detail">
                <h3>${truncatedTitle}</h2>
                    <p> ${article.description || article.content || ""}</p>
                   
            </div>`
            cardContainer.appendChild(card);
  })

}




async function getData(category) {
    try {
      const response = await fetch(`http://localhost:3000/newsapi?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data.articles);
      generateui(data.articles)
    } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    let navList="null";
   function updateCategory(id){
     category=id;
      getData(category);
      // let selectedList =document.getElementById("id");
      // navList?.classList.remove("active");
      // selectedList?.classList.add("active");
      

    }


    

    function serachBox()
    {
      let input=document.getElementsByClassName("search-input")[0].value;
      getData(input);

    }

function init(){
    cards_container.innerHTML="";
    getData(category);
}

window.onload=()=>{

    init();
}

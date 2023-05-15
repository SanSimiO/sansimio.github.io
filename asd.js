let suma=0;

for(let i=0;i<=5;i++){

  suma=suma+i;

}

console.log(i);

fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-04-15&sortBy=publishedAt&apiKey=721d89c76b3d4add865d6dd43d0cbbd9') 
    .then(response => response.json()) 
    .then(data =>{ 
        console.log(data)
    let cad=``
    for(let noticia of data.articles  ){
        cad= cad +  `
        <h2>${noticia.title}</h2>
        <p>${noticia.description}</p>
        <img  width="400" src="${noticia.urlToImage}"  alt="${noticia.title}">
        <br>`        
    }
    console.log(cad)
    document.querySelector("#noticias").innerHTML=cad
    }
    );



    const { createApp } = Vue

    createApp({
      data() {
        return {
          noticias:[],
          url:'https://newsapi.org/v2/everything?q=tesla&from=2023-04-15&sortBy=publishedAt&apiKey=721d89c76b3d4add865d6dd43d0cbbd9'
        }
      },
      methods: {
      
          fetchData(url) { 
             
             fetch(url)
              .then(response => response.json())
              .then(data => {
                console.log(data)
                this.noticias=data.articles
                console.log(this.noticias)
           })
            .catch(error=>{
               alert("Ups... se produjo un error: "+ error);
               this.error=true
             })
        
        }
      },
      created() {
        this.fetchData(this.url)
      }
    

  }).mount('#app')

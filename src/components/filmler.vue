<template>
    <div>

       
       <h4>Filmler</h4>

       <br>    
        <input type="text" v-model="film" >
        <button @click="varmi">Ara</button>
       
        <br> 
        <br>
       <h4>Aranalar</h4>
        
        <a :href="this.vardır.Title">
        <img :src="this.vardır.Poster" :alt ="this.vardır"/> 
    <h4>{{this.vardır.Title}}<br/>{{this.vardır.Genre}}<br/>{{this.vardır.Year}} <br/>{{this.vardır.Runtime}} </h4>
        </a>
        <br> 
        <br>
        <br>   
        <hr>

    <a :href="y.Title" v-for="y in films" :key="y.Title">
    <img :src="y.Poster" :alt ="y"/> 
    <h4>{{y.Title}}<br/>{{y.Genre}}<br/>{{y.Year}} <br/>{{y.Runtime}} </h4>
    
    </a>
    </div>
</template>

<script>
export default {
    name :"filim-listesi",
    data(){
    return{
            l:0,
            films:[],
            Posters:[],
            Genre:[],
            Genre_Drama:[],
            Genre_Short:[],
            Genre_Comedy:[],
            film:"aaa",
            vardır:"",
    }
  },
  mounted(){
        this.getfilms()
    },

    methods:{
        
       async getfilms(){
           var i=3592;
            for(var a=0 ;a<40;a++ ){                                      // 4196de7d       //c29143d5 //d53f2e59
            const result =await fetch(`http://www.omdbapi.com/?i=tt672${i}&apikey=4196de7d`);
            i+=12;
            const data =await result.json()
            
            //console.log(result)
            if(data.Poster!="N/A"  && data.Title!=undefined ){
                this.Posters.push(data.Poster)
                this.films.push(data)
                this.Genre.push(data.Genre+"-->"+data.Title)
               
            }
            
            }
           
            
           this.getcategoriler()
            
        },
        getcategoriler(){
            this.films.forEach(x => {
               
                 var degisken=x.Genre
                 var parcala = degisken.split(",")
            
                        for(var h=0 ;h<parcala.length+1;h++ ){ 
                              
                                console.log(parcala[h])
                                if(parcala[h]==="Comedy" || parcala[h]===" Comedy"){
                                this.Genre_Comedy.push(x)
                                }
                                if(parcala[h]==="Drama" || parcala[h]===" Drama"){
                                this.Genre_Drama.push(x)
                                }
                                if(parcala[h]==="Short" || parcala[h]===" Short"){
                                this.Genre_Short.push(x)
                                }
                          }
                
            });
            console.log(this.Genre_Comedy.length);
          
        },
        varmi(){
           this.films.forEach(z => {
               console.log(this.film)
               if(z.Title===this.film){
                this.vardır=z;
                console.log(this.film)
               }
               
           });
            
        }
}
}
</script>
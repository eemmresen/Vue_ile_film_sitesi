<template>
    <div>
 <h4><h1>{{$route.params.id}}</h1> Detayları</h4> 
 <br>
 <br>
 <br>

    <img :src="Detay.Poster" :alt ="Detay"/> 
    <h4>{{Detay.Title}}<br/>imdb Puanı:{{Detay.imdbRating}}<br/>imdb Oy sayısı:{{Detay.imdbVotes}}<br/>{{Detay.Genre}}<br/>Yıl :{{Detay.Year}} <br/>Süre: {{Detay.Runtime}} </h4>
    <h4>Yönetmen : {{Detay.Director}}</h4>
    <h4>Yazar : {{Detay.Writer}}</h4>
    <h4>Oyuncular : {{Detay.Actors}}</h4>
    <h5> Özet : {{Detay.Plot}}</h5>
    </div>
</template>

<script>
export default {
    name :"Detay_Ekranı",
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
            Detay:""
    }
  },
  mounted(){
        this.Detayfilms()
    },

    methods:{
        
       async Detayfilms(){
                                             // 4196de7d       //c29143d5 //d53f2e59
            const result =await fetch(`http://www.omdbapi.com/?t=${this.$route.params.id}&apikey=4196de7d`);
          
            const data =await result.json()
            
         console.log(data)
           this.Detay=data
            
            }
           
            
          
            
        },
        
       
}


</script>
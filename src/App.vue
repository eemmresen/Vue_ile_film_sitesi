<template>
  <div id="app">
 <ul>
  <li><router-link to="/">Anasayfa</router-link></li>
  <li> <router-link to="/Comedy">Comedy</router-link></li>
  <li><router-link to="/Drama">Drama</router-link></li>
  <li><router-link to="/Short">Short</router-link></li>
   
</ul>
<br>

<router-view ></router-view>

    
  </div>
</template>







<script>




export default {
  name: 'App',
  components: {
   
  },
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
  

  
    
    
}

 //var degisken =data.Genre
                //var parcala = degisken.split(",")
                //this.Genre.push({ parcala: data.Title })
                //console.log(data.Poster)
                //example1.items.push({ message: 'Baz' })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style  scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #dddddd;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
}
</style>
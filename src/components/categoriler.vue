<template>
    <div>
        <ul>
  <li><a href="filmler.vue">Anasayfa</a></li>
  <li><a href="/Comedy">Comedy</a></li>
  <li><a href="#contact">Drama</a></li>
  <li><a href="#about">Short</a></li>
</ul>
    </div>
</template>

<script>
export default {
     name: 'categoriler',
}
</script>


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

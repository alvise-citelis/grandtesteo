<template>
    <div>
        <h3>sfesefsee  e</h3>
        <vue-scroll-snap >
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
        </vue-scroll-snap>
    </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
export default {
    components:{
        VueScrollSnap
    }
}
</script>

<style >

.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    height: 100vh;
    border: solid 3px #276
}    

  .scroll-snap-container {
    height: 100vh;
    width: 100vw;
  }

  .item:nth-child(2) {
    height: 30vh !important;
    background: #276;
  }

</style>
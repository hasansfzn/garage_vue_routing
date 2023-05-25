<script setup></script>

<template>
  <section class="aboutBannerSection">
    <div class="content flex items-center justify-end text-right">
      <div class="content-items w-4/5 p-4">
        <h2 class="text-6xl my-4 font-semibold text-green-500">
          Car in our store is much more affortable, reliable, trustable
        </h2>
        <div class="space-y-4">
          <h2 class="text-5xl">We are the one to serve you well.</h2>
          <p class="text-lg text-justify w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo
            assumenda itaque sequi sed quisquam minima rerum tenetur aut rem,
            dignissimos qui veritatis corrupti odio, vitae voluptate tempora
            alias dicta. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veritatis quos praesentium vel laborum recusandae adipisci,
            enim illum eum sit illo asperiores quis sint, earum error dolores
            nam eligendi officia perferendis.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .aboutBannerSection {
    display: relative;
    background-image: url(../assets/carAbout.jpg);
    background-size: cover;
    background-position: center;
    height: 80vh;
  }

  .content {
    /* position: absolute; */
    /* top: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust opacity by modifying the last value (0.5 in this example) */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* 
    text-align: end;
    display: flex;
    align-items: center;
    justify-content: flex-end; */
  }
</style>

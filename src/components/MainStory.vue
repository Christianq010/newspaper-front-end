<template>
    <!-- Main Section -->
    <!-- Main Content Wrapper with image-->
        <div class="main-content-wrapper" 
            v-bind:style="{ 'background-image': 'url(' + mainSection[0].img + ')' }">
            <!-- Overlay -->
            <div class="main-content-overlay">
                <!-- Main Heading -->
                <div class="main-content-h1-w">
                    <router-link to="/article" tag="div">
                      <div class="main-content-h1">
                          {{mainSection[0].title}}
                      </div>
                    </router-link>
                </div>
                <!-- /end of Main heading -->
            </div>
            <!-- /end of Overlay -->
        </div>
        <!-- Main Content Wrapper -->
    <!-- /end of Main Section -->
</template>

<script>
export default {
  data: function() {
    return {
      mainSection: [
        {
          img: "https://img.huffingtonpost.com/asset/5b99d9903d00004d00bc14b6.jpeg",
          title: "ALGAE MESS SWAMPS RICK SCOTT"
        }
      ]
    };
  }
};
</script>

<style lang="scss">

@import "./../scss/main";

/* Main Section */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .main-content-wrapper {
    grid-row: 2 / 8;
    grid-column: 1 / -1;
    /* Styling */
    background-size: cover;
    background-position: 50% 50%;
    width: 100%;
  }
  .main-content-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent 100%);
  }
  /* Main Section Headline H1 */
  .main-content-h1-w {
    text-align: center;
  }
  .main-content-h1 {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    color: white;
    font-size: 3rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin-top: 4.5em;
  }
  .main-content-h1:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: $primary-color;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Main Section background Image*/
  .main-content-wrapper {
    grid-row: 2 / 8;
    grid-column: 1 / -1;
    /* height: 480px; */
    /* Styling */
    background-size: cover;
    background-position: 50% 50%;
    height: 480px;
  }
  .main-content-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      transparent 100%
    );
  }
  /* Main Section Headline H1 */
  .main-content-h1-w {
    width: 980px;
    margin: 0 auto;
    text-align: center;
  }
  .main-content-h1 {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    color: white;
    font-size: 5.125rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .main-content-h1:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: $primary-color;
  }
}
</style>

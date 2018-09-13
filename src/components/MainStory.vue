<template>
    <!-- Main Section -->
    <!-- Main Content Wrapper with image-->
        <div class="main-content-wrapper" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
            <!-- Overlay -->
            <div class="main-content-overlay">
                <!-- Main Heading -->
                <div class="main-content-h1-w">
                    <div class="main-content-h1">
                        {headline}
                    </div>
                </div>
                <!-- /end of Main heading -->
            </div>
            <!-- /end of Overlay -->
        </div>
        <!-- Main Content Wrapper -->
    <!-- /end of Main Section -->
</template>

<script>
import data from "./../data.json";

export default {
    data: function() {
        return {
            image: "https://img.huffingtonpost.com/asset/5b99d9903d00004d00bc14b6.jpeg",
            headline: "ALGAE MESS SWAMPS RICK SCOTT"
        }
    }
};


</script>

<style lang="scss">
/* Main Section */
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent 100%);
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
  text-decoration-color: #0dbe98;
}
</style>

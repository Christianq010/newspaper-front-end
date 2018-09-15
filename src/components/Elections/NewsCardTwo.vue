<template>  
    <!-- Election News Story Card Wrapper -->
    <section class="ne-two-story-card-wrapper">

        <!-- Election News Story Card Two  -->
        <div class="ne-two-story-card">

            <!-- Election News Story Card Img -->
            <div class="ne-two-story-card-img-wrapper">
                <img class="ne-two-story-card-img" v-bind:src="electioncard[0].img" />
            </div>
            <!-- /end of Election News Story Card Img -->

            <!-- Election News Story Card Details -->
            <div class="ne-two-story-card-details">
                <!-- Election News Story Card Link -->
                <a class="ne-two-story-card-link">
                    <!-- Election News Story Card Link Text-->
                    <div class="ne-two-story-card-text">
                        {{electioncard[0].title}}
                    </div>
                    <!-- /end of Election News Story Card Link Text-->
                </a>
                <!-- /end of Election News Story Card Link -->
            </div>
            <!-- /end of Election News Story Card Details -->
        </div>
        <!-- /end of Election News Story Card Two  -->

    </section>
    <!-- /end of Election News Story Two -->
</template>

<script>
export default {
    data: function() {
        return {
            electioncard: [
                {
                    title: "New York Voters Are About To Tell Us A Lot About The State Of The Resistance",
                    description: "Rick Tyler said that it's entirely possible for Cruz to lose the Texas Senate race.",
                    author: "By Ed Mazza",
                    img: "https://img.huffingtonpost.com/asset/5b9426a92000003a0734c492.jpeg",
                    id: "03",
                    article: "",
                    route: "/"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "./../../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .news-election-story-card {
    grid-row: 21 / 23;
    grid-column: 1 / -1;
  }
  .ne-one-story-card {
  }
  .ne-one-story-card-img-wrapper {
  }
  .ne-one-story-card-img {
    max-width: 100%;
  }
  .ne-one-story-card-details {
    padding: 0 1em 0 1em;
    margin: 1em 0;
  }
  .ne-one-story-card-link {
  }
  .ne-one-story-card-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.875rem;
    line-height: 2rem;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .ne-two-story-card-wrapper {
    grid-row: 19 / 21;
    grid-column: 7 / 11;
  }
  .ne-two-story-card {
    display: flex;
    flex-direction: row;
  }
  .ne-two-story-card-img-wrapper {
    width: 120%;
  }
  .ne-two-story-card-img {
    max-width: 100%;
  }
  .ne-two-story-card-details {
    padding: 0 1em 0 1em;
  }
  .ne-two-story-card-link:hover {
    text-decoration: underline;
  }
  .ne-two-story-card-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.275rem;
    line-height: 1.625rem;
  }

}
</style>

<template>
    <!-- Election News Story Card Wrapper -->
    <section class="ne-one-story-card-wrapper">

        <!-- Election News Story Card One  -->
        <div class="ne-one-story-card">

            <!-- Election News Story Card Img -->
            <div class="ne-one-story-card-img-wrapper">
                <img class="ne-one-story-card-img" v-bind:src="electioncard[0].img" />
            </div>
            <!-- /end of Election News Story Card Img -->

            <!-- Election News Story Card Details -->
            <div class="ne-one-story-card-details">
                <!-- Election News Story Card Link -->
                <a class="ne-one-story-card-link">
                    <!-- Election News Story Card Link Text-->
                    <div class="ne-one-story-card-text">
                        {{electioncard[0].title}}
                    </div>
                    <!-- /end of Election News Story Card Link Text-->
                </a>
                <!-- /end of Election News Story Card Link -->
            </div>
            <!-- /end of Election News Story Card Details -->
        </div>
        <!-- /end of Election News Story Card One  -->

    </section>
    <!-- /end of Election News Story One -->
</template>

<script>
export default {
    data: function() {
        return {
            electioncard: [
                {
                    title: "RNC Chair Says Republicans Have ’50-50′ Shot To Keep Control Of The House",
                    description: "Rick Tyler said that it's entirely possible for Cruz to lose the Texas Senate race.",
                    author: "By Ed Mazza",
                    img: "https://img.huffingtonpost.com/asset/5b96106a2000000b0b37bab3.png",
                    id: "02",
                    article: "",
                    route: "/"
                }
            ]
        }
    }
};
</script>

<style lang="scss">
@import "./../../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* News story left */
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
    font-family: $font-bold;
    font-size: 1.875rem;
    line-height: 2rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .ne-one-story-card-wrapper {
    grid-row: 19 / 21;
    grid-column: 2 / 7;
  }
  .ne-one-story-card {
    display: flex;
    flex-direction: row;
  }
  .ne-one-story-card-img-wrapper {
    width: 80%;
  }
  .ne-one-story-card-img {
    max-width: 100%;
  }
  .ne-one-story-card-details {
    padding: 0 1em 0 1em;
  }
  .ne-one-story-card-link:hover {
    text-decoration: underline;
  }
  .ne-one-story-card-text {
    font-family: $font-bold;
    font-size: 1.275rem;
    line-height: 1.625rem;
  }

}
</style>

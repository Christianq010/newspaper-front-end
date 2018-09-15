<template>
    <!-- News Section -->
    <!-- News Big Story -->
    <section class="news-election">

        <!-- Latest News Section -->
        <div class="ne-news-section">

            <!-- Latest News Title Box -->
            <div class="ne-news-title-box">

                <!-- Latest News Title Flag -->
                <div class="ne-news-title-flag">
                    <!-- Latest Title News Text -->
                    <div class="ne-news-title-text-box">
                        <h1 class="ne-news-title-text">ELECTIONS HQ</h1>
                    </div>
                    <!-- /end of Latest Title News Text -->
                </div>
                <!-- /end of Latest News Title Flag -->

                <!-- Latest News Title Line -->
                <div class="ne-news-title-line-box">
                    <div class="ne-news-title-line"></div>
                </div>
                <!-- /end of Latest News Title Line -->
            </div>
            <!-- /end of Latest News Title Box -->

            <!-- Latest News Content Card -->
            <div class="ne-news-content-card-wrapper">
                <div class="ne-news-content-card">
                    <!-- Latest news Content Card Image -->
                    <div class="ne-news-content-img-wrapper">
                        <img class="ne-news-content-img" v-bind:src="electionnews[0].img" />
                    </div>
                    <!-- /end of Latest news Content Card Image -->
                    <!-- Latest News Content Wrapper -->
                    <div class="ne-news-content-wrapper">
                        <!-- Latest News Content Headline -->
                        <div class="ne-news-content-headline">
                            <a class="ne-news-content-link">
                                <div class="ne-news-content-text">
                                    {{electionnews[0].title}}
                                </div>
                            </a>
                        </div>
                        <!-- Latest News Content Headline -->

                        <!-- Latest News Content Details -->
                        <div class="ne-news-content-details">
                            <!-- Latest News Content Details des-->
                            <div class="ne-news-content-des">
                                <a class="ne-news-content-des-link">
                                    <div class="ne-news-content-des-text">
                                        {{electionnews[0].description}}
                                    </div>
                                </a>
                            </div>
                            <!-- Latest News Content Details author-->
                            <div class="ne-news-content-author">
                                <a class="ne-news-content-author-link">
                                    <div class="ne-news-content-author-text">
                                        {{electionnews[0].author}}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- /end of Latest News Content Details -->
                    </div>
                    <!-- /end of Latest News Content Wrapper -->

                </div>
            </div>
            <!-- /end of Latest News Content Card -->

            <!-- /end of Latest News Section -->
            </div>

    </section>
    <!-- /end of News Big Story -->
</template>

<script>
export default {
    data: function() {
        return {
            electionnews: [
                {
                    title: "Former Ted Cruz Campaign Strategist Has A Wake-Up Call For His Old Boss",
                    description: "Rick Tyler said that it's entirely possible for Cruz to lose the Texas Senate race.",
                    author: "By Ed Mazza",
                    img: "https://img.huffingtonpost.com/asset/5b9bd6fe1f0000500020ffa8.jpeg",
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
  /* News Section */
  /* News Big Story */
  .news-election {
    grid-row: 18 / 21;
    grid-column: 1 / -1;
  }
  .ne-news-section {
    /* padding: 0 0.5em; */
  }
  .ne-news-title-box {
    display: grid;
    grid-template-columns: 4fr 5fr;
    grid-template-rows: 2.5em;
    margin: 0 0 1em 0;
  }
  .ne-news-title-text {
    font-family: $font-bold;
    font-size: 1.3725rem;
    font-style: italic;
  }
  /* New title line */
  .ne-news-title-line-box {
    padding: 1.8em 0.5em;
  }
  .ne-news-title-line {
    height: 3px;
    background: $black;
  }
  /* New title content */
  .ne-news-content-card-wrapper {
  }
  .ne-news-content-card {
    /* display: flex;
    flex-direction: row; */
    margin-bottom: 1em;
  }
  .ne-news-content-img-wrapper {
  }
  .ne-news-content-img {
    max-width: 100%;
  }
  .ne-news-content-wrapper {
    padding: 0 0.8em;
  }
  .ne-news-content-headline {
  }
  .ne-news-content-link {
  }
  .ne-news-content-text {
    display: none;
  }
  .ne-news-content-details {
  }
  .ne-news-content-des {
    margin: 0.5em 0;
  }
  .ne-news-content-des-link {
  }
  .ne-news-content-des-text {
    font-family: $font-bold;
    font-size: 1.875rem;
    line-height: 2rem;
  }
  .ne-news-content-author {
  }
  .ne-news-content-author-link {
  }
  .ne-news-content-author-text {
    color: $secondary-color;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {

  /* News Section */
  /* News Big Story */
  .news-election {
    grid-row: 16 / 19;
    grid-column: 2 / 11;
  }
  .ne-news-section {
    /* padding: 0 0.5em; */
  }
  .ne-news-title-box {
    display: grid;
    grid-template-columns: 2fr 9fr;
    grid-template-rows: 2.5em;
    margin: 0 0 1em 0;
  }
  .ne-news-title-text {
    font-family: $font-bold;
    font-size: 1.3725rem;
    font-style: italic;
  }
  /* New title line */
  .ne-news-title-line-box {
    padding: 1.8em 0.5em;
  }
  .ne-news-title-line {
    height: 3px;
    background: $black;
  }
  /* New title content */
  .ne-news-content-card-wrapper {
  }
  .ne-news-content-card {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }
  .ne-news-content-img-wrapper {
  }
  .ne-news-content-img {
    width: 448px;
  }
  .ne-news-content-wrapper {
    padding: 0 0.8em;
  }
  .ne-news-content-headline {
  }
  .ne-news-content-link:hover {
    text-decoration: underline;
  }
  .ne-news-content-text {
    font-family: $font-bold;
    font-size: 2.375rem;
    line-height: 2.375rem;
    letter-spacing: 0.5px;
  }
  .ne-news-content-details {
  }
  .ne-news-content-des {
    margin: 0.5em 0;
  }
  .ne-news-content-des-link {
  }
  .ne-news-content-des-text {
    font-family: $font-light;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
  .ne-news-content-author {
  }
  .ne-news-content-author-link {
  }
  .ne-news-content-author-text {
    color: $secondary-color;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }

}
</style>

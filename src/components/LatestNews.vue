<template>
    <!-- Section 3 (right) -->
    <section class="sec-3-right">

        <!-- Latest News Section -->
        <div class="ln-news-section">

            <!-- Latest News Title Box -->
            <div class="ln-title-box">
                <!-- Latest News Title Flag -->
                <div class="ln-title-flag">
                    <!-- Latest News Title Text -->
                    <div class="ln-title-text-box">
                        <h1 class="ln-title-text">Latest News</h1>
                    </div>
                </div>
                <!-- /end of Latest News Title Flag -->
                <!-- Latest News Title line -->
                <div class="ln-title-line-box">
                    <div class="ln-title-line"></div>
                </div>
                <!-- /end of Latest News Title line -->
            </div>
            <!-- /end of Latest News Title Box -->

            <!-- Latest News Card Wrapper -->
            <div class="ln-news-card-wrapper">

                <!-- Latest News Card  -->
                <div class="ln-news-card" v-for="lncard in latestnews" v-bind:key="lncard.id">
                    <!-- Latest News Card Details -->
                    <div class="ln-news-card-details">
                        <!-- Latest News Card Text Wrapper  -->
                        <div class="ln-news-card-text-wrapper">
                            <!-- Latest news Card Link -->
                            <a class="ln-news-card-link">
                                <div class="ln-news-card-text">
                                    {{lncard.title}}
                                </div>
                            </a>
                        </div>
                        <!-- /end of Latest News Card Text Wrapper  -->
                        <!-- Latest News Card Time Text -->
                        <div class="ln-news-card-time-text">
                            <div class="ln-news-time-text">
                                {{lncard.time}}
                            </div>
                        </div>
                        <!-- /end of Latest News Card Time Text -->
                    </div>
                    <!-- /end of Latest News Card Details -->
                </div>
                <!-- /end of Latest News Card  -->

            </div>
            <!-- /end of Latest News Card Wrapper -->

        </div>
        <!-- /end of Latest News Section -->

    </section>
    <!-- /end of Section 3 (right) -->
</template>

<script>
export default {
    data: function() {
        return {
            latestnews: [
                {
                    title: "The Funniest Tweets From Parents This Week (Sept. 1-7)",
                    time: "18 minutes ago",
                    route: "",
                    id: "01"
                },
                {
                    title: "'Grey’s Anatomy’ Casts Its First Gay Male Surgeon Character",
                    time: "33 minutes ago",
                    route: "",
                    id: "02"
                },
                {
                    title: "More Than 400 Kids Separated From Parents At The Border Are Still In Government Custody",
                    time: "40 minutes ago",
                    route: "",
                    id: "03"
                },
                {
                    title: "‘If We Think In Our Native Language, Then Most Dogs Would Be Thinking In Barks’",
                    time: "44 minutes ago",
                    route: "",
                    id: "04"
                },
                {
                    title: "Read More Updates From Brett Kavanaugh’s Confirmation Hearing",
                    time: "1 hour ago",
                    route: "",
                    id: "05"
                },
                {
                    title: "Ryan Reynolds Started A Twitter Beef With Paddington Bear And All Hell Broke Loose",
                    time: "3 hours ago",
                    route: "",
                    id: "05"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "./../scss/main";

/* Main Section */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* ------------------------------ */
  /* Section Three - Right */
  .sec-3-right {
    grid-row: 16 / 18;
    grid-column: 1 / -1;
  }
  /* Styling */
  /* Latest News */
  .ln-news-section {
    padding: 0 0.5em;
  }
  .ln-title-box {
    display: grid;
    grid-template-columns: 3fr 6fr;
    grid-template-rows: 2.5em;
  }
  .ln-title-flag {
  }
  .ln-title-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .ln-title-line-box {
    padding: 1.5em 0.5em;
  }
  .ln-title-line {
    height: 3px;
    background: #000000;
  }
  /* LN news cards */
  .ln-news-card-wrapper {
    margin: 0 0 1em 0;
  }
  .ln-news-card-details {
    padding: 0.5em;
    border-bottom: 0.8px solid #b6b6b6;
  }
  .ln-news-card-details:hover {
    background-color: #f4fbf9;
  }
  .ln-news-card-text-wrapper {
    margin: 0.5em 0;
  }
  .ln-news-card-link:hover {
    text-decoration: underline;
  }
  .ln-news-card-text {
  }
  .ln-news-card-time-text {
    margin: 0 0 0.5em 0;
  }
  .ln-news-time-text {
    font-family: "ProximaNovaLight", Arial, Geneva, sans-serif;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    letter-spacing: 0.5px;
    color: #757575;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Section Three - Right */
  .sec-3-right {
    grid-row: 8 / 15;
    grid-column: 11 / 14;
    /* height: 550px; */
  }
  /* Latest News */
  .ln-news-section {
    padding: 0 0.5em;
  }
  .ln-title-box {
    display: grid;
    grid-template-columns: 3fr 6fr;
    grid-template-rows: 2.5em;
  }
  .ln-title-flag {
  }
  .ln-title-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .ln-title-line-box {
    padding: 1.5em 0.5em;
  }
  .ln-title-line {
    height: 3px;
    background: #000000;
  }
  /* LN news cards */
  .ln-news-card-wrapper {
    margin: 0 0 1em 0;
  }
  .ln-news-card-details {
    padding: 0.5em;
    border-bottom: 0.8px solid #b6b6b6;
  }
  .ln-news-card-details:hover {
    background-color: #f4fbf9;
  }
  .ln-news-card-text-wrapper {
    margin: 0.5em 0;
  }
  .ln-news-card-link:hover {
    text-decoration: underline;
  }
  .ln-news-card-text {
  }
  .ln-news-card-time-text {
    margin: 0 0 0.5em 0;
  }
  .ln-news-time-text {
    font-family: "ProximaNovaLight", Arial, Geneva, sans-serif;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    letter-spacing: 0.5px;
    color: #757575;
  }

}

</style>

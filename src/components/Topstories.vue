<template>
    <!-- Section 1 (left) -->
    <section class="sec-1-left">

        <!-- Top Stories Title Box -->
        <div class="top-title-box">
            <!-- Top Stories Title Flag -->
            <div class="top-title-flag">
                <!-- Top title text -->
                <h1 class="top-title-text">TOP STORIES</h1>
            </div>
            <!-- /end of Top Stories Title Flag -->
        </div>
        <!-- /end of Top Stories Title Box -->

        <!-- Top Stories Content -->
        <div class="top-stories-content">

            <!-- Main card content -->
            <div class="tp-main-card" v-for="topstory in topstorytitles" v-bind:key="topstory.id">
                <!-- Main card img -->
                <div class="tp-main-card-img-wrapper">
                    <img class="tp-main-card-img" v-bind:src="topstory.img" />
                </div>
                <!-- Main card details -->
                <div class="tp-main-card-details">
                    <a class="tp-main-card-link">
                        <div class="tp-main-card-text">
                            {{topstory.title}}
                        </div>
                    </a>
                </div>
                <!-- /end of Main card details -->
            </div>
            <!-- /end of Main card content -->

            <!-- Small Cards Content Wrapper -->
            <div class="tp-small-cards-wrapper">

                <!-- Small card -->
                <div class="tp-small-card" v-for="card in topstorycards" v-bind:key="card.id">
                    <!-- Small card image -->
                    <div class="tp-small-card-img-wrapper">
                        <img class="tp-small-card-img" :src="card.img" />
                    </div>
                    <!-- Small card details -->
                    <div class="tp-small-card-details">
                        <a class="tp-small-card-link">
                            <div class="tp-small-card-link">
                                {{card.title}}
                            </div>
                        </a>
                    </div>
                </div>
                <!-- /end of Small card -->

            </div>
            <!-- /end of Small Cards Content  -->

        </div>
        <!-- /end of Top Stories Content -->

    </section>
    <!-- /end of Section 1 (left) -->
</template>

<script>
// import data from "./../data.json";
// title: data.topstories[0].topstorytitle[0].title

export default {
    data: function() {
        return {
            topstorytitles: [
                {
                    title: "Homosexuality Is No Longer A Crime, India Supreme Court Rules",
                    img: "https://img.huffingtonpost.com/asset/5b90c97e190000930a5037dd.jpeg?cache=uomucfvpjh&ops=432_243,quality_75",
                    type: "card-header",
                    id: "001",
                    route: "/"
                }
            ],
            topstorycards: [
                {
                    title: "WHO: After Ebola Death In Urban Area, ‘No One Should Be Sleeping Well Tonight’",
                    type: "card",
                    img: "https://img.huffingtonpost.com/asset/5b907348190000930a5037b4.jpeg?cache=j9fm3vzlob&ops=96_96,quality_75",
                    id: "003",
                    route: "/"
                },
                {
                    title: "Trump Speculates About His Impeachment: ‘If It Does Happen, It’s Your Fault’",
                    type: "card",
                    img: "https://img.huffingtonpost.com/asset/5b99b72a3d00004e00bc14a2.jpeg?cache=jhbbcsajou&ops=96_96,quality_75",
                    id: "004",
                    route: "/"
                },
                {
                    title: "Fox News Analyst Goes Off-Script: Trump Lacks ‘The Temperament’ To Be President",
                    type: "card",
                    img: "https://img.huffingtonpost.com/asset/5b99f27e3d00004e00bc14cb.jpeg?cache=9qcn4dvblv&ops=96_96,quality_75",
                    id: "005",
                    route: "/"
                },
                {
                    title: "Trump Criticizes Sean Hannity At Rally Like A Best Bud Would",
                    type: "card",
                    img: "https://img.huffingtonpost.com/asset/5b99ab1124000033009008f9.jpeg?cache=n7skwfl2ty&ops=96_96,quality_75",
                    id: "006",
                    route: "/"
                },
                {
                    title: "Family Who Survived Vegas Attack Says Their Comfort Dog Has Been Shot, Killed",
                    type: "card",
                    img: "https://img.huffingtonpost.com/asset/5b9a01813d00002d00bc14d9.jpeg?cache=g1hg0dgf5h&ops=96_96,quality_75",
                    id: "007",
                    route: "/"
                }
            ]
            
        }
    }
};
</script>

<style lang="scss">
@import "./../scss/main";

/* Main Section */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Section One - Left */
  .sec-1-left {
    grid-row: 8 / 14;
    grid-column: 1 / -1;
  }
  .top-title-box {
    padding: 1em;
    background-color: $white;
  }
  .top-title-flag {
    font-style: italic;
    background: #f83371;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
  }
  .top-title-flag h1 {
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .tp-main-card-img {
    max-width: 96px;
    height: 96px;
    justify-content: flex-start;
  }
  .tp-main-card-details {
    border-bottom: none;
  }
  .tp-main-card-link:hover {
    text-decoration: underline;
  }
  .tp-main-card-text {
    /* font-family: "ProximaNovaLight", Arial, Geneva, sans-serif; */
    margin-bottom: 1em;
  }
  .tp-small-cards-wrapper {
    padding: 0 0 0.5em 0;
  }
  .tp-small-card-img {
    margin-bottom: 1em;
  }
  .tp-main-card,
  .tp-small-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid #b6b6b6;
    margin: 1em;
  }
  .tp-small-card-link:hover {
    text-decoration: underline;
  }
  .tp-main-card-details,
  .tp-small-card-details {
    padding: 0 0.8em;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Section One - Left */
  .sec-1-left {
    grid-row: 8 / 14;
    grid-column: 2 / 5;
    /* height: 680px; */
    /* Styling */
  }
  .top-title-box {
    padding: 1em;
    background-color: $white;
  }
  .top-title-flag {
    font-style: italic;
    background: #f83371;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
  }
  .top-title-flag h1 {
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .tp-main-card-img {
    max-width: 100%;
  }
  .tp-main-card-details {
    border-bottom: 0.8px solid #b6b6b6;
  }
  .tp-main-card-link:hover {
    text-decoration: underline;
  }
  .tp-main-card-text {
    /* font-family: "ProximaNovaLight", Arial, Geneva, sans-serif; */
    margin-bottom: 1em;
  }
  .tp-small-cards-wrapper {
    padding: 1.3rem 0;
  }
  .tp-small-card-img {
    margin-bottom: 1em;
  }
  .tp-small-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid #b6b6b6;
    margin-bottom: 1em;
  }
  .tp-small-card-link:hover {
    text-decoration: underline;
  }
  .tp-small-card-details {
    padding: 0 0.8em;
  }

}
</style>
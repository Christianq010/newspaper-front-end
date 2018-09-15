<template>  
    <!-- Trending Stories Section -->
    <section class="ts-section">
        <!-- Trending Section Wrapper -->
        <div class="ts-section-wrapper">
            <!-- Trending Title Box -->
            <div class="ts-title-box">
                <!-- Trending Title Flag-->
                <div class="ts-title-flag">
                    <!-- Trending Title Text Box -->
                    <div class="ts-title-text-box">
                        <h1 class="ts-title-text">Trending</h1>
                    </div>
                    <!-- /end of Trending Title Text Box -->
                </div>
                <!-- /end of Trending Title Flag-->
                <!-- Trending Title Line -->
                <div class="ts-title-line-box">
                    <div class="ts-title-line"></div>
                </div>
                <!-- /end of Trending Title Line -->
            </div>
            <!-- /end of Trending Title Box -->

            <!-- Trending Card Wrapper -->
            <div class="ts-card-wrapper">

                <!-- Trending Card -->
                <div class="ts-card" v-for="card in trendingvideos" v-bind:key="card.id">
                    <!-- Small card details -->
                    <div class="ts-card-details">
                        <a class="ts-card-link">
                            <div class="ts-card-link-text">
                                {{card.title}}
                            </div>
                        </a>
                    </div>
                    <!-- Small card image -->
                    <div class="ts-card-img-wrapper">
                        <img class="ts-card-img" v-bind:src="card.img">
                    </div>
                </div>
                <!-- /end of Trending Card -->

            </div>
            <!-- /end of Trending Card Wrapper -->
        </div>
        <!-- /end of Trending Section Wrapper -->
    </section>
    <!-- /end of Trending Stories Section --> 
</template>

<script>
export default {
    data: function() {
        return {
            trendingvideos: [
                {
                    title: "This Pregnant Model Went Into Labor During Rihanna’s NYFW Show",
                    trendingRank: "01",
                    img: "https://img.huffingtonpost.com/asset/5b9aa1d326000035007ee82b.jpeg?cache=5iudxiuyxa&ops=160_160",
                    id: "01",
                    route: "/"
                },
                {
                    title: "Twitter Is Pissed Michael Kors Showed Traditional Mexican Sweaters At NYFW",
                    trendingRank: "02",
                    img: "https://img.huffingtonpost.com/asset/5b9be740240000320053019a.jpeg?cache=wobdup4nfg&ops=160_160",
                    id: "02",
                    route: "/"
                },
                {
                    title: "Arizona Man Faked Down Syndrome And Hired Caregivers To Change His Diapers: Police",
                    trendingRank: "03",
                    img: "https://img.huffingtonpost.com/asset/5b9c0fac250000320035eda7.png?cache=eytiuoczim&ops=160_160",
                    id: "03",
                    route: "/"
                },
                {
                    title: "Chrissy Teigen Calls John Legend An A**hole In Sweet Anniversary Post",
                    trendingRank: "04",
                    img: "https://img.huffingtonpost.com/asset/5a21743a1400009747b6aee2.jpeg?cache=svfsw1l1mc&ops=160_160",
                    id: "04",
                    route: "/"
                },
                {
                    title: "An Entire Senior Class Aces Picture Day By Hilariously Dressing Up For Their IDs",
                    trendingRank: "05",
                    img: "https://img.huffingtonpost.com/asset/5b9bf0c12400003000947cfe.png?cache=9xmzg2cyfc&ops=160_160",
                    id: "05",
                    route: "/"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "./../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
/* Trending stories section */
  .ts-section {
    grid-row: 29 / 31;
    grid-column: 1 / -1;
  }
  .ts-section-wrapper {
    padding: 0 0.5em;
  }
  .ts-title-box {
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 2.5em;
  }
  .ts-title-flag {
  }
  .ts-title-text-box {
  }
  .ts-title-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .ts-title-line-box {
    padding: 1.5em 0.5em;
  }
  .ts-title-line {
    height: 3px;
    background: #000000;
  }
  .ts-card-wrapper {
  }
  .ts-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid #b6b6b6;
    padding: 1em 0;
  }
  .ts-card-details:hover {
    text-decoration: underline;
  }
  .ts-card-link {
  }
  .ts-card-link-text {
    padding: 0 1em;
  }
  .ts-card-img-wrapper {
    height: 65px;
    cursor: pointer;
  }
  .ts-card-img {
    height: 100%;
    /* border-radius: 50%; */
    background-size: cover;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
.ts-section {
    grid-row: 21 / 25;
    grid-column: 11 / 14;
  }
  .ts-section-wrapper {
    padding: 0 0.5em;
  }
  .ts-title-box {
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 2.5em;
  }
  .ts-title-flag {
  }
  .ts-title-text-box {
  }
  .ts-title-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .ts-title-line-box {
    padding: 1.5em 0.5em;
  }
  .ts-title-line {
    height: 3px;
    background: #000000;
  }
  .ts-card-wrapper {
  }
  .ts-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid #b6b6b6;
    padding: 1em 0;
  }
  .ts-card-details:hover {
    text-decoration: underline;
  }
  .ts-card-link {
  }
  .ts-card-link-text {
    padding: 0 1em;
  }
  .ts-card-img-wrapper {
    height: 65px;
    cursor: pointer;
  }
  .ts-card-img {
    height: 100%;
    /* border-radius: 50%; */
    background-size: cover;
  }
}
</style>

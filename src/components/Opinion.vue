<template>
    <!-- Opinions Section -->
    <section class="opinion-section">
        <!-- Opinion Section wrapper -->
        <div class="os-section-wrapper">
            <!-- Opinion Title Section Box -->
            <div class="os-title-box">
                <!-- Opinion title flag -->
                <div class="os-title-flag">
                    <!-- Opinion Title text -->
                    <div class="os-title-text-box">
                        <h1 class="os-title-text">Opinion</h1>
                    </div>
                </div>
                <!-- /end of Opinion title flag -->
                <!-- Opinion Title Line -->
                <div class="os-title-line-box">
                    <div class="os-title-line"></div>
                </div>
                <!-- /end of Opinion Title Line -->
            </div>
            <!-- /end of Opinion Title Section Box -->

            <!-- Opinion Card Wrapper -->
            <div class="os-card-wrapper">

                <!-- Opinion card -->
                <div class="os-card" v-for="card in opinion" v-bind:key="card.id">
                    <!-- Opinion Card image -->
                    <div class="os-card-img-wrapper">
                        <img class="os-card-img" v-bind:src="card.img" />
                    </div>
                    <!-- /end of Opinion Card image -->

                    <!-- Opinion card Details Box-->
                    <div class="os-card-details-box">
                        <!-- Opinions Card Details Des -->
                        <a class="os-card-details-link">
                            <div class="os-card-details-text">
                                {{card.title}}
                            </div>
                        </a>
                        <!-- /end of Opinions Card Details Des -->
                        <!-- Opinion Card Author -->
                        <div class="os-card-author-link">
                            <div class="os-card-author-text">
                                By {{card.author}}, {{card.role}}
                            </div>
                        </div>
                        <!-- /end of Opinion Card Author -->
                    </div>
                    <!-- /end of Opinion card Details Box-->
                </div>
                <!-- /end of Opinion card -->

            </div>
            <!-- /end of Opinion Card Wrapper -->
        </div>
        <!-- /end of Opinion Section wrapper -->
    </section>
    <!-- /end of Opinions Section -->
</template>

<script>
export default {
  data: function() {
    return {
      opinion: [
        {
          title:
            "Sweden Shows No Country Is Immune To Far-Right, Anti-Immigrant Backlash",
          type: "opinion",
          author: "Robert Kuttner",
          role: "Columnist",
          img:
            "https://img.huffingtonpost.com/asset/5aaeaa882000008106eb242e.jpg?ops=100_100",
          id: "003",
          route: "/"
        },
        {
          title:
            "Trump’s Denial Of Puerto Rican Death Toll Is An Insult To My Father’s Memory.",
          type: "opinion",
          author: "Keith Hernandez",
          role: "Guest Writer",
          img:
            "https://img.huffingtonpost.com/asset/5b9abcf31f00005c0020a4c0.jpg?ops=100_100",
          id: "004",
          route: "/"
        },
        {
          title:
            "The GOP Rode The Trump Train, And Now It’s Derailing",
          type: "opinion",
          author: "Michelangelo Signorile",
          role: "Columnist",
          img:
            "https://img.huffingtonpost.com/asset/55b4f8ac1d00001c00142a30.jpg?ops=100_100",
          id: "006",
          route: "/"
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
  .opinion-section {
    grid-row: 25 / 27;
    grid-column: 1 / -1;
  }
  .os-section-wrapper {
    padding: 0 0.5em;
  }
  .os-title-box {
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 2.5em;
  }
  .os-title-flag {
  }
  .os-title-text-box {
  }
  .os-title-text {
    font-family: $font-bold;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .os-title-line-box {
    padding: 1.5em 0.5em;
  }
  .os-title-line {
    height: 3px;
    background: $black;
  }
  .os-card-wrapper {
  }
  .os-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid $border-bottom;
    padding: 1em 0;
  }
  .os-card-img-wrapper {
    height: 65px;
    cursor: pointer;
  }
  .os-card-img {
    /* width: 100%; */
    height: 100%;
    border-radius: 50%;
    background-size: cover;
  }
  .os-card-details-box {
  }
  .os-card-details-link:hover {
    text-decoration: underline;
  }
  .os-card-details-text {
    padding: 0 1em;
  }
  .os-card-author-link {
  }
  .os-card-author-text {
    padding: 0 1em;
    margin: 1em 0;
    font-family: "ProximaNovaLight", Arial, Geneva, sans-serif;
    color: $time-text;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
      .opinion-section {
    grid-row: 13 / 19;
    grid-column: 11 / 14;
  }
  .os-section-wrapper {
    padding: 0 0.5em;
  }
  .os-title-box {
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 2.5em;
  }
  .os-title-flag {
  }
  .os-title-text-box {
  }
  .os-title-text {
    font-family: $font-bold;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .os-title-line-box {
    padding: 1.5em 0.5em;
  }
  .os-title-line {
    height: 3px;
    background: #000000;
  }
  .os-card-wrapper {
  }
  .os-card {
    display: flex;
    flex-direction: row;
    border-bottom: 0.8px solid $border-bottom;
    padding: 1em 0;
  }
  .os-card-img-wrapper {
    height: 65px;
    cursor: pointer;
  }
  .os-card-img {
    /* width: 100%; */
    height: 100%;
    border-radius: 50%;
    background-size: cover;
  }
  .os-card-details-box {
  }
  .os-card-details-link:hover {
    text-decoration: underline;
  }
  .os-card-details-text {
    padding: 0 1em;
  }
  .os-card-author-link {
  }
  .os-card-author-text {
    padding: 0 1em;
    margin: 1em 0;
    font-family: $font-light;
    color: $time-text;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }

}
</style>



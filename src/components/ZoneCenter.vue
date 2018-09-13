<template>
    <section class="sec-2-center">
        <!-- Huffing Post Zone Center -->
        <div class="hp-z-center" v-for="zonecard in zonecenter" v-bind:key="zonecard.id">

            <!-- Huffing Post Zone Center Box-->
            <div class="hp-z-center-box">
                <!-- HP Zone Center Image Wrapper -->
                <div class="hp-z-center-img-wrapper">
                    <img class="hp-z-center-img" v-bind:src="zonecard.img" />
                </div>
                <!-- /end of HP Zone Center Image Wrapper -->

                <!-- HP Zone Center Headline -->
                <div class="hp-z-center-headline">
                    <a class="hp-z-center-link">
                        <div class="hp-z-center-text">
                            {{zonecard.title}}
                        </div>
                    </a>
                </div>
                <!-- /end of HP Zone Center Headline -->

                <!-- HP ZONE Center Details -->
                <div class="hp-z-center-details">
                    <!-- HP Zone Center Details des-->
                    <div class="hp-z-center-des">
                        <a class="hp-z-center-des-link">
                            <div class="hp-z-center-des-text">
                                {{zonecard.description}}
                            </div>
                        </a>
                    </div>
                    <!-- HP Zone Center Details author-->
                    <div class="hp-z-center-author">
                        <a class="hp-z-center-author-link">
                            <div class="hp-z-center-author-text">
                                {{zonecard.author}}
                            </div>
                        </a>
                    </div>
                </div>
                <!-- /end of HP ZONE Center Details -->
            </div>
            <!-- /end of Huffing Post Zone Center Box-->

        </div>
        <!--/end of Huffing Post Zone Center -->

    </section>
    <!-- /end of Section 2 (center) -->
</template>

<script>
export default {
  data: function() {
    return {
      zonecenter: [
        {
          title: "TRUMP RAGES! TURN THE OP-ED WRITER IN!",
          img: "https://img.huffingtonpost.com/asset/5b908c48200000430034c0b8.jpeg?cache=ypobmtpvrf&ops=936_526,prog,quality_75",
          description:
            "Trump Calls Anonymous Writer Of New York Times ‘Resistance’ Piece ‘Gutless’",
          author: "Doha Madani",
          route: "",
          id: "01"
        },
        {
          title: "WHY CAN’T KAVANAUGH ANSWER THIS SENATOR’S QUESTION?",
          img: "https://img.huffingtonpost.com/asset/5b90cf5719000014035037de.jpeg?cache=ftxbdqziw4&ops=936_526,prog,quality_75",
          description:
            "Kamala Harris Grilled Kavanaugh About His Discussions Of The Russia Probe",
          author: "Nick Visser",
          route: "",
          id: "02"
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
  /* ------------------------------ */
  /* Section Two - Center */
  .sec-2-center {
    grid-row: 14 / 16;
    grid-column: 1 / -1;
  }
  /* Huffing Post Zone Center */
  .hp-z-center {
  }
  .hp-z-center-box {
  }
  .hp-z-center-img-wrapper {
  }
  .hp-z-center-img {
    max-width: 100%;
  }
  .hp-z-center-headline {
    padding: 0.5em 1em;
  }
  .hp-z-center-link {
  }
  .hp-z-center-text {
    font-family: $font-bold;
    font-size: 2.375rem;
    line-height: 2.375rem;
    letter-spacing: 0.5px;
  }
  /* HP Zone Center Details */
  .hp-z-center-details {
    padding: 0.5em 1em;
  }
  .hp-z-center-des {
    margin: 0.5em 0;
  }
  .hp-z-center-des-link {
  }
  .hp-z-center-des-text {
    font-family: $font-light;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
  .hp-z-center-author {
    margin: 0.8em 0;
  }
  .hp-z-center-author-link {
  }
  .hp-z-center-author-text {
    color: $secondary-color;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* ------------------------------- */
  /* Section Two - Center */
  .sec-2-center {
    grid-row: 8 / 15;
    grid-column: 5 / 11;
    /* height: 850px; */
  }
  /* Huffing Post Zone Center */
  .hp-z-center {
  }
  .hp-z-center-box {
    padding: 1em;
  }
  .hp-z-center-img-wrapper {
  }
  .hp-z-center-img {
    max-width: 100%;
  }
  .hp-z-center-headline {
  }
  .hp-z-center-link {
  }
  .hp-z-center-text {
    font-family: $font-bold;
    font-size: 2.375rem;
    line-height: 2.375rem;
    letter-spacing: 0.5px;
  }
  /* HP Zone Center Details */
  .hp-z-center-details {
  }
  .hp-z-center-des {
    margin: 0.5em 0;
  }
  .hp-z-center-des-link {
  }
  .hp-z-center-des-text {
    font-family: $font-light;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
  .hp-z-center-author {
    margin: 0.8em 0;
  }
  .hp-z-center-author-link {
  }
  .hp-z-center-author-text {
    color: $secondary-color;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    font-weight: normal;
  }
}
</style>

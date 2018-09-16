<template>                
    <!-- In the News Section -->
    <section class="itn-section">
        <!-- ITN Title Box -->
        <div class="itn-title-box">
            <!-- TV section Title Flag -->
            <div class="itn-title-flag">
                <!-- TV section Title Text -->
                <h1 class="itn-title-text">In the news</h1>
                <!-- /end of TV section Title Text -->
            </div>
            <!-- /end of TV section Title Flag -->
        </div>
        <!-- /end of ITN Title Box -->

        <!-- ITN Card Wrapper -->
        <div class="itn-content-card-wrapper">
            <div class="itn-content-card" v-for="card in inTheNews" v-bind:key="card.id">
                <!-- ITN Content Card Image -->
                <div class="itn-content-img-wrapper">
                    <img class="itn-content-img" v-bind:src="card.img">
                </div>
                <!-- /end of ITN Content Card Image -->

                <!-- ITN Details Wrapper -->
                <div class="itn-details-wrapper">

                    <!-- ITN Content Details category-->
                    <div class="itn-content-category">
                        <a class="itn-content-category-link">
                            <div class="itn-content-category-text">
                                {{card.category}}
                            </div>
                        </a>
                    </div>
                    <!-- /end of ITN Content Details Category -->
                    <!-- ITN Content Wrapper -->
                    <div class="itn-content-wrapper">
                        <!-- ITN Content Headline -->
                        <div class="itn-content-headline">
                            <a class="itn-content-link">
                                <div class="itn-content-text">
                                    {{card.title}}
                                </div>
                            </a>
                        </div>
                        <!-- ITN Content Headline -->

                        <!-- ITN Content Details -->
                        <div class="itn-content-details">
                            <!-- ITN Content Details des-->
                            <div class="itn-content-des">
                                <a class="itn-content-des-link">
                                    <div class="itn-content-des-text">
                                        {{card.description}}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- /end of ITN Content Details -->
                    </div>
                    <!-- /end of ITN Content Wrapper -->

                </div>
                <!-- /end of ITN Details Wrapper -->

            </div>
        </div>
        <!-- /end of ITN Card Wrapper -->

    </section>
    <!-- /end of In the News Section -->
</template>

<script>
export default {
    data:function() {
        return {
            inTheNews: [
                {
                    title: "U.S., Cuba Officials Discuss Mysterious Embassy Health Attacks On Diplomats",
                    category: "POLITICS",
                    author: "Robert Kuttner",
                    description: "The illnesses were initially described as the result of sonic attacks or health attacks.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9afa922000003100fd098d.jpeg?cache=u5pdw4yzpz&ops=336_189,quality_75",
                    id: "0010",
                    route: "/"
                },
                {
                    title: "Trump Fumes Over Puerto Rico Toll As Death Count Rises For Hurricane Florence",
                    category: "POLITICS",
                    author: "Robert Kuttner",
                    description: "At least five deaths so far have been linked to Florence.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9c82212000003000fd9910.jpeg?cache=mg9swshvjc&ops=336_189,quality_75",
                    id: "0011",
                    route: "/"
                },
                {
                    title: "Bob Woodward Defends Trump Reporting: I’ll Release Tapes If Sources Are Ready",
                    category: "POLITICS",
                    author: "Jenna Amatulli",
                    description: "Woodward told radio host Hugh Hewitt that he’d produce the tapes if asked.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9bd23326000033007f41ad.jpeg?cache=13swffwtk7&ops=336_189,quality_75",
                    id: "0012",
                    route: "/"
                },
                {
                    title: "The Hurricane Shark Hoax Is Back Again For Florence ― Don’t Get Hooked",
                    category: "WEIRD NEWS",
                    author: "Andy McDonald",
                    description: "We're utterly fascinated with the idea of sharks being in places they shouldn't be.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9c21bb2100003100c50180.jpeg?cache=i35v51wwvu&ops=336_189,quality_75",
                    id: "0013",
                    route: "/"
                },
                {
                    title: "Natural Disasters Are Part Of Life. Here’s How To Talk To Kids About Them.",
                    category: "PARENTING",
                    author: "Caroline Bologna",
                    description: "Here are some age-appropriate ways to discuss these traumatic events.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9bfd96250000330035e6e2.jpeg?cache=rq4sxotfl1&ops=336_189,quality_75",
                    id: "0014",
                    route: "/"
                },
                {
                    title: "Shelters Fill Up As Hurricane Florence Bears Down",
                    category: "U.S. NEWS",
                    author: "Sebastian Murdock",
                    description: "“Don’t relax. Don’t get complacent,” North Carolina Gov. Roy Cooper said.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9bec251f00002c00210738.jpeg?cache=8ccb23deda&ops=336_189,quality_75",
                    id: "0015",
                    route: "/"
                },
                {
                    title: "The World’s Richest Man Came To Washington, D.C., And It Was Gross",
                    category: "BUSINESS",
                    author: "Arthur Delaney",
                    description: "Billionaire David Rubenstein had easy questions for Jeff Bezos at the Economic Club of Washington.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9be2e4250000350035dd58.jpeg?ops=336_189,quality_75",
                    id: "0016",
                    route: "/"
                },
                {
                    title: "Eric Trump Praises ‘Law Enforcement’; Twitter Can’t Help But Snigger",
                    category: "POLITICS",
                    author: "Mary Papenfuss",
                    description: "What about the FBI? What about Robert Mueller? What about french fries?",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9c7ce92100003000c52521.jpeg?cache=hgncl65pjb&ops=336_189,quality_75",
                    id: "0017",
                    route: "/"
                },
                {
                    title: "Trump Can Message You Directly On FEMA Alert System To Be Tested Next Week",
                    category: "TECH",
                    author: "Mary Papenfuss",
                    description: "It's the first nationwide test of a \"presidential alert\" for emergencies.",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9ca882240000510094c4a1.jpeg?cache=udifua0xth&ops=336_189,quality_75",
                    id: "0018",
                    route: "/"
                },
                {
                    title: "Larry Nassar Accuser: ‘Faith Communities Can Be Breeding Grounds For Abusers’",
                    category: "WOMEN",
                    author: "Carol Kuruvilla",
                    description: "Rachael Denhollander says power imbalances can take root in churches when celebrity preachers become “untouchable.”",
                    img:
                        "https://img.huffingtonpost.com/asset/5b9be81a24000030009479bf.jpeg?cache=kvbgjavgnm&ops=336_189,quality_75",
                    id: "0019",
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
.itn-section {
    grid-row: 31 / 33;
    grid-column: 1 / -1;
    margin: 1em 0;
  }
  .itn-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: $white;
  }
  .itn-title-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    background: $third-color;
    color: $white;
    height: 2em;
  }
  .itn-title-text {
    text-transform: uppercase;
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: $font-bold;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .itn-content-card-wrapper {
    margin: 1em 0 0 0;
  }
  .itn-content-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 0.8px solid $border-bottom;
  }
  .itn-content-img-wrapper {
  }
  .itn-content-img {
    width: 100%;
  }
  .itn-details-wrapper {
    padding: 0 1em;
  }
  .itn-content-category {
  }
  .itn-content-category-link {
  }
  .itn-content-category-text {
    font-family: $font-bold;
    font-size: 0.8125rem;
    letter-spacing: 1.4px;
  }
  .itn-content-wrapper {
  }
  .itn-content-headline {
    padding: 0.3em 0;
  }
  .itn-content-headline:hover {
    text-decoration: underline;
  }
  .itn-content-link {
  }
  .itn-content-text {
    font-family: $font-bold;
    font-size: 1.75rem;
    line-height: 1.875rem;
    letter-spacing: 0.01em;
  }
  .itn-content-details {
  }
  .itn-content-des {
  }
  .itn-content-des-link {
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
.itn-section {
    grid-row: 24 / 27;
    grid-column: 2 / 11;
    margin: 1em 0;
  }
  .itn-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: $white;
  }
  .itn-title-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    background: $third-color;
    color: $white;
    height: 2em;
    width: 30%;
  }
  .itn-title-text {
    text-transform: uppercase;
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: $font-bold;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .itn-content-card-wrapper {
    margin: 1em 0 0 0;
  }
  .itn-content-card {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 0.8px solid $border-bottom;
  }
  .itn-content-img-wrapper {
  }
  .itn-content-img {
    width: 212px;
    height: 122px;
  }
  .itn-details-wrapper {
    padding: 0 1em;
  }
  .itn-content-category {
  }
  .itn-content-category-link {
  }
  .itn-content-category-text {
    font-family: $font-bold;
    font-size: 0.8125rem;
    letter-spacing: 1.4px;
  }
  .itn-content-wrapper {
  }
  .itn-content-headline {
    padding: 0.3em 0;
  }
  .itn-content-headline:hover {
    text-decoration: underline;
  }
  .itn-content-link {
  }
  .itn-content-text {
    font-family: $font-bold;
    font-size: 1.75rem;
    line-height: 1.875rem;
    letter-spacing: 0.01em;
  }
  .itn-content-details {
  }
  .itn-content-des {
  }
  .itn-content-des-link {
  }
}
</style>

<template>
    <!-- Footer -->
    <footer class="footer">
        <!-- Footer wrapper -->
        <div class="footer-wrapper">
            <!-- Footer Details-wrapper -->
            <div class="footer-details-wrapper">
                <!-- Footer Details -->
                <div class="footer-details">
                    <!-- Logo Box -->
                    <div class="footer-logo-box">
                        <a class="footer-logo-link">
                            <img class="footer-logo" src="./../assets/img/HuffPostHero.svg" />
                        </a>
                    </div>
                    <!-- /end of Logo Box -->
                    <!-- Footer Links Box -->
                    <div class="footer-links-box">
                        <!-- Footer Links Border Box -->
                        <div class="footer-link-border-box">

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">About</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Careers</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Company News</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Contact</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Legal</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">FAQ</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Editorial Standards</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Our Partners</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Comment Policy</a>
                            </div>
                            <!-- /end of Footer Link box -->

                            <!-- Footer Link box-->
                            <div class="footer-link-box">
                                <!-- Footer Link -->
                                <a class="footer-link" href="">Privacy Policy</a>
                            </div>
                            <!-- /end of Footer Link box -->

                        </div>
                        <!-- /end of Footer Links Border Box -->
                    </div>
                    <!-- /end of Footer Links Box -->

                    <!-- Footer TM box-->
                    <div class="footer-tm-box">
                        <!-- Footer TM -->
                        <p class="footer-tm-text">© 2018 Mic Network Inc. All rights reserved.</p>
                    </div>
                    <!-- /end of Footer TM box-->
                </div>
                <!-- /end of Footer Details -->
            </div>
            <!-- /end of Footer Details-wrapper  -->
        </div>
        <!-- /end of Footer wrapper -->
    </footer>
    <!-- /end of Footer -->
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .footer {
    grid-row: 33 / 35;
    grid-column: 1 / -1;
    background-color: #000000;
  }
  .footer-wrapper {
    padding: 3em;
  }
  .footer-details-wrapper {
  }
  .footer-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-start; */
  }
  .footer-logo-box {
    margin: 0 0 2em 0;
  }
  .footer-logo-link {
  }
  .footer-logo {
    height: auto;
    width: 225px;
  }
  .footer-link-border-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 2em 0;
  }
  .footer-links-box {
    border-bottom: 0.8px solid #b6b6b6;
  }
  .footer-link-box {
    margin: 0 0 0.8em 0;
  }
  .footer-link {
    color: #aaa;
    font-size: 0.75rem;
    letter-spacing: 1.3px;
    padding-right: 40px;
    text-decoration: none;
  }
  .footer-line {
  }
  .footer-tm-box {
  }
  .footer-tm-text {
    color: #aaa;
    font-size: 0.8125rem;
    letter-spacing: 0.4px;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .footer {
    grid-row: 27 / 31;
    grid-column: 1 / -1;
    background-color: #000000;
  }
  .footer-wrapper {
    padding: 5em 21em;
  }
  .footer-details-wrapper {
  }
  .footer-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .footer-logo-box {
    margin: 0 0 2em 0;
  }
  .footer-logo-link {
  }
  .footer-logo {
    height: auto;
    width: 225px;
  }
  .footer-link-border-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 2em 0;
  }
  .footer-links-box {
    border-bottom: 0.8px solid #b6b6b6;
  }
  .footer-link-box {
    margin: 0 0 0.8em 0;
  }
  .footer-link {
    color: #aaa;
    font-size: 0.75rem;
    letter-spacing: 1.3px;
    padding-right: 40px;
    text-decoration: none;
  }
  .footer-line {
  }
  .footer-tm-box {
  }
  .footer-tm-text {
    color: #aaa;
    font-size: 0.8125rem;
    letter-spacing: 0.4px;
  }
}
</style>

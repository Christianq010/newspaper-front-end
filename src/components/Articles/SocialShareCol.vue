<template>
    
    <!-- Section 1 (left) -->
    <section class="sec-1-left">

        <!-- Social Icons Content -->
        <div class="social-icons-content">

            <!-- Social Icons Box-->
            <div class="social-icons-box">

                <!-- Social Icon card -->
                <div class="social-icons-card">
                    <!-- Facebook Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#3b5999" width="38" height="38" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                </div>

                <!-- Social Icon card -->
                <div class="social-icons-card">
                    <!-- Twitter Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#55acef" width="38" height="38" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                    </svg>
                </div>

                <!-- Social Icon card -->
                <div class="social-icons-card">
                    <!-- Mail Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#666" width="38" height="38" viewBox="0 0 24 24">
                        <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                    </svg>
                </div>


            </div>
            <!-- /end of Social Icons Box-->

        </div>
        <!-- /end of Social Icons Content -->

    </section>
    <!-- /end of Section 1 (left) -->
        
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "./../../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .sec-1-left {
    grid-row: 2 / 6;
    grid-column: 1 / -1;
  }
  .social-icons-content {
    display: none;
    margin: 2.5em 0 0 0;
  }
  .social-icons-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .social-icons-card {
    border-radius: 50%;
    box-shadow: 0px 9px 77px -15px rgba(0,0,0,0.95);
    margin: 0.2em 0;
  }
  .social-icons-card:hover {
    cursor: pointer;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .sec-1-left {
    grid-row: 2 / 8;
    grid-column: 2 / 3;
    /* height: 680px; */
    /* Styling */
  }
  .social-icons-content {
    margin: 2.5em 0 0 0;
  }
  .social-icons-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .social-icons-card {
    border-radius: 50%;
    box-shadow: 0px 9px 77px -15px rgba(0,0,0,0.95);
    margin: 0.2em 0;
  }
  .social-icons-card:hover {
    cursor: pointer;
  }

}
</style>


<template>
    <!-- Navbar elements -->
    <div class="navbar">

        <!-- Wrapper for all nav content -->
        <div class="nav-wrapper">

            <!-- Hamburger Menu Content -->
            <Slide left>
                <!-- Our Sidebar Component -->
                <sidebar />
            </Slide>
            <!-- /End of Hamburger menu -->

            <!-- Our main Huff Post logo -->
            <div class="logo">
                <a>
                  <router-link to="/">
                      <img src="./../../assets/img/HuffPostHero.svg">
                  </router-link>
                </a>
            </div>
            <!-- /end of main logo -->

            <!-- Social icons  -->
            <div class="social-icons">
                <!-- World Icon Toggle Switch -->
                <div class="toggle-icn" @click="showModal = true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#666" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z" />
                    </svg>
                </div>
                <!-- Main icons -->
                <div class="main-icn">
                    <!-- Mail Icon -->
                    <a class="icon-mail">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="38" height="38" viewBox="0 0 24 24">
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                        </svg>
                    </a>
                    <!-- Facebook Icon -->
                    <a class="icon-fb">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="38" height="38" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                    </a>
                    <!-- Twitter Icon -->
                    <a class="icon-twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="38" height="38" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                        </svg>
                    </a>
                    <!-- Instagram Icon -->
                    <a class="icon-insta">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="38" height="38" viewBox="0 0 24 24">
                            <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                        </svg>
                    </a>
                </div>
            </div>
            <!-- /end of Social icons  -->

            <!-- Language Selection -->
            <div class="language-selection">
                <span class="language-editions-text" @click="showModal = true">EDITION</span>
            </div>
            <!-- /end of Language Selection -->

            <!-- The modal component, passed in the prop -->
            <div v-if="showModal" @close="showModal = false">
              <!-- Styles are imported from LangModal component -->
              <div id="modal-template">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <!-- The Modal Container -->
                            <div class="modal-container">
                                <!-- The Modal Close Icon -->
                                <div class="modal-default-button" @click="showModal = false">
                                      &times;
                                </div>
                                <div class="modal-header">
                                    <slot name="header">
                                    <a class="modal-text">English</a>
                                    </slot>
                                </div>

                                <div class="modal-body">
                                    <slot name="body">
                                    <a class="modal-text">Sinhala</a>
                                    </slot>
                                </div>

                                <div class="modal-footer">
                                    <slot name="footer">
                                    <a class="modal-text">Tamil</a>
                                    </slot>
                                </div>

                            </div>
                            <!-- /end of The Modal Container -->
                        </div>
                    </div>
                </transition>
              </div>
            </div>
            <!-- /end of Modal Component -->

        </div>
        <!-- /end of Wrapper for all nav content -->

    </div>
    <!-- /end of Navbar -->
</template>

<script>
// components
import Sidebar from './Sidenav';
import LangModal from './LangModal';
// Hamburger menu
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide,
    Sidebar,
    LangModal
  },
  data: function() {
    return {
      showModal: false
    }
  }
};
</script>

<style lang="scss">
@import "./../../scss/main";

// Hamburger menu package for both devices
.bm-menu {
  background-color: $sidenav-bg !important;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Navbar */
  .navbar {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    height: auto;
    background-color: black;
  }
  .nav-wrapper {
    display: grid;
    grid-template-columns: 3fr 8fr 3fr;
    grid-template-rows: 100px;
    grid-gap: 3px;
  }
  .menu-icn-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .menu-icn svg {
    fill: #666;
    width: 25px;
    font-size: 1em;
    padding-left: 1em;
  }
  .menu-icn:hover svg {
    fill: $primary-color;
    cursor: pointer;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Main Logo */
  .logo img {
    height: 2em;
    width: 10em;
    display: block;
  }
  /* Toggle Icon for mobile */
  /* Social Icons */
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-icn {
    display: none;
  }
  .language-selection {
    display: none;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .navbar {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    /* height: 78px; */
    /* Navbar styling */
    height: auto;
    background-color: black;
    width: 100%;
    /* position: fixed; */
    top: 0;
    margin-bottom: 0;
  }
  .nav-wrapper {
    display: grid;
    grid-template-columns: 3fr 8fr 2fr 1fr;
    grid-template-rows: 95px;
    grid-gap: 3px;
  }
  .menu-icn-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .menu-icn {
    fill: #666;
    width: 25px;
    font-size: 1.75em;
    padding-left: 1em;
  }
  .menu-icn:hover svg {
    fill: $primary-color;
    cursor: pointer;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    height: auto;
    width: 225px;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-icons svg {
    margin: 0 10px 0 0;
    border-radius: 100%;
  }
  .icon-mail svg:hover {
    fill: $primary-color;
  }
  .icon-fb svg:hover {
    fill: #3b5998;
  }
  .icon-twitter svg:hover {
    fill: #1da1f2;
  }
  .icon-insta svg:hover {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }
  /* Toggle icon off on mobile */
  .toggle-icn {
    display: none;
  }
  .language-selection {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .language-editions-text {
    color: white;
    font-size: 0.625rem;
    letter-spacing: 1.3px;
  }
  .language-editions-text:hover {
    color: $primary-color;
    cursor: pointer;
  }
}

</style>

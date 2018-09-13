<template>
    <div class="sidenav-box">
        <!-- Start of Economics Section -->
        <div class="econ-wrapper">
            <!-- Econ Headline Box -->
            <div class="econ-headline-box">
                <a class="econ-headline-text" href="#"> 
                    <span>Economics</span> 
                </a>
            </div>
            <!-- /end of Econ Headline Box -->
            <!-- Econ Child Box -->
            <div class="econ-child-box">
                <!-- Econ Child elements -->
                <div class="econ-child-div">
                    <li class="econ-child">
                        <a>US News</a>
                    </li>
                    <li class="econ-child">
                        <a>World News</a>
                    </li>
                    <li class="econ-child">
                        <a>Business News</a>
                    </li>
                </div>
                <!-- /end of Econ Child elements -->
            </div>
            <!-- /end of Econ Child Box -->
        </div>
        <!-- /End of Economics Section -->

        <!-- Start of Politics Section -->
        <div class="econ-wrapper">
            <!-- Politics Headline Box -->
            <div class="econ-headline-box">
                <a class="econ-headline-text" href="#"> 
                    <span>Politics</span> 
                </a>
            </div>
            <!-- /end of Politics Headline Box -->
            <!-- Politics Child Box -->
            <div class="econ-child-box">
                <!-- Politics Child elements -->
                <div class="econ-child-div">
                    <li class="econ-child">
                        <a>Adam Smith</a>
                    </li>
                    <li class="econ-child">
                        <a>Marx</a>
                    </li>
                    <li class="econ-child">
                        <a>Shumpter</a>
                    </li>
                </div>
                <!-- /end of Politics Child elements -->
            </div>
            <!-- /end of Politics Child Box -->
        </div>
        <!-- /End of Politics Section -->

        <!-- Start of Opinion Section -->
        <div class="econ-wrapper">
            <!-- Opinion Headline Box -->
            <div class="econ-headline-box">
                <a class="econ-headline-text" href="#"> 
                    <span>Opinion</span> 
                </a>
            </div>
            <!-- /end of Opinion Headline Box -->
            <!-- Opinion Child Box -->
            <div class="econ-child-box">
                <div>
                    <p class="econ-p-text">Expert analysis and commentary to make sense of today's biggest stories.</p>
                </div>
                <!-- Opinion Child elements -->
                <div class="econ-child-div">
                    <li class="econ-child">
                        <a>US News</a>
                    </li>
                    <li class="econ-child">
                        <a>World News</a>
                    </li>
                </div>
                <!-- /end of Opinion Child elements -->
            </div>
            <!-- /end of Opinion Child Box -->
        </div>
        <!-- /End of Opinion Section -->

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./../../scss/main";

.sidenav-box {
  background-color: $sidenav-bg;
  display: flex;
  flex-direction: column;
}

.econ-headline-box {
    margin: 1em 0;
}

.econ-headline-text {
  font-family: $font-bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 0.09375em;
  line-height: 1.25rem;
  text-decoration: none;
  color: #ffffff;
  font-style: italic;
  margin-bottom: 20px;
  border-bottom: solid 3px $primary-color;
}

.econ-child-div {
    list-style: none;
}

.econ-p-text {
    font-size: 1rem;
    color: #757575;
    letter-spacing: 0.01875em;
    line-height: 1.0625rem;
}

.econ-child {
    font-size: 1rem;
    text-decoration: none;
    line-height: 1.0625rem;
    letter-spacing: 0.01875em;
    color: #ffffff;
}

.econ-child:hover{
    text-decoration: underline;
}
</style>

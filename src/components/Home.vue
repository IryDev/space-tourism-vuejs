<script>
import bckgHome from "../assets/home/bckgHome.png"


export default {
    data() {
        return {
            bckgHome
        }
    }
}

</script>
<template>
    <video autoPlay loop muted>
        <source src="../assets/home/background-home.mp4" type="video/mp4" />
    </video>

    <img :src="bckgHome" alt="" class="background">

    <section class="home-container container">
        <div class="explore">
            <router-link to="/destination">explore</router-link>
        </div>

        <div>
            <h2>So, you want to travel to</h2>
            <h1>Space</h1>
            <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of it.
                Well sit back, and relax because we’ll give you a truly out of this
                world experience!
            </p>
        </div>
    </section>
</template>
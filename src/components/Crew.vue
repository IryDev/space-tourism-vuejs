<script>
import data from "../../data.json"
import { ref } from "vue";

import anousheh from "../assets/crew/image-anousheh-ansari.webp"
import douglas from "../assets/crew/image-douglas-hurley.webp"
import mark from "../assets/crew/image-mark-shuttleworth.webp"
import victor from "../assets/crew/image-victor-glover.webp"

let crewIndex = ref(0)

function setCrewIndex(index) {
    crewIndex.value = index
}

function crewChange(e) {
    setCrewIndex(e.target.dataset.index);
    var list = document.querySelectorAll(".planet");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove("active");
    }
    e.target.classList.add("active");
}

export default {
    data() {
        return {
            crewData: data.crew,
            crewIndex,
            crewMember: [douglas, mark, victor, anousheh,]
        }
    },

    methods: {
        setCrewIndex,
        crewChange
    }
}

</script>


<template>
    <video autoPlay muted loop>
        <source src="../assets/crew/background-crew.mp4" />
    </video>

    <section className="crew-container">
        <h2>
            <span>02</span> meet your crew
        </h2>
        <div class="crew-grid">
            <div className="hero-img">
                <img :src="crewMember[crewIndex]" :alt="crewData[crewIndex].name" />
                <div className="line"></div>
            </div>

            <div class="crew-info">
                <div class="selector-container">
                    <div v-for="(crew, index) in crewMember" :key="index" :data-index="index" v-on:click="crewChange"
                        class="selector"></div>
                </div>

                <div class="crew-member">
                    <h2>{{ crewData[crewIndex].role }}</h2>
                    <h1>{{ crewData[crewIndex].name }}</h1>
                    <p>{{ crewData[crewIndex].bio }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
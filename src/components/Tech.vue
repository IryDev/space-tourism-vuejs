<script>
import data from '../../data.json'

import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";

import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg";

import { ref } from "vue";

const techIndex = ref(0)

function setTechIndex(index) {
    techIndex.value = index
}

function techChange(e) {
    setTechIndex(e.target.dataset.index);
    var list = document.querySelectorAll(".planet");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove("active");
    }
    e.target.classList.add("active");
}

export default {
    data() {
        return {
            techIndex,
            techData: data.technology,

            techs: [{
                src: launch,
                srcLand: launchLand
            },
            {
                src: spaceport,
                srcLand: spaceportLand
            },
            {
                src: capsule,
                srcLand: capsuleLand
            }
            ]
        }
    },

    methods: {
        techChange
    }
}

</script>
<template>
    <video muted loop autoPlay>
        <source src="../assets/technology/background-tech.mp4" />
    </video>

    <section class="tech-container">
        <h2>
            <span>03</span> space launch 101
        </h2>

        <div class="grid-tech">
            <div class="tech-img">
                <picture>
                    <source media="(max-width: 968px)" :srcSet="techs[techIndex].srcLand" />
                    <img :src="techs[techIndex].src" :alt="techData[techIndex].name" />
                </picture>
            </div>

            <div class="number-nav">
                <div v-for="(tech, index) in techs" :key="index" :data-index="index" :onClick="techChange" class="num">
                    {{ index + 1 }}
                </div>
            </div>

            <div class="info-tech">
                <h2>The Terminology</h2>
                <h1>{{ techData[techIndex].name }}</h1>
                <p>{{ techData[techIndex].description }}</p>
            </div>
        </div>
    </section>
</template>
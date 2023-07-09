<script>
import data from '../../data.json'
import { ref } from 'vue';

import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

const planetIndex = ref(0);

function setPlanetIndex(value) {
    planetIndex.value = value
}

function planetChange(e) {
    setPlanetIndex(e.target.dataset.index);
    var list = document.querySelectorAll(".planet");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove("active");
    }
    e.target.classList.add("active");
}

export default {
    data() {
        return {
            spaceData: data.destinations,
            planetIndex,
            planetsLinks: [
                {
                    src: moon,
                    className: "planet active",
                },
                {
                    src: mars,
                    className: "planet",
                },
                {
                    src: europa,
                    className: "planet",
                },
                {
                    src: titan,
                    className: "planet",
                },
            ],
        };
    },

    methods: {
        planetChange,
        setPlanetNumber: setPlanetIndex
    },
};

</script>

<template>
    <video autoPlay loop muted>
        <source src="../assets/destination/background-destination.mp4" type="video/mp4" />
    </video>

    <section class="destination-container">
        <h2>
            <span>01</span> Pick up your destination
        </h2>

        <div class="planet-info">
            <div>
                <img :src="planetsLinks[planetIndex].src" :alt="spaceData[planetIndex].name" />
            </div>

            <div>
                <ul>
                    <li v-for="(planet, index) in planetsLinks" :key="index" :data-index="index" :onClick="planetChange"
                        :class="planet.className">
                        {{ spaceData[index].name }}
                    </li>
                </ul>

                <h1>{{ spaceData[planetIndex].name }}</h1>

                <p>{{ spaceData[planetIndex].description }}</p>

                <div class="line"></div>

                <div class="more-info">
                    <h2>
                        avg. distance
                        <span>{{ spaceData[planetIndex].distance }}</span>
                    </h2>

                    <h2>
                        est. travel time
                        <span>{{ spaceData[planetIndex].travel }}</span>
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>
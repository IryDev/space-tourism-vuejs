<script>
import { ref } from 'vue';

import burger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

let isOpen = ref(false);

function menu() {
    isOpen.value = !isOpen.value
}


export default {
    data() {
        return {
            isOpen,
            burger,
            close,
            links: [
                {
                    name: "home",
                    to: "/"
                }, {
                    name: "destination",
                    to: "/destination"
                },
                {
                    name: "crew",
                    to: "/crew"
                }, {
                    name: "technology",
                    to: "/technology"
                }
            ]
        }
    },

    methods: {
        menu
    }
}
</script>

<template>
    <header>
        <img src="../assets/shared/logo.svg" alt="logo">
        <nav :class="isOpen ? 'mobile-menu' : 'none'">
            <ul>
                <li v-for="(link, index) in links" :key="index" v-on:click="menu">
                    <router-link :to="link.to">
                        <span>0{{ index }}</span> {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <img class="burger" v-on:click="menu" :src="isOpen ? close : burger" alt="">
    </header>
</template>
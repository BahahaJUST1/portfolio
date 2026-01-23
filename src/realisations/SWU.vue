<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayLogo = ref(false);
const displaySimulator = ref(false);

const logoStyle = ref({});
const simulatorStyle = ref({});

const logoSpanRef = ref(null);
const simulatorSpanRef = ref(null);

const showCover = (event) => {
    const rect = event.target.getBoundingClientRect();
    logoStyle.value = {
        position: 'fixed',
        top: `${rect.bottom + 6}px`,
        left: `${rect.left}px`,
        width: '100px',
        minWidth: '100px',
        zIndex: 200
    };
    displayLogo.value = true;
};

const showSimulator = (event) => {
    const rect = event.target.getBoundingClientRect();
    simulatorStyle.value = {
        position: 'fixed',
        top: `${rect.bottom + 6}px`,
        left: `${rect.left}px`,
        width: '500px',
        minWidth: '500px',
        zIndex: 200
    };
    displaySimulator.value = true;
};

const hideCover = () => {
    displayLogo.value = false;
};

const hideSimulator = () => {
    displaySimulator.value = false;
};

</script>

<template>
    <div class="fixed inset-0 z-20 bg-black bg-opacity-55 md:mt-8" @click="close">

        <!-- MODALE -->
        <div @click.stop
            class="bg-gray-950 absolute rounded h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border text-sm md:text-lg md:max-w-4xl w-[80%] md:w-full">

            <div class="absolute top-[-0.25rem] right-[-0.25rem] md:top-[-0.5rem] md:right-[-0.5rem] cursor-pointer z-10"
                @click="$emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="lightgray" class="w-4 h-4 md:w-6 md:h-6 bg-gray-950 rounded border">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div
                class="p-4 md:p-8 overflow-x-hidden overflow-y-auto modal-scroll max-h-[90vh] md:max-h-[80vh] text-justify">
                <p>
                    <span class="relative inline-block">
                        <span ref="logoSpanRef" class="see-more font-bold" @mouseover="showCover"
                            @mouseleave="hideCover">
                            SWU BOS (Star Wars Unlimited Booster Opening Simulator)
                        </span>
                    </span>

                    est une appli web inspirée du jeu vidéo
                    <a href="https://tcgpocket.pokemon.com/fr-fr/" target="_blank" class="see-more italic">
                        Pokémon TCGP</a>
                    permettant d'ouvrir des boosters virtuels de cartes

                    <a href="https://starwarsunlimited.com/fr" target="_blank" class="see-more italic">
                        Star Wars Unlimited</a>.<br />

                    <br />

                    Le but initial devait être de
                    <span class="relative inline-block">
                        <span ref="simulatorSpanRef" class="see-more font-bold" @mouseover="showSimulator"
                            @mouseleave="hideSimulator">
                            simuler l'ouverture de boosters
                        </span>
                    </span>
                    en proposant à l'utilisateurs divers
                    boosters de divers sets. Grâce à l'API officielle de Star Wars Unlimited, il était possible de
                    récupérer la
                    liste de toutes les cartes et d'en récupérer aléatoirement 16 afin de constituer un paquet de carte
                    virtuel.<br />

                    <br />

                    Cependant, les données publiques concernant le taux d'optention de certaines cartes et de certaines
                    variantes
                    étaient incomplètes ou inexistantes, ce qui rendait impossible une simulation précise de l'ouverture
                    de boosters. C'est pour cela que le projet a été abandonné.<br />

                </p>

                <br />

                <p>
                    Cette appli a été développée en PHP avec le framework Laravel pour le back-end, et Vue3 pour le
                    front-end.
                    <br />
                </p>

                <p>
                    <a href="https://github.com/BahahaJUST1/swu-booster-opening-simulator/" target="_blank"
                        class="see-more italic">Lien du GitHub.</a>
                </p>
            </div>

        </div>
        <!-- EO MODALE -->

        <!-- cover image -->
        <img v-if="displayLogo" src="/projets/swu/swu-logo.png" alt="Cover du jeu"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="logoStyle" />

        <!-- booster opening simulator -->
        <img v-if="displaySimulator" src="/projets/swu/simulator.png" alt="Simulateur d'ouverture de boosters"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="simulatorStyle" />

    </div>
</template>

<style scoped>
.see-more {
    color: #38a169;
    cursor: pointer;
}

.see-more:hover {
    color: #48bb78;
    text-decoration: underline;
}

.command {
    background-color: #2d3748;
    padding: 0.1rem 0.3rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
}

.modal-scroll::-webkit-scrollbar {
    width: 4px;
}

.modal-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.modal-scroll::-webkit-scrollbar-thumb {
    background: #4a5568;
    border-radius: 2px;
}

.modal-scroll::-webkit-scrollbar-thumb:hover {
    background: #718096;
}

.modal-scroll {
    scrollbar-width: thin;
    scrollbar-color: #4a5568 transparent;
}
</style>
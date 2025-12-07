<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayStephanePP = ref(false);
const displayScreen1 = ref(false);
const displayScreen2 = ref(false);

const defaultStyle = {
    position: 'fixed',
    zIndex: 200
};

const stephanePPStyle = ref({});
const screen1Style = ref({});
const screen2Style = ref({});

const stephanePPSpanRef = ref(null);
const screen1SpanRef = ref(null);
const screen2SpanRef = ref(null);

const showStephanePP = (event) => {
    const rect = event.target.getBoundingClientRect();
    stephanePPStyle.value = {
        ...defaultStyle,
        width: '150px',
        minWidth: '150px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
    };
    displayStephanePP.value = true;
};

const showScreen1 = (event) => {
    const rect = event.target.getBoundingClientRect();
    screen1Style.value = {
        ...defaultStyle,
        width: '300px',
        minWidth: '300px',
        top: `${rect.bottom - 190}px`,
        left: `${rect.left + 80}px`,
    };
    displayScreen1.value = true;
};

const showScreen2 = (event) => {
    const rect = event.target.getBoundingClientRect();
    screen2Style.value = {
        ...defaultStyle,
        width: '300px',
        minWidth: '300px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
    };
    displayScreen2.value = true;
};

const hideStephanePP = () => {
    displayStephanePP.value = false;
};

const hideScreen1 = () => {
    displayScreen1.value = false;
};

const hideScreen2 = () => {
    displayScreen2.value = false;
};

</script>

<template>
    <div class="fixed inset-0 z-20 bg-black bg-opacity-55 md:mt-8" @click="close">

        <!-- MODALE -->
        <div @click.stop
            class="bg-gray-950 absolute rounded h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border text-sm md:text-lg md:max-w-4xl w-[80%] md:w-full">

            <div class="absolute top-[-0.25rem] right-[-0.25rem] md:top-[-0.5rem] md:right-[-0.5rem] cursor-pointer"
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
                        <span ref="stephanePPSpanRef" class="see-more font-bold" @mouseover="showStephanePP"
                            @mouseleave="hideStephanePP">
                            Stéphane
                        </span>
                    </span>

                    est un bot Discord permettant de récupérer le menu de
                    la cantine en fonction d'un établissement saisi. <br />

                    Son utilisation est très simple, il suffit de taper la commande

                    <span class="relative inline-block">
                        <span ref="screen1SpanRef" class="command see-more" @mouseover="showScreen1"
                            @mouseleave="hideScreen1">
                            $menu
                        </span>
                    </span>

                    pour avoir la liste des établissements disponibles et ensuite

                    <span class="relative inline-block">
                        <span ref="screen2SpanRef" class="command see-more" @mouseover="showScreen2"
                            @mouseleave="hideScreen2">
                            $menu [établissement]
                        </span>
                    </span>

                    pour obtenir le menu du jour. <br />

                    Il va alors scrapper le site du Crous pour récupérer les informations jugées utiles (entrées, plats,
                    desserts, prix, etc...) et les afficher dans un message personnalisé. <br />
                </p>

                <br />

                <p>
                    Ce dernier a été développé en TypeScript à l'aide du module discord.js pour interagir avec l'API de
                    Discord, utilisant axios pour récupérer le contenu HTML de la page et node-html-parser pour naviguer
                    dans le DOM et extraire les données nécessaires.
                </p>

            </div>

        </div>
        <!-- EO MODALE -->

        <!-- stephane pp -->
        <img v-if="displayStephanePP" src="/projets/stephane/stephane-bg.png" alt="Stéphane"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="stephanePPStyle" />

        <!-- screen 1 -->
        <img v-if="displayScreen1" src="/projets/stephane/screen-1.png" alt="liste des établissements"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="screen1Style" />

        <!-- screen 2 -->
        <img v-if="displayScreen2" src="/projets/stephane/screen-2.png" alt="liste des établissements"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="screen2Style" />

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
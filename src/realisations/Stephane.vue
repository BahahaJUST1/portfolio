<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayStephanePP = ref(false);
const displayScreen1 = ref(false);
const displayScreen2 = ref(false);

</script>

<template>
    <div class="fixed inset-0 z-20 bg-black bg-opacity-55" @click="close">

        <!-- MODALE -->
        <div @click.stop
            class="bg-gray-950 absolute p-8 rounded h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-justify border text-lg max-w-4xl w-full">

            <p>
                <!-- image wrapper -->
                <span class="relative inline-block">
                    <span class="see-more font-bold" @mouseover="displayStephanePP = true"
                        @mouseleave="displayStephanePP = false">
                        Stéphane
                    </span>
                    <img src="/projets/stephane/stephane-bg.png" alt="Stéphane"
                        class="absolute top-full left-1/3 mt-1 border border-gray-500 z-10 bg-gray-900"
                        style="width: 150px; height: auto; min-width: 150px;"
                        :class="displayStephanePP ? 'visible' : 'hidden'" />
                </span>

                est un bot Discord permettant de récupérer le menu de
                la cantine en fonction d'un établissement saisi. <br />

                Son utilisation est très simple, il suffit de taper la commande

                <span class="relative inline-block">
                    <span class="command see-more" @mouseover="displayScreen1 = true"
                        @mouseleave="displayScreen1 = false">
                        $menu
                    </span>
                    <img src="/projets/stephane/screen-1.png" alt="liste des établissements"
                        class="absolute left-full top-0 ml-3 border border-gray-500 z-10 bg-gray-900 transform -translate-y-1/4"
                        style="width: 300px; height: auto; min-width: 300px;"
                        :class="displayScreen1 ? 'visible' : 'hidden'" />
                </span>

                pour avoir la liste des établissements disponibles et ensuite

                <span class="relative inline-block">
                    <span class="command see-more" @mouseover="displayScreen2 = true"
                        @mouseleave="displayScreen2 = false">
                        $menu [établissement]
                    </span>
                    <img src="/projets/stephane/screen-2.png" alt="liste des établissements"
                        class="absolute top-full left-1/3 mt-1 border border-gray-500 z-10 bg-gray-900"
                        style="width: 300px; height: auto; min-width: 300px;"
                        :class="displayScreen2 ? 'visible' : 'hidden'" />
                </span>

                pour obtenir le menu du jour. <br />

                Il va alors scrapper le site du Crous pour récupérer les informations jugées utiles (entrées, plats,
                desserts, prix, etc...) et les afficher dans un message personnalisé. <br />
            </p>

            <br />

            <p>
                Ce dernier a été développé en JavaScript à l'aide du module discord.js pour interagir avec l'API de
                Discord,
                utilisant axios pour récupérer le contenu HTML de la page et node-html-parser pour naviguer dans le DOM
                et
                extraire les données nécessaires.
            </p>

        </div>
        <!-- EO MODALE -->

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
</style>
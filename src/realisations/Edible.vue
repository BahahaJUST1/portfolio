<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayRoocky = ref(false);
const roockyStyle = ref({});
const roockySpanRef = ref(null);

const showRoocky = (event) => {
    const rect = event.target.getBoundingClientRect();
    roockyStyle.value = {
        position: 'fixed',
        top: `${rect.bottom + 6}px`,
        left: `${rect.left}px`,
        width: '160px',
        minWidth: '160px',
        zIndex: 200
    };
    displayRoocky.value = true;
};

const hideRoocky = () => {
    displayRoocky.value = false;
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
                        <span ref="roockySpanRef" class="see-more font-bold" @mouseover="showRoocky"
                            @mouseleave="hideRoocky">
                            Edible
                        </span>
                    </span>

                    est un projet perso qui va me permettre de prendre en photo un plat ou un aliment et de savoir si
                    mon chien peut en manger ou si cela représente un risque pour lui. <br />

                    <br />

                    Dans un premier temps, l'appli permettra uniquement de visualiser les aliments à risques qui
                    seront définis manuellement. <br />
                    Dans un second temps, une IA sera plugée au projet afin de pouvoir analyser une photo qui sera soit
                    prise directement avec l'objectif de l'appareil, soit téléversée depuis la galerie. L'IA analysera
                    ensuite l'image et pourra dire si elle contient des aliments dangereux ou nocifs pour un animal de
                    compagnie.

                </p>

                <br />

                <p>
                    Une évolution possible du projet sera de permettre à l'utilisateur de sélectionner le type d'animal
                    de compagnie qu'il possède (chien, chat, rongeur, etc.) afin que l'application puisse fournir des
                    informations plus précises et adaptées à chaque type d'animal. <br />
                </p>

                <br />

                <p>
                    Ce projet est en cours de réalisation et est développé en C# avec ASP.NET core pour le côté back et
                    Angular pour le côté front. <br />
                    Il est à noter que je ne connais aucunes de ces technologies et que je vais devoir les apprendre sur
                    le tas, au fur et à mesure de l'avancement du projet. <br />
                </p>

                <p>
                    <a href="https://github.com/BahahaJUST1/edible" target="_blank" class="see-more italic">
                        Lien du GitHub.</a>
                </p>
            </div>

        </div>
        <!-- EO MODALE -->

        <!-- roocky -->
        <img v-if="displayRoocky" src="/projets/edible/roocky.png" alt="Roocky"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="roockyStyle" />

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
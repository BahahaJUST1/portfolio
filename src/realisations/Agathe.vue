<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayCover = ref(false);
const coverStyle = ref({});
const coverSpanRef = ref(null);

const showCover = (event) => {
    const rect = event.target.getBoundingClientRect();
    coverStyle.value = {
        position: 'fixed',
        top: `${rect.bottom + 6}px`,
        left: `${rect.left}px`,
        width: '200px',
        minWidth: '200px',
        zIndex: 200
    };
    displayCover.value = true;
};

const hideCover = () => {
    displayCover.value = false;
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
                        <span ref="coverSpanRef" class="see-more font-bold" @mouseover="showCover"
                            @mouseleave="hideCover">
                            Agathe In the Tripes
                        </span>
                    </span>

                    est un projet de fin d'études dans le cadre de notre 3e année de BUT Informatique. <br />

                    <br />

                    Ce jeu vidéo met en scène une jeune fille qui, perdue lors d'une nuit d'hiver,
                    se réfugie dans ce qu'elle pense être une grotte, mais qui s'avère être la gueule d'un gigantesque
                    monstre. <br />
                    Pour s'échapper, elle devra parcourir les entrailles de la bête en suivant son système digestif
                    (bouche, œsophage, estomac, intestins et anus) formant ainsi les différents niveaux du jeu. <br />

                    <a href="https://youtu.be/ue_7ot0ACiU" target="_blank" class="see-more italic"> Le trailer du jeu
                        est
                        disponible ici.</a>

                </p>

                <br />

                <p>
                    Ce jeu a été développé en JavaScript avec le moteur de jeu Phaser.js. <br />
                </p>
            </div>

        </div>
        <!-- EO MODALE -->

        <!-- cover image -->
        <img v-if="displayCover" src="/projets/agathe/cover.jpeg" alt="Cover du jeu"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="coverStyle" />

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
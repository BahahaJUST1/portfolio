<script setup>

const emit = defineEmits(['close']);
const close = () => emit('close');

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
                    Mon portfolio en ligne, développé en Vue.js 3 avec Tailwind et hébergé via Firebase Hosting.
                </p>

                <p>
                    <a href="https://github.com/BahahaJUST1/portfolio" target="_blank" class="see-more italic">
                        Lien du GitHub.</a>
                </p>
            </div>

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
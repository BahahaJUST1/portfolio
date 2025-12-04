<script setup>

const emit = defineEmits(['close']);
const close = () => emit('close');

</script>

<template>
    <div class="fixed inset-0 z-20" @click="close">

        <!-- MODALE -->
        <div @click.stop
            class="bg-gray-950 absolute p-4 rounded w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border">
            <div class="absolute top-0 right-0 cursor-pointer" @click="$emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="lightgray" class="w-8 h-8 border-l border-b">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            Portfolio
        </div>
        <!-- EO MODALE -->

    </div>
</template>

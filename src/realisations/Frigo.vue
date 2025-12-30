<script setup>
import { ref } from 'vue';


const emit = defineEmits(['close']);
const close = () => emit('close');

const displayLogo = ref(false);
const displayIngredients = ref(false);
const displayDishes = ref(false);
const displayRecipe = ref(false);
const displayShingling = ref(false);

const defaultStyle = {
    position: 'fixed',
    zIndex: 200
};

const logoStyle = ref({});
const ingredientsStyle = ref({});
const dishesStyle = ref({});
const recipeStyle = ref({});
const shinglingStyle = ref({});

const logoSpanRef = ref(null);
const ingredientsSpanRef = ref(null);
const dishesSpanRef = ref(null);
const recipeSpanRef = ref(null);
const shinglingSpanRef = ref(null);

const showLogo = (event) => {
    const rect = event.target.getBoundingClientRect();
    logoStyle.value = {
        ...defaultStyle,
        width: '150px',
        minWidth: '150px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
    };
    displayLogo.value = true;
};

const showIngredients = (event) => {
    const rect = event.target.getBoundingClientRect();
    ingredientsStyle.value = {
        ...defaultStyle,
        width: '500px',
        minWidth: '500px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.right}px`,
        transform: 'translateX(-100%)',
    };
    displayIngredients.value = true;
};

const showDishes = (event) => {
    const rect = event.target.getBoundingClientRect();
    dishesStyle.value = {
        ...defaultStyle,
        width: '500px',
        minWidth: '500px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.right}px`,
        transform: 'translateX(-100%)',
    };
    displayDishes.value = true;
};

const showRecipe = (event) => {
    const rect = event.target.getBoundingClientRect();
    recipeStyle.value = {
        ...defaultStyle,
        width: '450px',
        minWidth: '450px',
        top: `${rect.bottom - 150}px`,
        left: `${rect.right + 12}px`,
    };
    displayRecipe.value = true;
};

const showShingling = (event) => {
    const rect = event.target.getBoundingClientRect();
    shinglingStyle.value = {
        ...defaultStyle,
        width: '320px',
        minWidth: '320px',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
    };
    displayShingling.value = true;
};

const hideLogo = () => {
    displayLogo.value = false;
};

const hideIngredients = () => {
    displayIngredients.value = false;
};

const hideDishes = () => {
    displayDishes.value = false;
};

const hideRecipe = () => {
    displayRecipe.value = false;
};

const hideShingling = () => {
    displayShingling.value = false;
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
                        <span ref="logoSpanRef" class="see-more font-bold" @mouseover="showLogo" @mouseleave="hideLogo">
                            Y'a quoi dans le frigo
                        </span>
                    </span>

                    est un projet qui me permet de répondre à une des plus grandes questions que je me pose au
                    moins 2 fois par jour : <span class="italic">"Qu'est-ce qu'on mange ce midi/soir ?"</span>. <br />

                    <br />

                    Le principe est simple, je peux sélectionner un ou plusieurs

                    <span class="relative inline-block">
                        <span ref="ingredientsSpanRef" class="see-more font-bold" @mouseover="showIngredients"
                            @mouseleave="hideIngredients">
                            ingrédients
                        </span>
                    </span>

                    que j'ai sous la main et l'application me donnera une liste des

                    <span class="relative inline-block">
                        <span ref="dishesSpanRef" class="see-more font-bold" @mouseover="showDishes"
                            @mouseleave="hideDishes">
                            plats
                        </span>
                    </span>

                    que je peux cuisiner en fonction de ces ingrédients. Pour chacun de ces plats, je peux consulter la

                    <span class="relative inline-block">
                        <span ref="recipeSpanRef" class="see-more font-bold" @mouseover="showRecipe"
                            @mouseleave="hideRecipe">
                            recette
                        </span>
                    </span>

                    associée qui me donnera également la liste des ingrédients nécessaires ainsi que le temps de
                    préparation et le nombre de personnes pour cette recette.

                </p>

                <br />

                <p>
                    Plusieurs fonctionnalités ont été implémentées à savoir : un CRUD complet pour les ingrédients et
                    plats, un système d'authentification pour les utilisateurs, le tri des ingrédients en fonction de
                    leur catégorie (légumes, viandes, féculents, etc...), l'affichage des ingrédients/plats favoris, la
                    recherche en fonction d'un nom ou d'un temps de préparation, un jeu de données par défaut pour les
                    nouveaux utilisateurs ou encore la mise en place d'un algorythme de Shingling (ou n-gram indexing)
                    pour éviter de créer des

                    <span class="relative inline-block">
                        <span ref="shinglingSpanRef" class="see-more font-bold" @mouseover="showShingling"
                            @mouseleave="hideShingling">
                            doublons
                        </span>
                    </span>

                    en base.
                </p>

                <br />

                <p>
                    Cette application a été développée avec React pour le front (que je ne connaissais pas et que j'ai
                    dû apprendre) couplé à Tailwind, TypeScript avec Nest pour le back et une base de données PostgreSQL
                    manipulée avec Mikro-ORM. <br />
                    Toutes les images sont stockées sur Cloudinary et un déploiement automatique via GitHub Actions a
                    été mis en place. De plus, j'ai acheté un mini-pc que j'ai converti en serveur Linux (avec une
                    distribution Debian) afin d'héberger localement mon application. <br />

                    <br />

                    En effet, le but secondaire de ce projet a été d'apprendre à utiliser et mettre en place chacune des
                    couches du développement d'une application. <br />

                    Dans un premier temps, je voulais que n'importe puisse accéder à ce projet depuis internet.
                    J'ai donc dû apprendre à conteneuriser ce dernier, utiliser nginx, mettre en place une configuration
                    SSH, configurer le réseau NAT de mon routeur, rediriger un nom de domaine vers mon serveur, gérer
                    les certificats SSL avec Let's Encrypt, configurer un pare-feu avec UFW, etc... <br />

                    Aujourd'hui, pour des raisons de sécurité, l'application est toujours accessible, mais
                    uniquement en local pour les personnes connectées sur le réseau wifi de ma box internet. <br />
                </p>

                <p>
                    <a href="https://github.com/BahahaJUST1/y-a-quoi-dans-le-frigo" target="_blank"
                        class="see-more italic"> Lien du GitHub.</a>
                </p>

            </div>

        </div>
        <!-- EO MODALE -->

        <!-- stephane pp -->
        <img v-if="displayLogo" src="/projets/frigo/frigo.png" alt="Y'a quoi dans le frigo logo"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="logoStyle" />

        <!-- ingredients list -->
        <img v-if="displayIngredients" src="/projets/frigo/ingredients.png" alt="ingredients list"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="ingredientsStyle" />

        <!-- dishes list -->
        <img v-if="displayDishes" src="/projets/frigo/dishes.png" alt="dishes list"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="dishesStyle" />

        <!-- recipe -->
        <img v-if="displayRecipe" src="/projets/frigo/recipe.png" alt="recipe"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="recipeStyle" />

        <!-- shingling algorithm -->
        <img v-if="displayShingling" src="/projets/frigo/shingling.png" alt="shingling implementation"
            class="hidden md:block border border-gray-500 bg-gray-900 pointer-events-none" :style="shinglingStyle" />

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
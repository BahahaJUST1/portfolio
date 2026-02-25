<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Stephane from './realisations/Stephane.vue';
import Agathe from './realisations/Agathe.vue';
import Frigo from './realisations/Frigo.vue';
import Portfolio from './realisations/Portfolio.vue';
import SWU from './realisations/SWU.vue';
import Edible from './realisations/Edible.vue';

const scrollProgress = ref(0);
const activeSection = ref('presentation');
const currentProject = ref(0);
const currentProjectModal = ref(null);

const presentationRef = ref(null);
const experiencesRef = ref(null);
const realisationsRef = ref(null);
const contactRef = ref(null);

const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.value = progress;

    const sections = [
        { id: 'presentation', ref: presentationRef },
        { id: 'experiences', ref: experiencesRef },
        { id: 'realisations', ref: realisationsRef },
        { id: 'contact', ref: contactRef }
    ];

    for (const section of sections) {
        if (section.ref.value) {
            const rect = section.ref.value.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection.value = section.id;
                break;
            }
        }
    }
};

const scrollToSection = (item) => {

    currentProjectModal.value = null;

    if (item.id === 'presentation') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    item.ref.value?.scrollIntoView({ behavior: 'smooth' });
};

const navItems = [
    { label: 'Présentation', ref: presentationRef, id: 'presentation' },
    { label: 'Expériences', ref: experiencesRef, id: 'experiences' },
    { label: 'Réalisations', ref: realisationsRef, id: 'realisations' },
    { label: 'Contact', ref: contactRef, id: 'contact' }
];

const openCV = () => {
    window.open('/PONZO_Justin_CV.pdf', '_blank')
}

const realisations = [
    { component: Edible, name: "Edible", image: 'projets/edible/roocky.png', imageClass: 'h-20 mb-3 mt-2 m-auto' },
    { component: Frigo, name: 'Y\'a quoi dans le frigo ?', image: 'projets/frigo/frigo.png', imageClass: 'h-20 mb-3 mt-2 m-auto' },
    { component: SWU, name: 'SWU BOS', image: 'projets/swu/swu-logo.png', imageClass: 'h-20 mb-3 mt-2 m-auto' },
    { component: Stephane, name: 'Stéphane', image: 'projets/stephane/stephane.png', imageClass: 'h-16 mb-5 m-auto mt-1' },
    { component: Agathe, name: 'Agathe In the Tripes', image: 'projets/agathe/agathe.png', imageClass: 'h-16 mt-5 mb-4 m-auto' },
    { component: Portfolio, name: 'Portfolio', image: '/pp.jpg', imageClass: 'rounded-full h-[4.5rem] mt-3 mb-3 m-auto' },
];

const nextProject = () => {
    if (currentProject.value < realisations.length - 3) {
        currentProject.value++;
    }
};

const prevProject = () => {
    if (currentProject.value > 0) {
        currentProject.value--;
    }
};

const openProjectModal = (component) => {
    currentProjectModal.value = component;
    document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
    currentProjectModal.value = null;
    document.body.style.overflow = ''
};

const experiences = [
    { title: 'Formation autodidacte', duration: 'Février 2026 - Aujourd\'hui', image: '/tt.png', description: "Formation en C#, ASP.NET et Angular à travers des projets personnels afin de gagner en compétences sur des technologies fortement présentes en Alsace.", delimiterClass: "md:h-8 md:top-20" },
    { title: 'Développeur web', company: 'OCI', city: 'Strasbourg', duration: 'Juillet 2025 - Octobre 2025', image: '/oci.png', description: "Développement de CRUD PHP Laravel, gestion de BDD avec Eloquent, anonymisations de données selon les normes RGPD en vigueur, mise en place d'un système de traduction automatique, développement et maintien de packages facilement réemployables, résolutions de tickets et réalisation d'une vitrine/bibliothèque de composants réutilisables", delimiterClass: "md:h-11 md:top-[94px]" },
    { title: 'Développeur logiciel backend', company: 'Owlie', city: 'Metz', duration: 'Septembre 2024 - Juillet 2025', image: '/owlie.jpg', description: "Développement de CRUD NestJS, mise en place d'API complexes, gestion de BDD avec migrations et ORM, synchronisations de données, maintenance d'un webshop connecté à un CRM, mise en place d'un système de facturation, automatisation via système de queues, conteneurisation et déploiement de projets, CI et pipelines, relations client", delimiterClass: "md:h-8 md:top-[93px]" },
    { title: 'Développeur logiciel fullstack (stage)', company: 'Owlie', city: 'Metz', duration: 'Février 2024 - Juin 2024', image: '/owlie.jpg', description: "Développement d'une application permettant de contextualiser les conversations de LLM tels que ChatGPT pour améliorer la qualité des réponses obtenues", delimiterClass: "md:h-4 md:top-20" },
    { title: 'Développeur systèmes embarqués', company: 'Dronavia', city: 'Remiremont', duration: 'Avril 2023 - Juin 2023', image: '/dronavia.png', description: "Développement balise/sniffer wifi permettant de transmettre/récupérer les données de navigation d'un drone", delimiterClass: "md:h-0 md:top-0" },
];

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>

    <div class="relative">

        <!-- ------------------- HEADER -------------------  -->
        <header
            class="hidden md:flex sticky top-0 z-50 w-full justify-around bg-gray-950 py-4 shadow-md backdrop-blur-md">
            <h1 v-for="item in navItems" :key="item.id" @click="scrollToSection(item)" :class="[
                'cursor-pointer transition-all duration-300 text-base md:text-lg font-medium',
                activeSection === item.id
                    ? 'text-green-600 scale-110'
                    : 'text-gray-700 hover:text-green-500'
            ]">
                {{ item.label }}
            </h1>
        </header>
        <!-- ------------------- EO HEADER -------------------  -->


        <!-- ------------------- PROGRESS BAR -------------------  -->
        <div class="hidden md:block fixed top-[60px] left-0 w-full h-1 bg-gray-700 z-40">
            <div class="h-full bg-gradient-to-r from-green-800 to-green-600" :style="{ width: `${scrollProgress}%` }" />
        </div>
        <!-- ------------------- EO PROGRESS BAR -------------------  -->



        <!-- ------------------- SECTIONS -------------------  -->
        <section>

            <!-- ------------------- PRESENTATION -------------------  -->
            <article ref="presentationRef"
                class="pt-12 md:pt-0 min-h-screen flex items-center justify-center bg-gradient-to-b from-cv-dark via-cv-dark to-blue-950 text-white">
                <div class="text-center px-6 max-w-4xl mx-auto">
                    <div class="mb-1 inline-block">
                        <img src="/pp.jpg" alt="Profile Picture"
                            class="w-28 h-28 rounded-full mx-auto opacity-90 border-2" />
                    </div>

                    <h2 class="text-4xl md:text-6xl font-bold mb-8">
                        Présentation
                    </h2>
                    <p class="text-lg md:text-xl mb-12 text-gray-300 font-light">
                        Hey, bonjour ! <br />
                        Je m'appelle Justin, j'ai 22 ans et ceci est mon portfolio de développeur web fullstack. <br />
                        Après avoir effectué mes 3 ans de BUT informatique à l'IUT de Metz, j'ai décidé de me lancer
                        dans le monde professionnel en tant que développeur web. <br />
                        <br />
                        Si vous pouvez lire ceci, c'est que je suis actuellement à la recherche d'une nouvelle
                        opportunité professionnelle sur les alentours de Strasbourg, n'hésitez pas à me contacter pour
                        en savoir plus sur mon profil et mes expériences ! <br />
                        <br />
                        <span class="font-normal">
                            Miser sur moi, c'est l'assurance d'avoir un jeune développeur aussi intéressé
                            qu'intéressant, alors pourquoi ne pas me donner ma chance ?
                        </span>
                    </p>
                </div>
            </article>
            <!-- ------------------- EO PRESENTATION -------------------  -->


            <!-- ------------------- EXPERIENCES -------------------  -->
            <article ref="experiencesRef"
                class="pb-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-blue-900 to-purple-900 text-white">
                <div class="text-center px-6 max-w-4xl mx-auto">

                    <h2 class="text-4xl md:text-6xl font-bold mb-8 pt-12 md:pt-0">
                        Expériences
                    </h2>

                    <div>

                        <div v-for="(experience, index) in experiences" :key="index"
                            class="relative flex items-center mb-4 justify-start max-w-3xl">

                            <img :src="experience.image" alt="Company Logo"
                                class="w-14 h-14 md:w-20 md:h-20 object-contain mr-3 md:mr-6 rounded-lg border md:border-2 border-white bg-white/10 p-0.5 md:p-1.5" />

                            <div class="absolute w-3 h-[1px] md:w-0.5 left-14 md:left-10 bg-white"
                                :class="experience.delimiterClass" />

                            <div class="border-l md:border-none pl-2 block">
                                <div class="text-left">
                                    <span class="text-md md:text-lg font-medium">{{ experience.title }}</span>
                                    &nbsp; - &nbsp;
                                    <span class="text-sm md:text-md font-normal"> ({{ experience.duration }})
                                    </span>
                                </div>

                                <div class="text-left text-xs md:text-sm font-light text-gray-300 md:text-gray-200">
                                    {{ experience.description }}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>
            <!-- ------------------- EO EXPERIENCES -------------------  -->

            <!-- ------------------- REALISATIONS -------------------  -->
            <article ref="realisationsRef"
                class="py-8 relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-gray-900 to-black text-white">
                <div class="text-center px-6 max-w-6xl mx-auto">

                    <component :is="currentProjectModal" @close="closeProjectModal" />

                    <h2 class="text-4xl md:text-6xl font-bold mb-8">
                        Réalisations
                    </h2>
                    <p class="text-xl md:text-2xl mb-12 text-gray-400 font-light">
                        Voici certaines de mes réalisations les plus récentes et les plus abouties
                    </p>

                    <div class="relative">
                        <!-- Bouton précédent -->
                        <button @click="prevProject" :disabled="currentProject === 0" :class="[
                            'hidden md:block absolute left-[-75px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border-2 border-white hover:bg-white/20 transition-all',
                            currentProject === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        ]">
                            ‹
                        </button>

                        <!-- Container du carousel -->
                        <div class="overflow-hidden py-2 px-3">
                            <div class="grid grid-cols-2 gap-4 md:flex md:gap-6 md:transition-transform md:duration-500 md:ease-in-out md:translate-x-[--slide-offset]"
                                :style="{ '--slide-offset': `-${currentProject * (100 / 3 + 1)}%` }">

                                <button v-for="(realisation, index) in realisations" :key="index"
                                    @click="openProjectModal(realisation.component)"
                                    class="w-full md:w-[calc(33.333%-1rem)] md:flex-shrink-0 pt-4 border-2 border-white rounded-xl font-semibold md:hover:scale-105 transition-all">
                                    {{ realisation.name }}
                                    <img :src="realisation.image" :class="realisation.imageClass"
                                        :alt="realisation.name" />
                                </button>

                            </div>
                        </div>

                        <!-- Bouton suivant -->
                        <button @click="nextProject" :disabled="currentProject >= realisations.length - 3" :class="[
                            'hidden md:block absolute right-[-75px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border-2 border-white hover:bg-white/20 transition-all',
                            currentProject >= realisations.length - 3 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        ]">
                            ›
                        </button>
                    </div>

                    <!-- Indicateurs de position -->
                    <div class="hidden md:flex justify-center gap-2 mt-8">
                        <div v-for="i in (realisations.length - 2)" :key="i" :class="[
                            'w-2 h-2 rounded-full transition-all bg-gray-400',
                            currentProject === i - 1 ? 'w-8' : ''
                        ]">
                        </div>
                    </div>
                </div>
            </article>
            <!-- ------------------- EO REALISATIONS -------------------  -->


            <!-- ------------------- CONTACT -------------------  -->
            <article ref="contactRef"
                class="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-green-900 text-white">
                <div class="text-center px-6 max-w-5xl mx-auto">

                    <h2 class="text-4xl md:text-6xl font-bold mb-8">
                        Contact
                    </h2>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <div class="px-6 py-4 border-2 bg-white text-black rounded-full font-semibold">
                            📞 06 34 67 48 90
                        </div>
                        <a href="mailto:just1ponzo@gmail.com"
                            class="px-6 py-4 border-2 border-white rounded-full font-semibold md:hover:bg-white md:hover:text-black transition-colors">
                            📧 just1ponzo@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/justin-ponzo-087a29252/" target="_blank"
                            class="px-6 py-4 border-2 border-white rounded-full font-semibold md:hover:bg-white md:hover:text-black transition-colors">
                            🔗 LinkedIn
                        </a>
                        <button @click="openCV"
                            class="px-6 py-4 border-2 border-white rounded-full font-semibold md:hover:bg-white md:hover:text-black transition-colors">
                            📜 Voir mon CV
                        </button>
                    </div>
                </div>
            </article>
            <!-- ------------------- EO CONTACT -------------------  -->

        </section>
        <!-- ------------------- EO SECTIONS -------------------  -->

    </div>
</template>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
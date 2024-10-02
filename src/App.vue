<script setup lang="ts">
import './style.css';
import { useHead } from '@unhead/vue';
import Header from './components/Header.vue';
import HeroSection from './components/sections/HeroSection.vue';
import FeaturedGamesSection from './components/sections/FeaturedGames.vue';
import HowItWorksSection from './components/sections/HowItWorks.vue';
import PricingSection from './components/sections/Pricing.vue';
import BenefitsSection from './components/sections/Benefits.vue';
import KeyFeaturesSection from './components/sections/KeyFeatures.vue';
import FaqSection from './components/sections/Faq.vue';
import ContactsSection from './components/sections/Contacts.vue';
import Footer from './components/Footer.vue';
import ogImage from './assets/images/image.png';

useHead({
  meta: [
    { property: 'og:title', content: 'Title' },
    { property: 'og:description', content: 'Description' },
    { property: 'og:image', content: ogImage }]
})
</script>

<template>
  <Header />
  <HeroSection />
  <FeaturedGamesSection />
  <HowItWorksSection />
  <PricingSection />
  <BenefitsSection />
  <KeyFeaturesSection />
  <FaqSection />
  <ContactsSection />
  <Footer />
</template>
import { featuredGames } from './featuredGames';
import { pricingList } from './pricing';
import { allFaqs, artistsFaqs, developersFaqs, playersFaqs, testersFaqs } from './faq';

import { DISCORD_LINK, SUPPORT_EMAIL, TWITTER_LINK } from './links';

import discordIcon from '../assets/svg/contacts/discord-icon.svg?url';
import xIcon from '../assets/svg/contacts/x-icon.svg?url';
import emailIcon from '../assets/svg/contacts/email-icon.svg?url';

import aboutFirstImage from '../assets/images/how-it-works/step_1.webp';
import aboutSecondImage from '../assets/images/how-it-works/step_2.webp';
import aboutThirdImage from '../assets/images/how-it-works/step_3.webp';

import benefit1 from '../assets/images/benefits/benefit-1.webp';
import benefit2 from '../assets/images/benefits/benefit-2.webp';
import benefit3 from '../assets/images/benefits/benefit-3.webp';

import feature1 from '../assets/images/features/feature-1.webp';
import feature1Thumb from '../assets/images/features/feature-1-thumb.webp';
import feature2 from '../assets/images/features/feature-2.webp';
import feature2Thumb from '../assets/images/features/feature-2-thumb.webp';
import feature3 from '../assets/images/features/feature-3.webp';
import feature3Thumb from '../assets/images/features/feature-3-thumb.webp';

export const siteData = {
  heroSection: {
    title: 'collaborative game development platform',
    description_part_1: 'Company together artists, ',
    description_part_2: 'developers, testers and players to ',
    description_part_3: 'build games ',
    description_part_4: 'from ',
    description_part_5: 'humble beginnings ',
    description_part_6: 'all the way through the market release',
    backgroundVideo: {
      // mobile: videoMobile,
      // tablet: videoTablet,
      // desktop: videoDesktop,
    }
  },
  featuredSection: {
    title: 'Featured games',
    slides: featuredGames,
  },
  howItWorksSection: {
    title: 'How it works',
    step_1: {
      title: 'Create a project',
      desc: 'Upload an existing project or get started with a template. Engine agnostic, try out different engines',
      image: aboutFirstImage,
    },
    step_2: {
      title: 'Invite people to your team',
      image: aboutSecondImage,
    },
    step_3: {
      title: 'Build your game',
      image: aboutThirdImage,
    }
  },
  pricingSection: {
    title: 'Pricing',
    list: pricingList,
  },
  benefitsSection: {
    title: 'Benefits',
    benefit_1: {
      image: benefit1,
      title: 'Collaboration made easy and seamless',
    },
    benefit_2: {
      image: benefit2,
      title: 'Never worry about “sending a build” again, and see feedback as it happens',
    },
    benefit_3: {
      image: benefit3,
      title: 'An ecosystem of players, developers, artists and testers all working together to play and make great games',
    },
  },
  featuresSections: {
    title: 'Key Features',
    feature_1: {
      title: 'File/Project Hosting',
      description: 'Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.',
      image: feature1,
      thumb: feature1Thumb,
    },
    feature_2: {
      title: 'Automatic Build Pipeline',
      description: 'Automatically generate builds for common engines or set up custom pipelines. Share builds with your teamor get feedback easily.',
      image: feature2,
      thumb: feature2Thumb,
    },
    feature_3: {
      title: 'Ever growing ecosystem of players, devs, artists, and testers',
      description: 'Find and collaborate with artists, testers, developers, and players from all over the world. Every genre-defining game had humble beginnings, and was made by people just like you!',
      image: feature3,
      thumb: feature3Thumb,
    }
  },
  faqSection: {
    title: 'FAQS',
    allFaqs: allFaqs,
    artistsFaqs: artistsFaqs,
    playersFaqs: playersFaqs,
    developersFaqs: developersFaqs,
    testersFaqs: testersFaqs,
  },
  contactSections: {
    title: 'Contact Us',
    email: {
      link: SUPPORT_EMAIL,
      icon: emailIcon,
      title: 'info@codecraftsmen.io'
    },
    twitter: {
      link: TWITTER_LINK,
      icon: xIcon,
      title: 'code_craft'
    },
    discord: {
      link: DISCORD_LINK,
      icon: discordIcon,
      title: 'codecraft'
    },
  }
}
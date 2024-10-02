import gem1 from "../assets/images/gems/gem-1.webp";
import gem2 from "../assets/images/gems/gem-2.webp";
import gem3 from "../assets/images/gems/gem-3.webp";
import gem4 from "../assets/images/gems/gem-4.webp";

export type PricingCardType = 'indie' | 'starter' | 'team' | 'enterprise';


export type PricingCard = {
  title: string;
  image: string;
  features: string[];
  btnTitle?: string;
  price?: {
    amount: number;
    period: string;
  };
  gradientClass: string;
  btnBgClass?: string;
  type: PricingCardType;
};

export const pricingList: PricingCard[] = [
  {
    title: "Indie",
    image: gem1,
    features: [`1 project`, `4GB maximum project size`],
    btnTitle: "FREE",
    gradientClass: 'bg-white-gr',
    type: 'indie',
  },
  {
    title: "Starter",
    image: gem2,
    features: [`3 projects`, `50GB maximum project size`],
    price: {
      amount: 19,
      period: "month",
    },
    gradientClass: 'bg-blue-gr',
    btnBgClass: 'bg-blue',
    type: 'starter',
  },
  {
    title: "Team",
    image: gem3,
    features: [`5 project`, `100GB maximum project size`],
    price: {
      amount: 39,
      period: "month",
    },
    gradientClass: 'bg-yellow-gr',
    btnBgClass: 'bg-yellow',
    type: 'team',
  },
  {
    title: "Enterprise",
    image: gem4,
    features: [`Unlimited projects`, `Unlimited storage`],
    btnTitle: "Contact us for demo",
    gradientClass: 'bg-red-gr',
    btnBgClass: 'bg-red',
    type: 'enterprise',
  },
];

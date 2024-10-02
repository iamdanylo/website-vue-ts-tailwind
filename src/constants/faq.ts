export type FaqItem = {
  question: string;
  answer: string;
};

export const artistsFaqs: FaqItem[] = [
  {
    question: "How can I get started?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
];

export const playersFaqs: FaqItem[] = [
  {
    question: "How do I invite people to my team?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
  {
    question: "What does it cost, is it free to try?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
];

export const testersFaqs: FaqItem[] = [
  {
    question: "What is build generation, do I need that?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
];

export const developersFaqs: FaqItem[] = [
  {
    question: "What game engines does platform support?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
  {
    question: "How does the file hosting work?",
    answer:
      "Start from scratch or choose from Unity, Unreal Engine, and other templates. Files are hosted in the cloud, with a desktop client for local sync, just like Dropbox.",
  },
];

export const allFaqs = [
  ...artistsFaqs,
  ...testersFaqs,
  ...developersFaqs,
  ...playersFaqs,
];

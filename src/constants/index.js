const flavorlists = [
  {
    name: "KIWI LEMON",
    color: "blue",
    Image: "/public/images/focus-image3.webp",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    Image: "/public/images/Focus-image-2.webp",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "MANGO",
    color: "blue",
    Image: "/public/images/Frame_3_1.webp",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Vitamin D3", amount: "245mg" },
  { label: "Coconut water", amount: "500mg" },
  { label: "Glutamine ", amount: "176mcg" },
  { label: "Creatine", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];
const cards = [
  {
    src: "/videos/focus-6.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    translation: "translate-y-[-5%]",
  },
  { src: "/videos/focus-2.mp4", rotation: "rotate-z-[4deg]", name: "Alexander" },
  {
    src: "/videos/focus-3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    translation: "translate-y-[-5%]",
  },
  { src: "/videos/focus-4.mp4", rotation: "rotate-z-[4deg]", name: "Alexander" },
  {
    src: "/videos/focus-5.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/focus-4.mp4", // ✅ correct image
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
  },
  {
    src: "/videos/focus.video.mp4", // ✅ correct image
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    translation: "translate-y-[5%]",
  },

];

export { flavorlists, nutrientLists, cards };

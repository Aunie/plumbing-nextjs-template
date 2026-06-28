export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category:
    | "Emergency Plumbing"
    | "Drain Cleaning"
    | "Leak Detection"
    | "Water Heater"
    | "Pipe Installation"
    | "Bathroom & Kitchen";
  stock: number;
  description: string;
}

export const products: Product[] = [
  // 🚨 Emergency Plumbing
  {
    id: 1,
    name: "24/7 Emergency Plumbing",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    category: "Emergency Plumbing",
    stock: 999,
    description:
      "Fast response for burst pipes, leaks, clogged drains, and plumbing emergencies.",
  },
  {
    id: 2,
    name: "Burst Pipe Repair",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    category: "Emergency Plumbing",
    stock: 999,
    description:
      "Professional repair of burst and damaged water pipes to prevent costly damage.",
  },

  // 🚿 Drain Cleaning
  {
    id: 3,
    name: "Drain Cleaning",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
    category: "Drain Cleaning",
    stock: 999,
    description:
      "Complete drain cleaning for blocked sinks, showers, and floor drains.",
  },
  {
    id: 4,
    name: "Sewer Line Cleaning",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    category: "Drain Cleaning",
    stock: 999,
    description:
      "Advanced sewer line cleaning using professional plumbing equipment.",
  },

  // 💧 Leak Detection
  {
    id: 5,
    name: "Leak Detection",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    category: "Leak Detection",
    stock: 999,
    description:
      "Locate hidden leaks quickly with modern leak detection technology.",
  },
  {
    id: 6,
    name: "Water Leak Repair",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1200&auto=format&fit=crop",
    category: "Leak Detection",
    stock: 999,
    description:
      "Reliable repair of underground and wall water leaks.",
  },

  // 🔥 Water Heater
  {
    id: 7,
    name: "Water Heater Installation",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop",
    category: "Water Heater",
    stock: 999,
    description:
      "Professional installation of gas and electric water heaters.",
  },
  {
    id: 8,
    name: "Water Heater Repair",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    category: "Water Heater",
    stock: 999,
    description:
      "Repair and maintenance for all major water heater brands.",
  },

  // 🔧 Pipe Installation
  {
    id: 9,
    name: "Pipe Installation",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
    category: "Pipe Installation",
    stock: 999,
    description:
      "New plumbing pipe installation for residential and commercial buildings.",
  },
  {
    id: 10,
    name: "Pipe Replacement",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    category: "Pipe Installation",
    stock: 999,
    description:
      "Replacement of damaged, corroded, and aging plumbing pipelines.",
  },

  // 🚽 Bathroom & Kitchen
  {
    id: 11,
    name: "Bathroom Plumbing",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    category: "Bathroom & Kitchen",
    stock: 999,
    description:
      "Installation and repair of toilets, bathtubs, sinks, and showers.",
  },
  {
    id: 12,
    name: "Kitchen Plumbing",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
    category: "Bathroom & Kitchen",
    stock: 999,
    description:
      "Kitchen sink installation, faucet replacement, and garbage disposal services.",
  },
];  
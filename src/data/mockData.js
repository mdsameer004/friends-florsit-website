export const categories = [
  "Romance", "Sympathy", "Birthday", "Anniversary", "Gifts", "Plants"
];

export const products = [
  {
    id: 1,
    name: "Classic Red Roses Bouquet",
    price: 1299,
    category: "Romance",
    description: "A stunning arrangement of 12 premium long-stemmed red roses, baby's breath, and lush greenery. Perfect for expressing deep affection.",
    stock: 15,
    images: ["https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800"],
    rating: 4.8,
    reviews: 124,
    featured: true,
  },
  {
    id: 2,
    name: "Pastel Spring Delight",
    price: 999,
    category: "Birthday",
    description: "A cheerful mix of pastel pink peonies, white hydrangeas, and yellow tulips. Brings the joy of spring indoors.",
    stock: 8,
    images: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800"],
    rating: 4.5,
    reviews: 89,
    featured: true,
  },
  {
    id: 3,
    name: "Elegant Orchids",
    price: 1599,
    category: "Plants",
    description: "A sophisticated twin-stem white Phalaenopsis orchid in a premium ceramic modern planter.",
    stock: 5,
    images: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"],
    rating: 4.9,
    reviews: 42,
    featured: false,
  },
  {
    id: 4,
    name: "Sunflower Sunshine",
    price: 850,
    category: "Birthday",
    description: "Brighten someone's day with a dozen radiant sunflowers arranged in a rustic glass vase.",
    stock: 20,
    images: ["https://images.unsplash.com/photo-1561081699-db0ac4e82b3d?auto=format&fit=crop&q=80&w=800"],
    rating: 4.7,
    reviews: 67,
    featured: true,
  },
  {
    id: 5,
    name: "Deep Sympathy Wreath",
    price: 2499,
    category: "Sympathy",
    description: "An elegant standing wreath of pure white lilies, roses, and carnations designed to show respect and honor.",
    stock: 3,
    images: ["https://images.unsplash.com/photo-1452906801831-29e8c3385750?auto=format&fit=crop&q=80&w=800"],
    rating: 5.0,
    reviews: 12,
    featured: false,
  },
  {
    id: 6,
    name: "Luxury Gift Hamper",
    price: 3200,
    category: "Gifts",
    description: "A curated premium hamper containing gourmet chocolates, a small preserved rose, fine artisanal tea, and a scented candle.",
    stock: 10,
    images: ["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800"],
    rating: 4.9,
    reviews: 55,
    featured: true,
  }
];

export const mockUser = {
  id: "u123",
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+91 9876543210",
  address: "123 Floral Avenue, Rose City, 45678",
  role: "user"
};

export const bannerOffers = [
  {
    id: 1,
    title: "Valentine's Week Special",
    subtitle: "Up to 30% off on all Premium Roses",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Fresh Orchids Collection",
    subtitle: "Bring elegance to your space",
    bgImage: "https://images.unsplash.com/photo-1508933010776-96353ea8fbee?auto=format&fit=crop&q=80&w=1200",
    cta: "Explore"
  }
];

export const mockAdmin = {
  id: "admin1",
  name: "Editor Admin",
  email: "editor@admin.com",
  role: "admin"
};

export const initialOrders = [
  { id: "#ORD-9901", customer: "John Doe", amount: 1299, status: "Pending", date: "2023-10-25" },
  { id: "#ORD-9902", customer: "Sarah Smith", amount: 2500, status: "Delivered", date: "2023-10-24" },
  { id: "#ORD-9903", customer: "Jane Doe", amount: 850, status: "Processing", date: "2023-10-26" }
];


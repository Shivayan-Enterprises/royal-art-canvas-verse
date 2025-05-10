
// Collection of products for the art gallery e-commerce site

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  description: string;
  shortDescription: string;
  images: ProductImage[];
  rating: number;
  reviews: ProductReview[];
  details: string[];
  features: string[];
  materials: string[];
  dimensions: string;
  inStock: number;
  category: string;
  tags: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "royal-vase",
    title: "Royal Gold-Trimmed Vase",
    artist: "Alexandra Chen",
    price: 3200,
    shortDescription: "Exquisite handcrafted vase with 24k gold trim",
    description: "This exquisite vase represents the pinnacle of contemporary ceramic artistry. Hand-crafted with meticulous attention to detail, the delicate gold trim highlights the sweeping curves of this masterpiece. The rich mahogany glaze provides the perfect backdrop for the intricate detailing, creating a striking juxtaposition of color and texture.",
    images: [
      { src: "https://shivajimaharajfoundation.com/wp-content/uploads/2024/08/The-Mighty-Hindu-Warrior-Shivaji-Maharaj-e1725271026839.jpeg", alt: "Royal Gold-Trimmed Vase - Main View" },
      { src: "/assets/products/royal-vase-2.jpg", alt: "Royal Gold-Trimmed Vase - Side View" },
      { src: "/assets/products/royal-vase-3.jpg", alt: "Royal Gold-Trimmed Vase - Detail View" },
    ],
    rating: 4.8,
    reviews: [
      {
        id: "rev1",
        userName: "Art Collector",
        rating: 5,
        comment: "Absolutely stunning craftsmanship. This vase is the centerpiece of my living room.",
        date: "2023-11-15"
      },
      {
        id: "rev2",
        userName: "Design Enthusiast",
        rating: 4.5,
        comment: "Beautiful piece with exquisite detailing. Shipping was well-packaged.",
        date: "2023-10-22"
      }
    ],
    details: [
      "Height: 45 cm",
      "Width: 25 cm",
      "Materials: Porcelain, 24k gold trim",
      "Created: 2023",
      "Certificate of authenticity included"
    ],
    features: [
      "Hand-painted by master artisans",
      "Limited edition series",
      "Microwave and dishwasher safe",
      "Includes display stand"
    ],
    materials: ["Porcelain", "24k Gold", "Premium Glaze"],
    dimensions: "45cm x 25cm x 25cm",
    inStock: 3,
    category: "Ceramics",
    tags: ["Vase", "Gold", "Luxury", "Home Decor"],
    featured: true
  },
  {
    id: "shivaji-portrait",
    title: "Chhatrapati Shivaji Maharaj Portrait",
    artist: "Rajiv Mehta",
    price: 5800,
    shortDescription: "Majestic portrait of the legendary Maratha warrior king",
    description: "This breathtaking portrait captures the essence and valor of Chhatrapati Shivaji Maharaj, the legendary founder of the Maratha Empire. Using traditional techniques blended with contemporary styling, the artist has created a masterpiece that radiates strength, wisdom, and royal dignity. The intricate gold leaf detailing against the rich color palette brings this historical figure to life.",
    images: [
      { src: "https://shivajimaharajfoundation.com/wp-content/uploads/2024/08/Chhatrapati-Shivaji-Maharaj-37.jpg", alt: "Shivaji Maharaj Portrait - Front" },
      { src: "/assets/products/shivaji-2.jpg", alt: "Shivaji Maharaj Portrait - Detail" },
      { src: "/assets/products/shivaji-3.jpg", alt: "Shivaji Maharaj Portrait - Frame Detail" },
    ],
    rating: 5.0,
    reviews: [
      {
        id: "rev3",
        userName: "History Enthusiast",
        rating: 5,
        comment: "A powerful representation of Shivaji Maharaj that captures his strength and wisdom.",
        date: "2023-12-05"
      },
      {
        id: "rev4",
        userName: "Art Connoisseur",
        rating: 5,
        comment: "Exceptional artistry and attention to historical detail. Truly a masterpiece.",
        date: "2023-11-28"
      }
    ],
    details: [
      "Size: 90cm x 120cm",
      "Medium: Oil on canvas with gold leaf detailing",
      "Framed in handcrafted solid wood with gold finish",
      "Created: 2023",
      "Certificate of authenticity included"
    ],
    features: [
      "Museum-quality archival canvas",
      "UV-resistant coating",
      "Custom ornate frame",
      "Limited edition (10 pieces only)"
    ],
    materials: ["Canvas", "Oil Paints", "23k Gold Leaf", "Premium Wood Frame"],
    dimensions: "90cm x 120cm (framed)",
    inStock: 2,
    category: "Historical Portraits",
    tags: ["Shivaji", "Portrait", "Historical", "Gold Leaf"],
    featured: true
  },
  {
    id: "golden-frame-mirror",
    title: "Royal Heritage Gold Frame Mirror",
    artist: "Design Artisans Guild",
    price: 4200,
    shortDescription: "Ornate gold-finished mirror inspired by royal heritage designs",
    description: "This magnificent mirror features an elaborately carved frame finished in genuine gold leaf. Each intricate detail is hand-carved by master craftsmen, creating a truly luxurious piece that reflects both light and heritage. The ornate design draws inspiration from royal palaces, making it a statement piece for any sophisticated interior.",
    images: [
      { src: "https://shivajimaharajfoundation.com/wp-content/uploads/2024/08/Shivaji-maharaj-wallpaper-549x1024.jpeg", alt: "Gold Frame Mirror - Full View" },
      { src: "/assets/products/gold-frame-2.jpg", alt: "Gold Frame Mirror - Detail" },
      { src: "/assets/products/gold-frame-3.jpg", alt: "Gold Frame Mirror - Side Profile" },
    ],
    rating: 4.7,
    reviews: [
      {
        id: "rev5",
        userName: "Interior Designer",
        rating: 5,
        comment: "Stunning craftsmanship that elevates any room. My clients are always impressed.",
        date: "2023-11-10"
      },
      {
        id: "rev6",
        userName: "Luxury Home Owner",
        rating: 4.5,
        comment: "Beautiful piece that makes a statement. Shipping took longer than expected.",
        date: "2023-10-18"
      }
    ],
    details: [
      "Size: 100cm x 150cm",
      "Frame Width: 15cm",
      "Materials: Solid wood, genuine gold leaf",
      "Mirror: 5mm beveled edge crystal glass",
      "Hanging hardware included"
    ],
    features: [
      "Hand-applied genuine gold leaf finish",
      "Individually crafted by artisans",
      "Distortion-free crystal glass",
      "Ready to hang horizontally or vertically"
    ],
    materials: ["Solid Wood", "Gold Leaf", "Crystal Glass"],
    dimensions: "100cm x 150cm (overall)",
    inStock: 4,
    category: "Mirrors",
    tags: ["Mirror", "Gold Frame", "Luxury", "Home Decor"],
    featured: true
  },
  {
    id: "abstract-gold-painting",
    title: "Abstract Gold Fusion",
    artist: "Leila Williams",
    price: 3800,
    shortDescription: "Contemporary abstract painting with dramatic gold accents",
    description: "This striking contemporary artwork combines bold brushstrokes with luminous gold elements that catch and reflect light from every angle. The artist has masterfully balanced deep red tones with black undertones and brilliant gold highlights, creating a composition that's both dramatic and elegant. Each piece is unique, with slight variations in the gold application making every artwork one-of-a-kind.",
    images: [
      { src: "https://shivajimaharajfoundation.com/wp-content/uploads/2024/09/Chhatrapati-Shivaji-Maharaj-34.jpg", alt: "Abstract Gold Painting - Full View" },
      { src: "/assets/products/abstract-gold-2.jpg", alt: "Abstract Gold Painting - Detail" },
      { src: "/assets/products/abstract-gold-3.jpg", alt: "Abstract Gold Painting - Side Angle" },
    ],
    rating: 4.9,
    reviews: [
      {
        id: "rev7",
        userName: "Modern Art Lover",
        rating: 5,
        comment: "The way the gold catches the light creates a constantly changing artwork throughout the day.",
        date: "2023-12-01"
      },
      {
        id: "rev8",
        userName: "Gallery Owner",
        rating: 4.8,
        comment: "A powerful piece that our clients are consistently drawn to. The gold elements photograph poorly but are stunning in person.",
        date: "2023-11-20"
      }
    ],
    details: [
      "Size: 80cm x 120cm",
      "Medium: Acrylic on canvas with gold leaf",
      "Gallery-wrapped canvas, 4cm depth",
      "Created: 2023",
      "Signed by artist",
      "Certificate of authenticity included"
    ],
    features: [
      "Ready to hang (no frame needed)",
      "Protected with UV-resistant varnish",
      "Genuine gold leaf detailing",
      "Each piece slightly unique"
    ],
    materials: ["Canvas", "Acrylic Paint", "24k Gold Leaf"],
    dimensions: "80cm x 120cm x 4cm",
    inStock: 1,
    category: "Contemporary Art",
    tags: ["Abstract", "Gold", "Contemporary", "Wall Art"],
    featured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getRelatedProducts = (id: string, limit: number = 3): Product[] => {
  const currentProduct = getProductById(id);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== id && 
      (product.category === currentProduct.category || 
       product.tags.some(tag => currentProduct.tags.includes(tag))))
    .slice(0, limit);
};

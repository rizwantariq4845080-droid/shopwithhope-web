export const site = {
  name: "Shop with Hope",
  shortName: "SWH",
  tagline: "Imported branded laptops in Gulberg Lahore",
  whatsapp: "923074674673",
  whatsappDisplay: "0307-467-467-3",
  whatsappAlt: "0337-467-467-3",
  email: "shopswithhope@gmail.com",
  address: "Shop #20, First Floor, MCT Plaza, Main Boulevard Gulberg III, Lahore",
  hours: "11 AM – 10 PM Daily",
  domain: "shopwithhope.pk",
} as const;

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Hi Shop with Hope, I want laptop details and price.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
};

export const categories = [
  {
    name: "Dell",
    description: "Latitude, XPS, Precision",
    href: "#stock",
  },
  {
    name: "HP",
    description: "EliteBook, ProBook, Dragonfly",
    href: "#stock",
  },
  {
    name: "Lenovo",
    description: "ThinkPad, Yoga, IdeaPad",
    href: "#stock",
  },
  {
    name: "Microsoft",
    description: "Surface Laptop & more",
    href: "#stock",
  },
  {
    name: "Accessories",
    description: "Chargers, stands, hubs, bags",
    href: "#accessories",
  },
] as const;

export const featuredLaptops = [
  {
    brand: "HP",
    model: "EliteBook 840 G9",
    specs: "Core i5 12th Gen · 16GB DDR5 · 512GB NVMe",
    highlight: "Premium business ultrabook",
  },
  {
    brand: "Dell",
    model: "Latitude 5531",
    specs: "Core i7 12th Gen H · 14 Cores · 16GB DDR5 · 512GB",
    highlight: "High performance 15.6\"",
  },
  {
    brand: "Microsoft",
    model: "Surface Laptop 5",
    specs: "Core i5 12th Gen · 16GB DDR5 · 256GB · 2K",
    highlight: "Premium thin Microsoft laptop",
  },
  {
    brand: "HP",
    model: "EliteBook Dragonfly G2 x360",
    specs: "Core i7 11th Gen · 16GB · 512GB · 13.3\" Touch",
    highlight: "Ultra light convertible",
  },
] as const;

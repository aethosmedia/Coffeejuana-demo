// NOTE FOR COFFEEJUANA: Fields marked "sample" are demo placeholders and
// should be swapped for real copy, photography, hours and prices before
// launch. Address, rating, and review quotes are pulled from the current
// Google Maps listing.

export const brand = {
  name: "Coffeejuana",
  tagline: "Rich coffee. Real hospitality.",
  city: "Delhi",
};

export const locations = [
  {
    slug: "krishna-nagar",
    name: "Coffeejuana — Krishna Nagar",
    address: "F1/9, Block E, Krishna Nagar, Delhi, 110051",
    mapsUrl:
      "https://www.google.com/maps/place/Coffeejuana/@28.6595448,77.2823381,18.44z/data=!4m6!3m5!1s0x390cfd0ee49f4279:0x4091880b160a989d!8m2!3d28.6598733!4d77.2828971",
    lat: 28.6598733,
    lng: 77.2828971,
    rating: 5.0,
    ratingCount: 17,
    priceLevel: "₹₹ (moderate)",
    // sample — confirm real hours with the owner
    hours: [
      { day: "Mon – Fri", time: "9:00 AM – 10:30 PM" },
      { day: "Sat – Sun", time: "9:00 AM – 11:00 PM" },
    ],
    phone: "sample — add real contact number",
  },
];

// Real guest quotes, lightly trimmed, sourced from the Google Maps listing.
export const testimonials = [
  {
    quote:
      "Amazing coffee! Rich, smooth and full of flavour. You can really taste the quality in every sip.",
    author: "Google review",
  },
  {
    quote:
      "I loved the cheesy Maggie — served exactly how I wanted, with a great cheese pull. Hospitality and cleanliness stood out too.",
    author: "Google review",
  },
  {
    quote: "I've never had a paneer wrap this good before.",
    author: "Google review",
  },
  {
    quote: "Amazing taste, great hospitality and good ambience.",
    author: "Google review",
  },
];

// Menu — items in bold call-outs below are the ones guests specifically
// praised in reviews (hazelnut cold coffee, cheesy Maggie, paneer wrap).
// The rest of the menu is sample structure only, for the demo build.
export const menu = [
  {
    category: "Signature Coffee",
    items: [
      {
        name: "Hazelnut Cold Coffee",
        desc: "Our most-loved cold brew — nutty, smooth, guest favourite.",
        price: "₹180",
        tag: "Guest favourite",
      },
      {
        name: "Classic Cappuccino",
        desc: "Double shot espresso, steamed milk, microfoam.",
        price: "₹150",
      },
      {
        name: "Espresso",
        desc: "Single or double shot, roasted in-house blend.",
        price: "₹110",
      },
      {
        name: "Filter Kaapi",
        desc: "South Indian style, brewed slow.",
        price: "₹120",
      },
    ],
  },
  {
    category: "Cold & Iced",
    items: [
      { name: "Iced Americano", desc: "Bold, clean, over ice.", price: "₹160" },
      { name: "Caramel Cold Brew", desc: "12-hour steeped, caramel drizzle.", price: "₹190" },
      { name: "Cold Chocolate", desc: "For the non-coffee table.", price: "₹170" },
    ],
  },
  {
    category: "All-Day Snacks",
    items: [
      {
        name: "Cheesy Maggi",
        desc: "The one guests keep coming back for — loaded with cheese.",
        price: "₹140",
        tag: "Guest favourite",
      },
      {
        name: "Paneer Wrap",
        desc: "Grilled paneer, house sauce, fresh veg.",
        price: "₹170",
        tag: "Guest favourite",
      },
      { name: "Peri Peri Fries", desc: "Crisp, spiced, shareable.", price: "₹130" },
      { name: "Grilled Sandwich", desc: "Toasted, melted, simple done right.", price: "₹150" },
    ],
  },
  {
    category: "Something Sweet",
    items: [
      { name: "Belgian Chocolate Waffle", desc: "Warm waffle, molten centre.", price: "₹190" },
      { name: "Cookie of the Day", desc: "Baked fresh, ask your barista.", price: "₹80" },
    ],
  },
];

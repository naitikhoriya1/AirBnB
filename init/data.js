const sampleListing = [
  {
    title: "Luxurious Beachfront Villa in Goa",
    des: "Experience the ultimate beach vacation in this luxurious villa in Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww",
    },
    price: 250,
    location: "Goa",
    country: "India",
  },
  {
    title: "Scenic Mountain Retreat in Manali",
    des: "Escape to the serene mountains in this cozy retreat with breathtaking views.",

    image: {
      filename: "listingimage",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.livemint.com%2Flm-img%2Fimg%2F2023%2F12%2F23%2F1600x900%2FPTI12-22-2023-000366A-0_1703351000885_1703351019474.jpg&tbnid=OppFV24gbk1-oM&vet=12ahUKEwiCh-jLq9eDAxXTTGcHHUQ5BLEQMygsegUIARDUAQ..i&imgrefurl=https%3A%2F%2Fwww.livemint.com%2Fnews%2Findia%2Fhimachal-pradesh-news-traffic-congestion-in-kasol-manali-shimla-highway-ahead-of-christmas-eve-11703350610560.html&docid=8TVHHN1WvkHUPM&w=1600&h=900&q=manali&ved=2ahUKEwiCh-jLq9eDAxXTTGcHHUQ5BLEQMygsegUIARDUAQ",
    },
    price: 180,
    location: "Manali",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    des: "Immerse yourself in the rich history of Jaipur by staying in this heritage haveli.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
    },
    price: 200,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Floating Houseboat in Kerala Backwaters",
    des: "Experience the beauty of Kerala's backwaters from a luxurious floating houseboat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1652003133780-21fb347524f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyZWxhfGVufDB8fDB8fHww",
    },
    price: 300,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Urban Oasis in Mumbai",
    des: "Stay in the heart of Mumbai in this modern and stylish urban oasis.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 180,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    des: "Relax by the Ganges in this charming cottage with stunning riverside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmlzaGlrZXNofGVufDB8fDB8fHww",
    },
    price: 120,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Traditional House in Udaipur",
    des: "Experience the culture of Udaipur by staying in this beautifully restored traditional house.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFVkYWlwdXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 160,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Treehouse Retreat in Wayanad",
    des: "Escape to the treetops in this unique and eco-friendly treehouse retreat in Wayanad.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1620827195512-6422baa0c5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdheWFuYWR8ZW58MHx8MHx8fDA%3D",
    },
    price: 180,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "City View Apartment in Delhi",
    des: "Enjoy panoramic city views from this stylish apartment in the heart of Delhi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
    },
    price: 200,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Tea Plantation Bungalow in Darjeeling",
    des: "Stay in a historic bungalow surrounded by tea plantations in Darjeeling.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 220,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Himalayan Chalet in Shimla",
    des: "Escape to the Himalayas and stay in this cozy chalet with panoramic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1637199489922-2cb81819fcbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2ltbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 180,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Beachfront Resort in Puducherry",
    des: "Relax by the beach in a luxurious resort with modern amenities in Puducherry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597073420615-7801d12fe2d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 250,
    location: "Puducherry",
    country: "India",
  },
  {
    title: "Eco-Friendly Farmstay in Coorg",
    des: "Experience sustainable living in an eco-friendly farmstay amidst the lush coffee plantations of Coorg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1569996980833-901b5cd2eb70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29vcmd8ZW58MHx8MHx8fDA%3D",
    },
    price: 160,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    des: "Step back in time and stay in a colonial bungalow surrounded by gardens in Ooty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T290eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 200,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Jungle Safari Camp in Bandipur",
    des: "Immerse yourself in nature with a stay at a jungle safari camp in Bandipur National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1699605471196-d3ed79fb3f3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFuZGlwdXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 180,
    location: "Bandipur",
    country: "India",
  },

  // Add more entries as needed
];

module.exports = { data: sampleListing };

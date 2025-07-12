export const freshBannerSlides = [
  {
    id: 1,
    image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/SuperValueDays/Homepage_DesktopHeroTemplate_3000x1200_2_2x._CB590826918_.jpg', // Replace with actual image URL from screenshot if possible, or a relevant placeholder
    alt: 'Match day mania',
    title: 'Match day mania',
    description: 'Grab your favourite snacks & cheer on',
  },
  // Add more slides if needed
];

export const groceryCategories = [
  { id: 'g1', name: 'Atta, rice & dal', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Atta-rice-dal_186x116._SY116_CB433688622_.jpg' },
  { id: 'g2', name: 'Dals & pulses', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Dals-Pulses_186x116._SY116_CB433688622_.jpg' },
  { id: 'g3', name: 'Oil & ghee', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Cooking-oil-ghee_186x116._SY116_CB433688622_.jpg' },
  { id: 'g4', name: 'Masala, sugar & salt', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Masala-dryfruits_186x116._SY116_CB433688622_.jpg' },
  { id: 'g5', name: 'Cereals & breakfast', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Breakfast-cereals_186x116._SY116_CB433688622_.jpg' },
  { id: 'g6', name: 'Tea, coffee & beverages', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GWcategorypage/Tea-coffee-bev_186x116._SY116_CB433688622_.jpg' },
];

export const personalCareCategories = [
  { id: 'pc1', name: 'Bath & body', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Bath_Body_130x130._CB574606036_.jpg' },
  { id: 'pc2', name: 'Hair care', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Hair_Care_130x130._CB574606036_.jpg' },
  { id: 'pc3', name: 'Skin & face', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Skin_Care_130x130._CB574606036_.jpg' },
  { id: 'pc4', name: 'Deos & perfumes', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Deos_Fragrances_130x130._CB574606036_.jpg' },
  { id: 'pc5', name: 'Feminine hygiene', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Feminine_Hygiene_130x130._CB574606036_.jpg' },
  { id: 'pc6', name: 'Men\'s grooming', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Desktop/subnav/Mens_Grooming_130x130._CB574606036_.jpg' },
  // Add more as per the image
];

export const seasonsSpecialJuices = [
  { id: 'ssj1', name: 'Minute Maid Pulpy Orange Juice, 1L', price: '68.00', image: 'https://m.media-amazon.com/images/I/61p2VBoGUFS._AC_UL320_.jpg', originalPrice: '80.00', discount: '15% OFF' },
  { id: 'ssj2', name: 'Tropicana Slice Mango Drink, 1.75L', price: '99.00', image: 'https://m.media-amazon.com/images/I/51yK1xVjAdL._AC_UL320_.jpg' },
  { id: 'ssj3', name: 'Maaza Mango Drink, 600ml', price: '34.00', image: 'https://m.media-amazon.com/images/I/71Qx4n72YWL._AC_UL320_.jpg', originalPrice: '40.00', discount: '15% OFF' },
  // Add more juices
];

export const seasonsSpecialSunscreen = [
  { id: 'sss1', name: 'Neutrogena Ultrasheer Sunscreen SPF 50+, 88ml', price: '571.00', image: 'https://m.media-amazon.com/images/I/61Y0m49MNEL._AC_UL320_.jpg', originalPrice: '750.00', discount: '24% OFF' },
  { id: 'sss2', name: 'WishCare 5% Niacinamide Sunscreen SPF50 PA+++', price: '388.00', image: 'https://m.media-amazon.com/images/I/617L0tM7N7L._AC_UL320_.jpg', originalPrice: '499.00', discount: '22% OFF' },
  // Add more sunscreens
];

// Helper function to format price for CartContext
export const formatPriceForCart = (priceString) => {
    return `$${parseFloat(priceString).toFixed(2)}`;
};
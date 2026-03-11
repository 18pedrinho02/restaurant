const navLinks = [ 
	{ id: "hero", title: "Home", }, 
	{ id: "menu", title: "Menu", }, 
	{ id: "about", title: "About Us", }, 
	{ id: "gallery", title: "Gallery", }, 
	{ id: "reservation", title: "Reservation", }, 
];

const menuList = [
 {
  id: "dish-1",
  name: "Grilled Salmon",
  description: "Fresh Atlantic salmon grilled to perfection, served with lemon butter and seasonal vegetables.",
  price: "18€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "main"
 },
 {
  id: "dish-2",
  name: "Classic Margherita Pizza",
  description: "Stone-baked pizza with fresh mozzarella, tomato sauce, and basil leaves.",
  price: "12€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "main"
 },
 {
  id: "dish-3",
  name: "Creamy Mushroom Risotto",
  description: "Arborio rice slowly cooked with mushrooms, parmesan cheese, and white wine.",
  price: "15€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: true,
  category: "main"
 },
 {
  id: "dish-4",
  name: "Beef Tenderloin Steak",
  description: "Juicy grilled beef tenderloin served with garlic butter and roasted potatoes.",
  price: "24€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: true,
  category: "main"
 },
 {
  id: "dish-5",
  name: "Chicken Alfredo Pasta",
  description: "Creamy Alfredo pasta with grilled chicken breast and parmesan.",
  price: "16€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "main"
 },

 /* ENTRADAS */

 {
  id: "dish-6",
  name: "Caesar Salad",
  description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
  price: "10€",
  image: "https://i.pinimg.com/736x/17/19/9c/17199c736fa9db346ef6f02394508516.jpg",
  popular: true,
  category: "starter"
 },
 {
  id: "dish-7",
  name: "Shrimp Tacos",
  description: "Soft tortillas filled with grilled shrimp, avocado, and spicy sauce.",
  price: "14€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "starter"
 },
 {
  id: "dish-11",
  name: "Bruschetta",
  description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
  price: "8€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "starter"
 },
 {
  id: "dish-12",
  name: "Garlic Butter Shrimp",
  description: "Sautéed shrimp cooked in garlic butter with fresh herbs and lemon.",
  price: "13€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: true,
  category: "starter"
 },
 {
  id: "dish-13",
  name: "Stuffed Mushrooms",
  description: "Baked mushrooms stuffed with cheese, herbs, and breadcrumbs.",
  price: "9€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular: false,
  category: "starter"
 },

 /* MAIS PRATOS PRINCIPAIS */

 {
  id: "dish-8",
  name: "Truffle Burger",
  description: "Premium beef burger with truffle mayo, caramelized onions, and brioche bun.",
  price: "17€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: false,
  category: "main"
 },
 {
  id: "dish-9",
  name: "Seafood Paella",
  description: "Traditional Spanish rice dish with shrimp, mussels, and fresh herbs.",
  price: "22€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: true,
  category: "main"
 },

 /* SOBREMESAS */

 {
  id: "dish-10",
  name: "Chocolate Lava Cake",
  description: "Warm chocolate cake with a molten center served with vanilla ice cream.",
  price: "9€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: false,
  category: "dessert"
 },
 {
  id: "dish-14",
  name: "Tiramisu",
  description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
  price: "8€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: true,
  category: "dessert"
 },
 {
  id: "dish-15",
  name: "Cheesecake",
  description: "Creamy cheesecake with a buttery biscuit base and berry sauce.",
  price: "7€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: false,
  category: "dessert"
 },
 {
  id: "dish-16",
  name: "Crème Brûlée",
  description: "Rich vanilla custard topped with a caramelized sugar crust.",
  price: "8€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular: true,
  category: "dessert"
 }
];

const galleryImages = [
  { src: "https://i.pinimg.com/736x/fc/0a/24/fc0a24dba1f9a43d93768ad30e4608e7.jpg", alt: "Dish 1", caption: "Grilled Salmon" },
  { src: "https://i.pinimg.com/736x/ce/3c/fb/ce3cfb6b672a3fe525f11345566f482d.jpg", alt: "Dish 2", caption: "Truffle Burger" },
  { src: "https://i.pinimg.com/736x/fc/0a/24/fc0a24dba1f9a43d93768ad30e4608e7.jpg", alt: "Dish 3", caption: "Mushroom Risotto" },
  { src: "https://i.pinimg.com/1200x/c5/c6/5f/c5c65fb0db0b42f2f1ca173b8fd38c56.jpg", alt: "Dish 4", caption: "Chocolate Lava Cake" },
  { src: "https://i.pinimg.com/736x/ce/3c/fb/ce3cfb6b672a3fe525f11345566f482d.jpg", alt: "Dish 5", caption: "Margherita Pizza" },
  { src: "https://i.pinimg.com/1200x/c5/c6/5f/c5c65fb0db0b42f2f1ca173b8fd38c56.jpg", alt: "Dish 6", caption: "Caesar Salad" },
];

export { navLinks, menuList, galleryImages };
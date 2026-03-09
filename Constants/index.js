const navLinks = [ 
	{ id: "hero", title: "Home", }, 
	{ id: "about", title: "About Us", }, 
	{ id: "menu", title: "Menu", }, 
	{ id: "gallery", title: "Gallery", }, 
	{ id: "reservation", title: "Reservation", }, 
];

const menuList = [
 {
  id: "dish-1",
  name: "Grilled Salmon",
  description: "Fresh Atlantic salmon grilled to perfection, served with lemon butter and seasonal vegetables.",
  price: "18€",
  image: "/images/menu/salmon.jpg",
  popular:false
 },
 {
  id: "dish-2",
  name: "Classic Margherita Pizza",
  description: "Stone-baked pizza with fresh mozzarella, tomato sauce, and basil leaves.",
  price: "12€",
  image: "/images/menu/pizza.jpg",
  popular:false
 },
 {
  id: "dish-3",
  name: "Creamy Mushroom Risotto",
  description: "Arborio rice slowly cooked with mushrooms, parmesan cheese, and white wine.",
  price: "15€",
  image: "https://i.pinimg.com/1200x/f1/bd/fb/f1bdfb372cc99135e5f4e1c06864b601.jpg",
  popular:true
 },
 {
  id: "dish-4",
  name: "Beef Tenderloin Steak",
  description: "Juicy grilled beef tenderloin served with garlic butter and roasted potatoes.",
  price: "24€",
  image: "https://i.pinimg.com/1200x/e7/f4/a5/e7f4a5d6388b3227423b2a2dc379a089.jpg",
  popular:true
 },
 {
  id: "dish-5",
  name: "Chicken Alfredo Pasta",
  description: "Creamy Alfredo pasta with grilled chicken breast and parmesan.",
  price: "16€",
  image: "/images/menu/alfredo.jpg",
  popular:false
 },
 {
  id: "dish-6",
  name: "Caesar Salad",
  description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
  price: "10€",
  image: "https://i.pinimg.com/736x/17/19/9c/17199c736fa9db346ef6f02394508516.jpg",
  popular:true
 },
 {
  id: "dish-7",
  name: "Shrimp Tacos",
  description: "Soft tortillas filled with grilled shrimp, avocado, and spicy sauce.",
  price: "14€",
  image: "/images/menu/tacos.jpg",
  popular:false
 },
 {
  id: "dish-8",
  name: "Truffle Burger",
  description: "Premium beef burger with truffle mayo, caramelized onions, and brioche bun.",
  price: "17€",
  image: "/images/menu/burger.jpg",
  popular:false
 },
 {
  id: "dish-9",
  name: "Seafood Paella",
  description: "Traditional Spanish rice dish with shrimp, mussels, and fresh herbs.",
  price: "22€",
  image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
  popular:true
 },
 {
  id: "dish-10",
  name: "Chocolate Lava Cake",
  description: "Warm chocolate cake with a molten center served with vanilla ice cream.",
  price: "9€",
  image: "/images/menu/lava-cake.jpg",
  popular:false
 }
];

export { navLinks, menuList };
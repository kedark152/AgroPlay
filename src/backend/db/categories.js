import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fertilizers",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652683834/npk_ccbuv1.png",
  },
  {
    _id: uuid(),
    categoryName: "Pesticides",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652683923/chemical_elg9mu.png",
  },
  {
    _id: uuid(),
    categoryName: "Agriculture Tools",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652684584/shovels_rbyeck.png",
  },
  {
    _id: uuid(),
    categoryName: "Fruit Farming",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652541964/fruits_yaucjz.png",
  },
  {
    _id: uuid(),
    categoryName: "Vegetable Farming",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652684715/vegetable_ccxhor.png",
  },
  {
    _id: uuid(),
    categoryName: "Safety Wear",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652684838/farmer_xtmwxc.png",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652685170/smart-farm_1_gclsxx.png",
  },
  {
    _id: uuid(),
    categoryName: "Hydroponic Farming",
    categoryImg:
      "https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652685452/hydroponic-gardening_a4mz3l.png",
  },
];

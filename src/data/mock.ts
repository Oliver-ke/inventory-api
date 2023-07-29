const createdAt = new Date().toISOString();

export const supplies = [
  {
    id: 1,
    items: [],
    createdAt,
  },
  {
    id: 2,
    items: [],
    createdAt,
  },
];

export const tags = [
  {
    id: 1,
    label: "House_Holds",
    createdAt,
    items: [],
  },
  {
    id: 2,
    label: "Mens_Wears",
    createdAt,
    items: [],
  },
];

export const categories = [
  {
    id: 1,
    name: "Men",
    createdAt,
    items: [],
  },
];

export const items = [
  {
    id: 1,
    name: "T-shirt",
    description: "A T-shirt",
    image: "https://via.placeholder.com/150",
    tags: [1],
    categories: [1],
    supply: 1,
    createdAt,
  },
  {
    id: 1,
    name: "T-shirt",
    description: "A T-shirt",
    image: "https://via.placeholder.com/150",
    tags: [1],
    categories: [1],
    supply: 1,
    createdAt,
  },
];

export default {
  tags,
  supplies,
  categories,
  items,
};

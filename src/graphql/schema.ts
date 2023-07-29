export const typeDefs = `#graphql
  type Item {
    id: ID!
    name: String
    description: String
    image: String
    tags: [Tag]
    category: Category
    supply: Supply
    createdAt: String
  }

  type Tag {
    id: ID!
    label: String
    createdAt: String
    items: [Item]
  }

  type Category {
    id: ID!
    name: String
    createdAt: String
    items: [Item]
  }

  type Supply {
    id: ID!
    receivedBy: String
    items: [Item]
    createdAt: String
  }

  type Query {
    tags: [Tag]
    categories: [Category]
    supplies: [Supply]
    items: [Item]
  }

  input ItemInput {
    name: String
    description: String 
    image: String 
    tags: [ID]
    category: ID
    supply: ID
  }

  type Mutation {
    addTag(label: String!): Tag
    addItem(input: ItemInput): Item
    addCategory(name: String): Category
    addSupply(receivedBy: String, items: [ID]): Supply

    deleteTag(id: ID!): Tag
    deleteItem(id: ID!): Item
    deleteCategory(id: ID!): Category
    deleteSupply(id: ID!): Supply
  }
  
`;

export default typeDefs;

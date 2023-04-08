const { ApolloServer, gql } = require("apollo-server");
const { categories, products } = require("./sampleData");


const typeDefs = gql`
type Query {
  products: [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!): Category
}

type Category {
  id: ID!
  name: String!
  image: String!
  products: [Product!]!
}

type Product {
  id: ID!
  name: String!
  vendor: String!
  image: String!
  price: Float!
  category: Category!
  inventory: Int
  rentalType: String
  availability: [String!]
  location: Location
}

type Location {
  lat: Float!
  lng: Float!
}

`;


const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((product) => product.id === id),
    categories: () => categories,
    category: (_, { id }) => categories.find((category) => category.id === id),
  },
  Product: {
    category: (product) =>
      categories.find((category) => category.id === product.categoryId),
  },
  Category: {
    products: (category) =>
      products.filter((product) => product.category === category.id),
  },
};
   


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

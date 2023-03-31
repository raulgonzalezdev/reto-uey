const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  interface Product {
    id: ID!
    nombre: String!
    vendedor: String!
    imagen: String!
    precio: Float!
    tipo: String!
  }

  type SimpleProduct implements Product {
    id: ID!
    nombre: String!
    vendedor: String!
    imagen: String!
    precio: Float!
    tipo: String!
    inventario: Int!
  }

  type RentableProduct implements Product {
    id: ID!
    nombre: String!
    vendedor: String!
    imagen: String!
    precio: Float!
    tipo: String!
    tipoRenta: String!
    disponibilidad: [String!]!
  }

  type Location {
    lat: Float!
    lng: Float!
  }

  type SpaceProduct implements Product {
    id: ID!
    nombre: String!
    vendedor: String!
    imagen: String!
    precio: Float!
    tipo: String!
    ubicacion: Location!
    disponibilidad: [String!]!
  }
`;

const products = [
  // Ejemplo de datos, en una implementación real estos datos provendrían de una base de datos
  {
    id: "1",
    nombre: "Coca-Cola",
    vendedor: "Coca-Cola Company",
    imagen: "https://www.giorgiogastro.com.br/ipatinga/wp-content/uploads/2018/09/coca-cola.jpg",
    precio: 15,
    tipo: "simple",
    inventario: 100,
  },
  {
    id: "2",
    nombre: "Mesa redonda",
    vendedor: "Uey Rentals",
    imagen: "https://as1.ftcdn.net/v2/jpg/01/69/36/54/1000_F_169365488_B0ccQN6fmPUlTGOWycklDYcXfL39A7xC.jpg",
    precio: 200,
    tipo: "rentable",
    tipoRenta: "noche",
    disponibilidad: ["2023-04-01", "2023-04-03", "2023-04-05"],
  },
  {
    id: "3",
    nombre: "Salón de eventos",
    vendedor: "Eventos Uey",
    imagen: "https://st.depositphotos.com/1000336/3478/i/450/depositphotos_34789359-stock-photo-tables-set-for-meal.jpg",
    precio: 5000,
    tipo: "espacio",
    ubicacion: {
      lat: 19.4326077,
      lng: -99.13320799999997,
    },
    disponibilidad: ["2023-04-10", "2023-04-15", "2023-04-20"],
  },
];

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((product) => product.id === id),
  },
  Product: {
    __resolveType(obj) {
      if (obj.tipo === "simple") {
        return "SimpleProduct";
      }
      if (obj.tipo === "rentable") {
        return "RentableProduct";
      }
      if (obj.tipo === "espacio") {
        return "SpaceProduct";
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

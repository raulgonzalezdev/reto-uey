import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      nombre
      imagen
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    product(id: $id) {
      id
      nombre
      vendedor
      imagen
      precio
      tipo
      ... on RentableProduct {
        tipoRenta
        disponibilidad
      }
      ... on SpaceProduct {
        ubicacion {
          lat
          lng
        }
        disponibilidad
      }
      ... on SimpleProduct {
        inventario
      }
    }
  }
`;

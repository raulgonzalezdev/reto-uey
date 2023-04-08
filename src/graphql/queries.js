// queries.js
import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      name
      image
      price
      category {
        id
        name
      }
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    product(id: $id) {
      id
      name
      vendor
      image
      price
      category {
        id
        name
      }
      rentalType
      availability
      location {
        lat
        lng
      }
      inventory
    }
  }
`;

export const ALL_CATEGORIES_QUERY = gql`
  query AllCategoriesQuery {
    categories {
      id
      name
      image
    }
  }
`;

export const CATEGORY_QUERY = gql`
  query CategoryQuery($id: ID!) {
    category(id: $id) {
      id
      name
      image
      products {
        id
        name
        image
        vendor
        price
      }
    }
  }
`;

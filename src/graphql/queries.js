// queries.js
import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      name
      image
      price
      featured
      newarrivals
      category {
        id
        name
      }
      branch {
        id
        name
      }
      sizes {
        id
        name
      }
      colors {
        id
        name
        hexCode
      }
    }
  }
`;
ALL_PRODUCTS_QUERY.queryName = "AllProductsQuery";

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    product(id: $id) {
      id
      name
      vendor
      image
      price
      featured
      newarrivals
      category {
        id
        name
      }
      branch {
        id
        name
      }
      sizes {
        id
        name
      }
      colors {
        id
        name
        hexCode
      }
      inventory
      description
    }
  }
`;
PRODUCT_QUERY.queryName = "ProductQuery";

export const ALL_CATEGORIES_QUERY = gql`
  query AllCategoriesQuery {
    categories {
      id
      name
      image
    }
  }
`;
ALL_CATEGORIES_QUERY.queryName = "AllCategoriesQuery";

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
        branch {
          id
          name
        }
      }
    }
  }
`;
CATEGORY_QUERY.queryName = "CategoryQuery";

export const FEATURED_PRODUCTS_QUERY = gql`
  query FeaturedProductsQuery {
    featuredProducts {
      id
      name
      image
      price
      featured
      newarrivals
      category {
        id
        name
      }
      branch {
        id
        name
      }
      sizes {
        id
        name
      }
      colors {
        id
        name
        hexCode
      }
    }
  }
`;
FEATURED_PRODUCTS_QUERY.queryName = "FeaturedProductsQuery";

export const NEW_ARRIVALS_PRODUCTS_QUERY = gql`
  query NewArrivalsProductsQuery {
    newArrivalsProducts {
      id
      name
      image
      price
      featured
      newarrivals
      category {
        id
        name
      }
      branch {
        id
        name
      }
      sizes {
        id
        name
      }
      colors {
        id
        name
        hexCode
      }
    }
  }
`;
NEW_ARRIVALS_PRODUCTS_QUERY.queryName = "NewArrivalsProductsQuery";

export const ALL_ADDRESSES_QUERY = gql`
  query AllAddressesQuery {
    addresses {
      id
      street
      city
      state
      zipCode
      country
      userId
    }
  }
`;
ALL_ADDRESSES_QUERY.queryName = "AllAddressesQuery";

// Address by ID
export const ADDRESS_QUERY = gql`
  query AddressQuery($id: ID!) {
    address(id: $id) {
      id
      street
      city
      state
      zipCode
      country
      userId
    }
  }
`;
ADDRESS_QUERY.queryName = "AddressQuery";

// All branches
export const ALL_BRANCHES_QUERY = gql`
  query AllBranchesQuery {
    branches {
      id
      name
    }
  }
`;
ALL_BRANCHES_QUERY.queryName = "AllBranchesQuery";

// Branch by ID
export const BRANCH_QUERY = gql`
  query BranchQuery($id: ID!) {
    branch(id: $id) {
      id
      name
    }
  }
`;
BRANCH_QUERY.queryName = "BranchQuery";

// All carts
export const ALL_CARTS_QUERY = gql`
  query AllCartsQuery {
    carts {
      id
      userId
    }
  }
`;
ALL_CARTS_QUERY.queryName = "AllCartsQuery";

// Cart by ID
export const CART_QUERY = gql`
  query CartQuery($id: ID!) {
    cart(id: $id) {
      id
      userId
    }
  }
`;
CART_QUERY.queryName = "CartQuery";

// All cart items
export const ALL_CART_ITEMS_QUERY = gql`
  query AllCartItemsQuery {
    cartItems {
      id
      cartId
      productId
      quantity
      price
    }
  }
`;
ALL_CART_ITEMS_QUERY.queryName = "AllCartItemsQuery";

// Cart item by ID
export const CART_ITEM_QUERY = gql`
  query CartItemQuery($id: ID!) {
    cartItem(id: $id) {
      id
      cartId
      productId
      quantity
      price
    }
  }
`;
CART_ITEM_QUERY.queryName = "CartItemQuery";

// All colors
export const ALL_COLORS_QUERY = gql`
  query AllColorsQuery {
    colors {
      id
      name
      hexCode
    }
  }
`;
ALL_COLORS_QUERY.queryName = "AllColorsQuery";

// Color by ID
export const COLOR_QUERY = gql`
  query ColorQuery($id: ID!) {
    color(id: $id) {
      id
      name
      hexCode
    }
  }
`;
COLOR_QUERY.queryName = "ColorQuery";

// All payment methods
export const ALL_PAYMENT_METHODS_QUERY = gql`
  query AllPaymentMethodsQuery {
    paymentMethods {
      id
      name
    }
  }
`;
ALL_PAYMENT_METHODS_QUERY.queryName = "AllPaymentMethodsQuery";

// Payment method by ID
export const PAYMENT_METHOD_QUERY = gql`
  query PaymentMethodQuery($id: ID!) {
    paymentMethod(id: $id) {
      id
      name
    }
  }
`;
PAYMENT_METHOD_QUERY.queryName = "PaymentMethodQuery";

// All reviews
export const ALL_REVIEWS_QUERY = gql`
  query AllReviewsQuery {
    reviews {
      id
      userId
      productId
      rating
      comment
    }
  }
`;

ALL_REVIEWS_QUERY.queryName = "AllReviewsQuery";

// Review by ID
export const REVIEW_QUERY = gql`
  query ReviewQuery($id: ID!) {
    review(id: $id) {
      id  userId
      productId
      rating
      comment
    }
  }
`;
REVIEW_QUERY.queryName = "ReviewQuery";

// All sizes
export const ALL_SIZES_QUERY = gql`
  query AllSizesQuery {
    sizes {
      id
      name
    }
  }
`;
ALL_SIZES_QUERY.queryName = "AllSizesQuery";

// Size by ID
export const SIZE_QUERY = gql`
  query SizeQuery($id: ID!) {
    size(id: $id) {
      id
      name
    }
  }
`;
SIZE_QUERY.queryName = "SizeQuery";

// All users
export const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    users {
      id
      firstName
      lastName
      email
      role
    }
  }
`;
ALL_USERS_QUERY.queryName = "AllUsersQuery";

// User by ID
export const USER_QUERY = gql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
    }
  }
`;
USER_QUERY.queryName = "UserQuery";


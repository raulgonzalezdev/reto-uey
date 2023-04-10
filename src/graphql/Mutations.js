
// Mutations

import { gql } from "@apollo/client";
// Create, update and delete mutations for each model (Address, Branch, Cart, CartItem, Category, Color, PaymentMethod, Product, Review, Size, User)

// Create Address
export const CREATE_ADDRESS = gql`
  mutation CreateAddress($street: String!, $city: String!, $state: String!, $zipCode: String!, $country: String!, $userId: ID!) {
    createAddress(street: $street, city: $city, state: $state, zipCode: $zipCode, country: $country, userId: $userId) {
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

// Update Address
export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($id: ID!, $street: String, $city: String, $state: String, $zipCode: String, $country: String, $userId: ID) {
    updateAddress(id: $id, street: $street, city: $city, state: $state, zipCode: $zipCode, country: $country, userId: $userId) {
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

// Delete Address
export const DELETE_ADDRESS = gql`
  mutation DeleteAddress($id: ID!) {
    deleteAddress(id: $id) {
      id
    }
  }
`;

// Create Branch
export const CREATE_BRANCH = gql`
  mutation CreateBranch($name: String!) {
    createBranch(name: $name) {
      id
      name
    }
  }
`;

// Update Branch
export const UPDATE_BRANCH = gql`
  mutation UpdateBranch($id: ID!, $name: String) {
    updateBranch(id: $id, name: $name) {
      id
      name
    }
  }
`;

// Delete Branch
export const DELETE_BRANCH = gql`
  mutation DeleteBranch($id: ID!) {
    deleteBranch(id: $id) {
      id
    }
  }
`;

// Create Cart
export const CREATE_CART = gql`
  mutation CreateCart($userId: ID!) {
    createCart(userId: $userId) {
      id
      userId
    }
  }
`;

// Update Cart
export const UPDATE_CART = gql`
  mutation UpdateCart($id: ID!, $userId: ID) {
    updateCart(id: $id, userId: $userId) {
      id
      userId
    }
  }
`;

// Delete Cart
export const DELETE_CART = gql`
  mutation DeleteCart($id: ID!) {
    deleteCart(id: $id) {
      id
    }
  }
`;

// Create CartItem
export const CREATE_CART_ITEM = gql`
  mutation CreateCartItem($cartId: ID!, $productId: ID!, $quantity: Int!, $price: Float!) {
    createCartItem(cartId: $cartId, productId: $productId, quantity: $quantity, price: $price) {
      id
      cartId
      productId
      quantity
      price
    }
  }
`;

// Update CartItem
export const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($id: ID!, $cartId: ID, $productId: ID, $quantity: Int, $price: Float) {
    updateCartItem(id: $id, cartId: $cartId, productId: $productId, quantity: $quantity, price: $price) {
      id
      cartId
      productId
      quantity
      price
    }
  }
`;

// Delete CartItem
export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

// Create Category
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $image: String) {
    createCategory(name: $name, image: $image) {
      id
      name
      image
    }
  }
`;

// Update Category
export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: ID!, $name: String, $image: String) {
    updateCategory(id: $id, name: $name, image: $image) {
      id
      name
      image
    }
  }
`;

// Delete Category
export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;

// Create Color
export const CREATE_COLOR = gql`
  mutation CreateColor($name: String!, $hexCode: String) {
    createColor(name: $name, hexCode: $hexCode) {
      id
      name
      hexCode
    }
  }
`;

// Update Color
export const UPDATE_COLOR = gql`
  mutation UpdateColor($id: ID!, $name: String, $hexCode: String) {
    updateColor(id: $id, name: $name, hexCode:$updateColor) {
      id
      name
      hexCode
    }
  }
`;

// Delete Color
export const DELETE_COLOR = gql`
  mutation DeleteColor($id: ID!) {
    deleteColor(id: $id) {
      id
    }
  }
`;

// Create PaymentMethod
export const CREATE_PAYMENT_METHOD = gql`
  mutation CreatePaymentMethod($name: String!) {
    createPaymentMethod(name: $name) {
      id
      name
    }
  }
`;

// Update PaymentMethod
export const UPDATE_PAYMENT_METHOD = gql`
  mutation UpdatePaymentMethod($id: ID!, $name: String) {
    updatePaymentMethod(id: $id, name: $name) {
      id
      name
    }
  }
`;

// Delete PaymentMethod
export const DELETE_PAYMENT_METHOD = gql`
  mutation DeletePaymentMethod($id: ID!) {
    deletePaymentMethod(id: $id) {
      id
    }
  }
`;

// Create Product
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $vendor: String!, $image: String!, $price: Float!, $categoryId: ID!, $inventory: Int!, $rentalType: String!, $featured: Boolean, $newarrivals: Boolean, $description: String) {
    createProduct(name: $name, vendor: $vendor, image: $image, price: $price, categoryId: $categoryId, inventory: $inventory, rentalType: $rentalType, featured: $featured, newarrivals: $newarrivals, description: $description) {
      id
      name
      vendor
      image
      price
      categoryId
      inventory
      rentalType
      featured
      newarrivals
      description
    }
  }
`;

// Update Product
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $name: String, $vendor: String, $image: String, $price: Float, $categoryId: ID, $inventory: Int, $rentalType: String, $featured: Boolean, $newarrivals: Boolean, $description: String) {
    updateProduct(id: $id, name: $name, vendor: $vendor, image: $image, price: $price, categoryId: $categoryId, inventory: $inventory, rentalType: $rentalType, featured: $featured, newarrivals: $newarrivals, description: $description) {
      id
      name
      vendor
      image
      price
      categoryId
      inventory
      rentalType
      featured
      newarrivals
      description
    }
  }
`;

// Delete Product
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

// Create Review
export const CREATE_REVIEW = gql`
  mutation CreateReview($userId: ID!, $productId: ID!, $rating: Int!, $comment: String!) {
    createReview(userId: $userId, productId: $productId, rating: $rating, comment: $comment) {
      id
      userId
      productId
      rating
      comment
    }
  }
`;

// Update Review
export const UPDATE_REVIEW = gql`
  mutation UpdateReview($id: ID!, $userId: ID, $productId: ID, $rating: Int, $comment: String) {
    updateReview(id: $id, userId: $userId, productId: $productId, rating: $rating, comment: $comment) {
      id
      userId
      productId
      rating
      comment
    }
  }
`;

//



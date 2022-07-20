import {
  orderCollectionPath,
  orderDocumentPath,
  paymentCollectionPath,
  paymentDocumentPath,
  restaurantCollectionPath,
  restaurantDocumentPath,
  reviewCollectionPath,
  reviewDocumentPath,
} from "./$path.js";

console.log(restaurantCollectionPath());
console.log(restaurantDocumentPath("restaurandId"));
console.log(reviewCollectionPath("restaurantId"));
console.log(reviewDocumentPath("restaurantId", "reviewsId"));
console.log(orderCollectionPath("restaurantId"));
console.log(orderDocumentPath("restaurantId", "ordersId"));
console.log(paymentCollectionPath("restaurantId"));
console.log(paymentDocumentPath("restaurantId", "paymentsId"));

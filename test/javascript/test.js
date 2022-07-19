import {
  fileCollectionPath,
  fileDocumentPath,
  folderCollectionPath,
  folderDocumentPath,
  groupCollectionPath,
  groupDocumentPath,
  orderCollectionPath,
  orderDocumentPath,
  paymentCollectionPath,
  paymentDocumentPath,
  restaurantCollectionPath,
  restaurantDocumentPath,
  reviewCollectionPath,
  reviewDocumentPath,
  userCollectionPath,
  userDocumentPath,
} from "./$path.js";

console.log(restaurantCollectionPath());
console.log(restaurantDocumentPath("restaurandId"));
console.log(reviewCollectionPath("restaurantId"));
console.log(reviewDocumentPath("restaurantId", "reviewsId"));
console.log(orderCollectionPath("restaurantId"));
console.log(orderDocumentPath("restaurantId", "ordersId"));
console.log(paymentCollectionPath("restaurantId"));
console.log(paymentDocumentPath("restaurantId", "paymentsId"));
console.log(groupCollectionPath());
console.log(groupDocumentPath("groupId"));
console.log(userCollectionPath("groupId"));
console.log(userDocumentPath("groupId", "userid"));
console.log(folderCollectionPath("groupId", "userId"));
console.log(
  folderDocumentPath("groupId", "userId", ["folder1", "folder2", "folder3"])
);
console.log(
  fileCollectionPath("groupId", "usrId", ["folder1", "folder2", "folder3"])
);
console.log(
  fileDocumentPath(
    "groupId",
    "usrId",
    ["folder1", "folder2", "folder3"],
    "fileId"
  )
);

package test.java;

public class Test {
    public static void main(String[] args) {
        System.out.println(Firepath.restaurantCollectionPath());
        System.out.println(Firepath.restaurantCollectionPath());
        System.out.println(Firepath.restaurantDocumentPath("restaurandId"));
        System.out.println(Firepath.reviewCollectionPath("restaurantId"));
        System.out.println(Firepath.reviewDocumentPath("restaurantId", "reviewsId"));
        System.out.println(Firepath.orderCollectionPath("restaurantId"));
        System.out.println(Firepath.orderDocumentPath("restaurantId", "ordersId"));
        System.out.println(Firepath.paymentCollectionPath("restaurantId"));
        System.out.println(Firepath.paymentDocumentPath("restaurantId", "paymentsId"));
    }
}

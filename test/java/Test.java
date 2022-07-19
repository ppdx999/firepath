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
        System.out.println(Firepath.groupCollectionPath());
        System.out.println(Firepath.groupDocumentPath("groupId"));
        System.out.println(Firepath.userCollectionPath("groupId"));
        System.out.println(Firepath.userDocumentPath("groupId", "userid"));
        System.out.println(Firepath.folderCollectionPath("groupId", "userId"));
        System.out.println(Firepath.folderDocumentPath("groupId", "userId", new String[]{"folder1", "folder2", "folder3"}));
        System.out.println(Firepath.fileCollectionPath("groupId", "usrId", new String[]{"folder1", "folder2", "folder3"}));
        System.out.println(Firepath.fileDocumentPath( "groupId", "usrId", new String[]{"folder1", "folder2", "folder3"}, "fileId"));
    }
}

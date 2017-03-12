package runners;

import com.leepresswood.common.util.ImageUtility;
import javafx.scene.image.Image;

public class TestImageLoad {
   public static void main(String[] args) {
      Image image = ImageUtility.readImage("mondrian1.jpg");
   
      System.out.println(image.getWidth());
      System.out.println(image.getHeight());
   }
}

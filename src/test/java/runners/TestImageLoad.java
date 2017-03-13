package runners;

import com.leepresswood.common.util.ImageUtility;

import java.awt.image.BufferedImage;

public class TestImageLoad {
   public static void main(String[] args) {
      BufferedImage image = ImageUtility.readImage("mondrian1.jpg");
   
      System.out.println(image.getWidth());
      System.out.println(image.getHeight());
   }
}

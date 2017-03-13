package integration;

import com.leepresswood.common.util.ImageUtility;
import org.junit.Test;

import java.awt.image.BufferedImage;

import static org.junit.Assert.*;


public class TestImageLoad {
   @Test
   public void imageHasNonZeroSize() {
      BufferedImage image = ImageUtility.readImage("mondrian1.jpg");
   
      assertNotNull(image);
      assertNotEquals(image.getWidth(), 0);
      assertNotEquals(image.getHeight(), 0);
   }
}

package integration;

import com.leepresswood.common.Slider;
import com.leepresswood.common.util.ImageUtility;
import org.junit.Test;

import java.awt.image.BufferedImage;

import static org.junit.Assert.*;

public class TestImageToSlider {
   @Test
   public void imageIsConvertedToSliders() {
      BufferedImage image = ImageUtility.readImage("mondrian1.jpg");
      Slider[] sliders = ImageUtility.imageToSliderArray(image);
      
      assertNotNull(image);
      assertNotNull(sliders);
      assertEquals(sliders.length, image.getWidth() * image.getHeight());
   }
}

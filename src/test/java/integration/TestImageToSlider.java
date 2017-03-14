package integration;

import com.leepresswood.common.domain.Slider;
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
   
   @Test
   public void sliderContainsCorrectNumberOfBytes() {
      BufferedImage image = ImageUtility.readImage("mondrian1.jpg");
      Slider slider = ImageUtility.imageToSliderArray(image)[0];
      int expectedValue = 3 * 3 * 8 * 3;
      
      assertEquals(expectedValue, slider.toBinary().length);
   }
}

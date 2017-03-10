package nn.common.util;

import javafx.scene.image.Image;
import javafx.scene.image.PixelReader;
import javafx.scene.paint.Color;
import nn.common.Slider;

public class ImageConverter {
   public static Slider[] toSliderArray(Image image){
      int width = (int) image.getWidth();
      int height = (int) image.getHeight();
      PixelReader reader = image.getPixelReader();
      
      Slider[] sliders = new Slider[width * height];
   
      for(int i = 0; i < width; i++) {
         for(int j = 0; j < height; j++) {
            Color color = reader.getColor(i, j);
            
         }
      }
      
      return sliders;
   }
}

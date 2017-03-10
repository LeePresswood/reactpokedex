package com.leepresswood.common.util;

import javafx.scene.image.Image;
import javafx.scene.image.PixelReader;
import com.leepresswood.common.Slider;

public class ImageConverter {
   public static Slider[] toSliderArray(Image image){
      int width = (int) image.getWidth();
      int height = (int) image.getHeight();
      PixelReader reader = image.getPixelReader();
      
      Slider[] sliders = new Slider[width * height];
      int current = 0;
   
      for(int i = 0; i < width; i++) {
         for(int j = 0; j < height; j++) {
            sliders[current++] = new Slider(reader, i, j);
         }
      }
      
      return sliders;
   }
}

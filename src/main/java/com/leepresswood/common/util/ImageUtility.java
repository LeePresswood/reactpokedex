package com.leepresswood.common.util;

import com.leepresswood.common.Slider;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class ImageUtility {
   public static BufferedImage readImage(String path) {
      try {
         File file = new File(ImageUtility.class.getClassLoader().getResource(path).getFile());
         
         return ImageIO.read(file);
      } catch(IOException e) {
         e.printStackTrace();
         return null;
      }
   }
   
   public static Slider[] imageToSliderArray(BufferedImage image) {
      int width = image.getWidth();
      int height = image.getHeight();
      
      Slider[] sliders = new Slider[width * height];
      int current = 0;
      
      for(int i = 0; i < width; i++) {
         for(int j = 0; j < height; j++) {
            sliders[current++] = new Slider(image, i, j);
         }
      }
      
      return sliders;
   }
}

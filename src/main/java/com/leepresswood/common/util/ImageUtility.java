package com.leepresswood.common.util;

import com.leepresswood.common.Slider;
import javafx.scene.image.Image;
import javafx.scene.image.PixelReader;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class ImageUtility {
   public static BufferedImage readImage(String path) {
      try {
         return ImageIO.read(new File(path));
      } catch(IOException e) {
         e.printStackTrace();
         return null;
      }
   
   }
   
   public static Slider[] imageToSliderArray(BufferedImage image) {
      int width = (int) image.getWidth();
      int height = (int) image.getHeight();
      
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

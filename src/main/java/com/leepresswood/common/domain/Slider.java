package com.leepresswood.common.domain;


import org.apache.commons.lang3.StringUtils;

import java.awt.*;
import java.awt.image.BufferedImage;

public class Slider {
   public static final int SLIDER_SIDE_SIZE = 3;
   private final Color[] colors = new Color[SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE];
   
   public Slider(BufferedImage image, int x, int y) {
      copyColorFromImage(image, x, y);
   }
   
   public boolean[] toBinary() {
      int howManyPixels = SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE;
      int howManyColors = 3;
      int bitsPerColor = 8;
      
      int current = 0;
      boolean[] booleans = new boolean[howManyPixels * howManyColors * bitsPerColor];
      
      for(Color color : colors) {
         if(color == null) {
            color = Color.WHITE;
         }
         
         String r = Integer.toBinaryString(color.getRed());
         r = StringUtils.leftPad(r, bitsPerColor, "0");
         
         String g = Integer.toBinaryString(color.getGreen());
         g = StringUtils.leftPad(g, bitsPerColor, "0");
   
         String b = Integer.toBinaryString(color.getBlue());
         b = StringUtils.leftPad(b, bitsPerColor, "0");
   
         String colorAsBinaryString = r + g + b;
         
         for(char character : colorAsBinaryString.toCharArray()) {
            booleans[current++] = character == '1';
         }
      }
      
      return booleans;
   }
   
   
   private void copyColorFromImage(BufferedImage image, int x, int y) {
      int startX = x - SLIDER_SIDE_SIZE / 2;
      int stopX = x + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      int startY = y - SLIDER_SIDE_SIZE / 2;
      int stopY = y + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      
      int current = 0;
      
      for(int i = startX; i < stopX; i++) {
         for(int j = startY; j < stopY; j++) {
            try {
               colors[current] = readColorFromData(image.getRGB(i, j));
            } catch(IndexOutOfBoundsException e) {
               colors[current] = null;
            } finally {
               current++;
            }
         }
      }
   }
   
   private Color readColorFromData(int color) {
      int red = (color & 0x00ff0000) >> 16;
      int green = (color & 0x0000ff00) >> 8;
      int blue = color & 0x000000ff;
      
      return new Color(red, green, blue);
   }
}

package com.leepresswood.common;


import java.awt.*;
import java.awt.image.BufferedImage;

public class Slider {
   private final int SLIDER_SIDE_SIZE = 3;
   private final boolean[] binary;
   
   public Slider(BufferedImage image, int x, int y) {
      Color[] colorCopy = copyBytesFromImage(reader, x, y);
      binary = asBinary(colorCopy);
   }
   
   public boolean[] getAsBinary() {
      return binary;
   }
   
   private boolean[] asBinary(Color[] colorCopy) {
      int howManyPixels = SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE;
      int howManyColors = 3;
      int bitsPerColor = 8;
   
      int current = 0;
      boolean[] booleans = new boolean[howManyPixels * howManyColors * bitsPerColor];
      
      for(Color color : colorCopy) {
         String r = Integer.toBinaryString((int) color.getRed() * 255);
         String g = Integer.toBinaryString((int) color.getGreen() * 255);
         String b = Integer.toBinaryString((int) color.getBlue() * 255);
         String colorAsDecimalString = r + g + b;
         
         for(char character : colorAsDecimalString.toCharArray()){
            booleans[current++] = character == '1';
         }
      }
      
      return booleans;
   }
   
   private Color[] copyBytesFromImage(BufferedImage image, int x, int y) {
      Color[] colorCopy = new Color[SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE];
      
      int startX = x - SLIDER_SIDE_SIZE / 2;
      int stopX = x + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      int startY = y - SLIDER_SIDE_SIZE / 2;
      int stopY = y + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      
      int current = 0;
      
      for(int i = startX; i < stopX; i++) {
         for(int j = startY; j < stopY; j++) {
            try {
               colorCopy[current] = readColorFromData(image.getRGB(i, j));
            } catch(IndexOutOfBoundsException e) {
               colorCopy[current] = null;
            } finally {
               current++;
            }
         }
      }
      
      return colorCopy;
   }
   
   private Color readColorFromData(int color){
      int  red   = (color & 0x00ff0000) >> 16;
      int  green = (color & 0x0000ff00) >> 8;
      int  blue  =  color & 0x000000ff;
      
      return new Color(red, green, blue);
   }
}

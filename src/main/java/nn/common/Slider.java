package nn.common;

import javafx.scene.image.PixelReader;
import javafx.scene.paint.Color;

public class Slider {
   private final int SLIDER_SIDE_SIZE = 3;
   private final boolean[] binary;
   
   public Slider(PixelReader reader, int x, int y) {
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
   
   private Color[] copyBytesFromImage(PixelReader reader, int x, int y) {
      Color[] colorCopy = new Color[SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE];
      
      int startX = x - SLIDER_SIDE_SIZE / 2;
      int stopX = x + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      int startY = y - SLIDER_SIDE_SIZE / 2;
      int stopY = y + SLIDER_SIDE_SIZE - SLIDER_SIDE_SIZE / 2;
      
      int current = 0;
      
      for(int i = startX; i < stopX; i++) {
         for(int j = startY; j < stopY; j++) {
            try {
               colorCopy[current] = reader.getColor(i, j);
            } catch(IndexOutOfBoundsException e) {
               colorCopy[current] = null;
            } finally {
               current++;
            }
         }
      }
      
      return colorCopy;
   }
}

package nn.common;

import javafx.scene.image.PixelReader;
import javafx.scene.paint.Color;

public class Slider {
   private final int SLIDER_SIDE_SIZE = 3;
   
   public Slider(PixelReader reader, int x, int y) {
      Color[] colorCopy = copyBytesFromImage(reader, x, y);
   }
   
   public byte[] asByteArray() {
      byte[] bytes = new byte[SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE];
      
      for(int i = 0; i < SLIDER_SIDE_SIZE; i++) {
         for(int j = 0; j < SLIDER_SIDE_SIZE; j++) {
            int translationPoint = j * SLIDER_SIDE_SIZE + i;
            
            bytes[translationPoint] = colorCopy[i][j];
         }
      }
      
      return bytes;
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
            }finally {
               current++;
            }
         }
      }
      
      return colorCopy;
   }
}

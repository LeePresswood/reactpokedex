package com.leepresswood.common.domain;

/**
 * Contains the inputs for the neural network.
 * Use this to manage order and value of input.
 */
public class InputPlug {
   private boolean[] slider;
   private boolean[] x;
   private boolean[] y;
   
   //Future ideas
   //   private boolean[] paintingType (maybe an enum converted to boolean array);
   
   public void setSlider(boolean[] slider) {
      this.slider = slider;
   }
   
   public boolean[] getCombinedBinaryInput() {
      boolean[] combined = new boolean[slider.length + x.length + y.length];
      int current = 0;
   
      for(boolean b : slider) {
         combined[current++] = b;
      }
      
      for(boolean b : x) {
         combined[current++] = b;
      }
      
      for(boolean b : y) {
         combined[current++] = b;
      }
      
      return combined;
   }
}

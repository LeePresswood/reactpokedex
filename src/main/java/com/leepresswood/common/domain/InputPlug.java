package com.leepresswood.common.domain;

import org.apache.commons.lang3.ArrayUtils;

/**
 * Contains the inputs for the neural network.
 * Use this to manage order and value of input.
 */
public class InputPlug {
   private boolean[] slider;
   
   
   public void setSlider(boolean[] slider) {
      this.slider = slider;
   }
   
   public boolean[] getCombinedBinaryInput(){
      return ArrayUtils.addAll(slider);
   }
}

package nn.common;

public class Slider {
   private final int SLIDER_SIDE_SIZE = 3;
   private final byte[][] byteCopy = new byte[SLIDER_SIDE_SIZE][SLIDER_SIDE_SIZE];
   
   public Slider(byte[][] image, int x, int y){
      copyBytesFromImae(image, x, y);
   }
   
   public byte[] asByteArray(){
      byte[] bytes = new byte[SLIDER_SIDE_SIZE * SLIDER_SIDE_SIZE];
   
      for(int i = 0; i < SLIDER_SIDE_SIZE; i++) {
         for(int j = 0; j < SLIDER_SIDE_SIZE; j++) {
            int translationPoint = j * SLIDER_SIDE_SIZE + i;
            
            bytes[translationPoint] = byteCopy[i][j];
         }
      }
      
      return bytes;
   }
   
   private void copyBytesFromImae(byte[][] image, int x, int y){
      int startX = x - SLIDER_SIDE_SIZE / 2;
      int startY = y - SLIDER_SIDE_SIZE / 2;
      
      for(int i = 0; i < SLIDER_SIDE_SIZE; i++){
         for(int j = 0; j < SLIDER_SIDE_SIZE; j++){
            try{
               int translateX = startX + i;
               int translateY = startY + j;
               
               byteCopy[i][j] = image[translateX][translateY];
            }catch(ArrayIndexOutOfBoundsException e){
               byteCopy[i][j] = -1;
            }
         }
      }
   }
}

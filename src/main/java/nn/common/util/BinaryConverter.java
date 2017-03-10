package nn.common.util;

import java.math.BigInteger;

public class BinaryConverter {
   public static String toBinaryArray(byte[] bytes) {
      return new BigInteger(bytes).toString();
   }
}

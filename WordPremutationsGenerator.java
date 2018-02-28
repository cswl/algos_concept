/* 
 * Copyright (c) 2018 Cswl Coldwind <cswl1337@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

// Generates all k-sized subsets of a n-sized set, without duplicates:
import java.util.Arrays;
import java.util.Set;
import java.util.HashSet;

public class WordPremutationsGenerator {

    public static void main(String[] args) {

        for (String word : genStringSubset("aeiou") ){
            System.out.print(word + " ");
        }
    }

public static Set<String> genStringSubset(String str) {

    Set<String> set = new HashSet<String>();
    
    String[] sa = str.split("(?!^)");
    int n = sa.length;

    for (int i =1; i < Math.pow(2, n); i++ ) {
        String[] bstr = toBinaryStringWithPadding(i,n).split("(?!^)");
        // System.out.println(Arrays.deepToString(bstr));
        String c = "" ;
        for (int j=0; j < bstr.length; j++) {
            if(bstr[j].equals("1")) {
                c += sa[j];
            } 
        }
        // System.out.println(i + " " + c);
        set.add(c);
    }
    return set;
}

public static Set<String> generatePerm(String input) {
    Set<String> set = new HashSet<String>();
    if (input == "")
        return set;

    Character a = input.charAt(0);

    if (input.length() > 1) {
        input = input.substring(1);

        Set<String> permSet = generatePerm(input);

        for (String x : permSet) {
            for (int i = 0; i <= x.length(); i++) {
                set.add(x.substring(0, i) + a + x.substring(i));
            }
        }
    } else {
        set.add(a + "");
    }
    return set;
}

private  static String toBinaryStringWithPadding(int in, int padlen) {
    String b =  Integer.toBinaryString(in);
    if(b.length() < padlen) {
        int padstart = padlen - b.length();
        String pad = "";
        for(int i =0; i < padstart; i++) {
            pad =  pad.concat("0");
        }
        b = pad.concat(b);
      
    }
    return b;
}

}
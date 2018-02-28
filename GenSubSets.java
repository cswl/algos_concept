// Generates all k-sized subsets of a n-sized set, without duplicates:
import java.util.Arrays;
import java.util.Set;
import java.util.HashSet;

public class GenSubSets {

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
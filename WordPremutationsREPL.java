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

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Set;
import java.util.HashSet;


public class WordPremutationsREPL {

 static void start(HashSet<String> list) {

    Scanner sc = new Scanner(System.in);
    String input;
    do {
        System.out.print("\nEnter the string: (.end to quit) ");
        input = sc.nextLine().toLowerCase();
        if (input.equals(""))
            continue; // skip 0 length input

        Set<String> permus = new HashSet<>();
        Set<String> combs = WordPremutationsGenerator.genStringSubset(input);
        for (String comb : combs) {
            if (comb.length() > 1) { // Skip permutations on single letter
                // System.out.print(comb + " ");
                permus.addAll(WordPremutationsGenerator.generatePerm(comb));
            }
        }

        // Check the permutations in the dictionary
        ArrayList<String> result = new ArrayList<>();
        // .System.out.print("debug:: " + permus + "\n");
        for (String word : permus) {
            if (list.contains(word)) {
                result.add(word);
            }
        }

        // TODO: Sort the list alphabetically too
        // Sort the list according to length..

        Collections.sort(result, new Comparator<String>() {
            @Override
            public int compare(String lhs, String rhs) {
                // -1 - less than, 1 - greater than, 0 - equal, all inversed for descending
                if (lhs.length() == rhs.length())
                    return 0;
                return (lhs.length() < rhs.length()) ? -1 : 1;
            }
        });

        // Print the list according to length
        int lastLen = 2;
        for (String word : result) {
            if (word.length() > lastLen) {
                System.out.println();
                lastLen++;
            }
            System.out.print(word + " ");
        }
        System.out.println();

    } while (!input.equals(".end"));
}

}
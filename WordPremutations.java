
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Collections;
import java.util.Comparator;

/**
 *
 * @author cswl
 */
public class WordPremutations {
    public static void main(String[] args) {
        if(args.length == 0) {
            System.out.print("FATAL: Dictionary file not specified");
            return;
        }
        String fpath = args[0];
  
        // try open dictionary file
        Scanner s = null;
        ArrayList<String> list;
        try {
        s = new  Scanner(new File(fpath)).useDelimiter(System.lineSeparator());
        list = new ArrayList<String>(68700);
        while (s.hasNext()){
              list.add(s.next().toLowerCase());
        }
        s.close();
    } catch (FileNotFoundException e) {
        System.out.println("FATAL: Dictionary file not found");
        return;
    }
        Scanner sc = new Scanner(System.in);
        String input;
        // System.out.print(list); // debug
        do {
        System.out.print("\nEnter the string: (.end to quit) ");
        input = sc.nextLine().toLowerCase();
        if(input.equals("")) continue; // skip 0 length string

        Set<String> permus = new HashSet<>() ;
        Set<String> combs = GenSubSets.genStringSubset(input);
        for( String comb : combs ) {
            if(comb.length() > 1 ) { // Skip permutations on single letter
                // System.out.print(comb + " ");
                permus.addAll(GenSubSets.generatePerm(comb));
            }
        }

        ArrayList<String> result = new ArrayList<>();
        // .System.out.print("debug:: " + permus + "\n");
        for (String word : permus) {
            if(list.contains(word)) {
            result.add(word); 
            }
        }
        Collections.sort(result, new Comparator<String>() {
            @Override
            public int compare(String lhs, String rhs) {
                // -1 - less than, 1 - greater than, 0 - equal, all inversed for descending
                if(lhs.length() == rhs.length()) return 0 ;
                return (lhs.length() < rhs.length()) ? -1 : 1;
            }
        });
        int lastLen = 2;
        for(String word: result) {
            if(word.length() > lastLen ) {
                System.out.println();
                lastLen++;
            }
            System.out.print(word + " ");
        }
        System.out.println();
        } while(! input.equals(".end"));
    }
}

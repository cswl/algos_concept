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

import java.util.HashSet;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;


public class WordPremutationsDicLoader  {

  static HashSet<String> load(String[] args) {
    if (args.length == 0) {
        System.out.print("FATAL: Dictionary file not specified");
        return null;
    }
    String fpath = args[0];

    // try open dictionary file
    HashSet<String> list;
    try (Scanner s = new Scanner(new File(fpath))) {
        s.useDelimiter(System.lineSeparator());
        list = new HashSet<String>(68700);
        while (s.hasNext()) {
            list.add(s.next().toLowerCase());
        }
        return list;
    } catch (FileNotFoundException e) {
        System.out.println("FATAL: Dictionary file not found");
        return null;
    }
}
}
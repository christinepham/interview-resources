//0, 1, 1, 2, 3, 5, 8...
//fib(n) -> nth term
//fib (4) -> 3

public static int fib(int n) {

    if (n == 1 || n == 2) {
        return 1;
    }
    
    return fib(n-2) + fib(n-1);
}

public static int memoFib(int n) {
    int m = cache.get(n);
    
    //if it's stored already return the value
    if (m != null) {
        return m;
    }
    
    //calculate the new value
    m = memoFib(n-2) + memoFib(n-1);
    
    //put it back in the cache
    cache.put(n, m);
    return m;
}

// 0, 1, 1, 2, 3, 5, 8
// fib(4) -> 3
public static int fibLoop(int n) {

    if (n == 1 || n == 2) {
        return 1;
    }
    int total = 1;
    int prev = 1;
    int curr = 1;
    
    for (int i = 3; i <= n; i++) {
        total = prev + curr;
        prev = curr; 
        curr = total; 
    }
    return total;
}



//"The quick brown fox", limit = 12 -> ["The quick", "brown fox"]
//word_wrap(s, limit) -> [s1, s2, s3, ...]

public static ArrayList<String> word_wrap(String s, int limit) {
    ArrayList<String> words = new ArrayList<String>();
    String line = '';
    
    //split each word by space
    String[] w = s.split(' ');
    int count = 0;
    int i = 1;
    
    while(w[i] != null) {
        //add each index of w
        //if it's less than the limit add it
        //iterate through i
        //["The", "quick", "brown", "fox"]
        // count = 0;
        // count = "The" = 3 + 1
        count = w[i].length + 1;
        if (count < limit) {
            line.append(w[i]);
        } else {
            words.add(line);
            line = w[i];
            count = 0;
        }
        i++;
    }
    
    return words;
}




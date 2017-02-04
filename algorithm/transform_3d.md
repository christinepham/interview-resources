How to transform a 3-dimensional data from format Map<A, Map<B, List<C>>>to format Map<C, Map<B, List<A>>>?

{  
   "1":{  
      "2":[  
         "3",
         "4"
      ],
      "3":[  
         "4"
      ]
   },
   "2":{  
      "2":[  
         "3"
      ]
   }
}
=>
{  
   "3":{  
      "2":[  
         "1",
         "2"
      ]
   },
   "4":{  
      "2":[  
         "1"
      ],
      "3":[  
         "1"
      ]
   }
}

```java
public ABC format3D(Map<A, Map<B, List<C>>) {
  
    // convert list<c> to a map --> Map<key, value> --> key = C, value = Map<B, List<A>>  
    // convert map<a> to a list
    
    // groupBy C
    Map<C, Map<B, List<A>>> map = ABC.collect(C.groupingBy(A.Entry::getKey, B.groupingBy(B.Entry::getKey, mapping(C.Entry::getValue, A.toList()))))
}
```
// Compute the H-index.
// The definition of the index is that a scholar with an index of h has published h papers each of which has been cited in other papers at least h times.Thus, the h-index reflects both the number of publications and the number of citations per publication.

// Examples:
// Let f be the function that corresponds to the number of citations for each publication.

// f(A)=10, f(B)=8, f(C)=5, f(D)=4, f(E)=3　→ h-index=4
// index = 2, because there are at least 2 papers with 2 or more citations
// index = 3, because there are at least 3 papers with 3 or more citations
// index = 4, because there are at least 4 papers with 4 or more citations
// not 5 5 papers with more or 5 publication

// f(A)=25, f(B)=8, f(C)=5, f(D)=3, f(E)=3　→ h-index=3
// at least 3 papers with  3 or more citations
// 4?

// f(A)=3, f(B)=3, f(C)=5, f(D)=8, f(E)=25　→ h-index=3


// f(A)=1000, f(B)=1, f(C)=100, f(D)=1, f(E)=1　→ h-index=2
// index = 1, because there are at least 1 paper with 1 or more citations
// index = 2, because there are at least 2 papers with 2 or more citations

// f(A)=1000, f(B)=100, f(C)=1, f(D)=1, f(E)=1　→ h-index=2

// f(A)=2, f(B)=2, f(C)=1, f(D)=1, f(E)=1　→ h-index=2

// f(A)=5, f(B)=5, f(C)=5, f(D)=5, f(E)=5　→ h-index=5

// If you have k papers, what is the what max possible h-index k
// What is the minimum possible h-index ? 0

function hIndex(publications) {
    var length = publications.length;

    if (length === 0) {
        return 0;
    }

    //[0, 1, 2, 3, 4, 5]
    //[         1, 1, 3]
    var newArr = new Array(length + 1); // set this to all 0's for length + 1
    newArr.fill(0);

    for (var i = 0; i < length; i++) {
        if (publications[i] >= length) {
            newArr[length] += 1;
        } else {
            newArr[publications[i]] += 1;
        }
    }

    var sum = 0;
    for (var i = length; i >= 0; i--) {
        sum += newArr[i];
        if (sum >= i) {
            return i;
        }
    }

    return 0;
}

var pub1 = [10, 8, 5, 4, 3];
var pub2 = [25, 8, 5, 3, 3];
var pub3 = [1000, 2, 0, 0, 0];

console.log(hIndex(pub1));
console.log(hIndex(pub2));
console.log(hIndex(pub3));





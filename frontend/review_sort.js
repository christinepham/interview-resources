// We have a long list of reviews,  some of them are very very long (typically users who are angry about something) and some of them are very very short to the point of having no text, and not being useful. We want to sort the reviews in a way that we privilege the “most average” text length, and progressively deviate from that as we go down the list.

// For ex:

// [ review A with length 10, review B with length 20, review C with length 25, review D with length 50 ]
// C, B, A, D
// avg = 26.25
/*
    calculate the diff between length and avg
    var reviews = [{
        {title: 'A', value: 6.25 },
        {title: 'B', value: 5 },
    }]
    reviews.sort(function (a, b) {
        return a.value b.value
    }
    can use array.prototype.sort
*/

function reviewSort(input) {
    var sum = 0;
    var avg = 0;
    var reviews = [];
    var sortedReviews = [];

    for (var i = 0; i < input.length; i++) {
        sum += input[i].length;
    }
    avg = sum/input.length;
    
    for (var i = 0; i < input.length; i++) {
        reviews.push({title: i, value: Math.abs(avg-input[i].length)});
    }
    
    reviews.sort(function (a, b) {
       return a.value - b.value; //also compare star rating
    });
    
    for (var i = 0; i < reviews.length; i++) {
        sortedReviews.push(input[reviews[i].title]);
    }
    
    return sortedReviews;
}

var reviews = ['1234567890', '12345678901234567890', '1234567890123456789012345', '12345678901234567890123451234567890123456789012345'];

// var reviews = ['1234567890' 5, '12345678901234567890' 3.2, '1234567890123456789012345' 1, '12345678901234567890123451234567890123456789012345' 1.5];
// [{reviewName: A, star: 5}] / [key: reviewname, value: [review, starRating]]
// 5 3.2 1.5 1

console.log(reviewSort(reviews));

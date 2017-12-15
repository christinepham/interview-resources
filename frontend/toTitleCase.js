var lowerCaseSentence = "the quick brown fox";

function toTitleCase(sentence) {
  var sentenceArr = sentence.split(' ');
  var titleCaseSentence = [];
  for(var i = 0; i < sentenceArr.length; i++) {
    titleCaseSentence.push(sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].slice(1));
  }
  return titleCaseSentence.join(' ');
}


console.log(toTitleCase(lowerCaseSentence));

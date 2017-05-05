
//create a hashmap
//map each special character to what it should be

//[]()

//regex = "[, ], (, )" --> use a stack
HashMap<> preview = new HashMap<>();
function createMapping() {
    preview.add('#', <h1>text</h1>);
    preview.add('a-z, A-Z', <p>text</p>);
    preview.add('link', <a href="\"" + text + "\""></a>);
}

//check multiple links
function renderLink(text) {
    var bracket = text.indexOf(']');
    var paren = text.indexOf('(');
    var endParen = text.indexOf(')');
    var allLinks = [];
    
    var count = 0;
    var state = null;
    
    for (var i = 0; i < text.length; i++) {
        if(text.charAt(")") && state === 'url') {
            allLinks.push(text.split(count, i));
            state = null;
        } else if (text.charAt("(") && state === 'hasText') {
            count = i;
            state = 'url';
        } else if (text.charAt("]") && state === 'maybeText') {
            count = i;
            state = 'hasText';
        } else if (text.charAt("[") && state === null) {
            count = i;
            state = 'hasText';
        } else if (state === 'hasText') {
            //return as normal text
            allLinks.push(text.split(count, i));
            state = null;
        }
    }
    
    return false;
}

function createPreview(text) {
    //document.getElement.value 
    
    var lines = [];
    var hash;
    lines = text.split('\n');
    
    //special = [#Title, ##Subtitle, paragraph, paragraph, paragraph[text](val)paragraph[text](val), paragraph[text]]
    //findLastIndexOf('#')
    //hash = [#, Title], [##, Subtitle]
    //create helper function that inputs text inbetween the tags
    lines.forEach(function (special) {
        if(special.charAt(0) == '#') {
            hash = special.findLastIndexOf('#');
            if (preview.containsKey(hash[0])) {
                //not how append works
                textBox.append(preview.value(hash[0]), hash[1]) + '/n';
            }
        } else if (isLink(special)) {
            textBox.append(preview.value(
         
        } else {
            //just plain text
            textBox.append(preview.value(special));
        }
    });

}

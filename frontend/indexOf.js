function indexOf(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    } else if (needle.length === 0 || haystack.length === 0) {
        return -1;
    }

    var haystackArr = haystack.split('');
    var needleArr = needle.split('');
    
    for (var i = 0; i < haystackArr.length; i++) {
        var index = i;
        var match = true;
        for (var j = 0; j < needleArr.length; j++) {
            if (haystackArr[i + j] !== needleArr[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return index;
        }
    }

    return -1;
}

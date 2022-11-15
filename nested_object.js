
//Sample Input
var sample_input = {
    a: 123,
    b: 'hero',
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ['abc', 'def']
    }
}

console.log('output', handleFunction(sample_input))

/**
 *
 * @param {sample_input}  - Sample Input Object
 *
 * @return {Object}
 *
 */
function handleFunction(sample_input) {
    var output_sample = {}
    for (const [key, value] of Object.entries(sample_input)) {
        var findTypeOF = typeof(value)
        var findOfOutPut = findTypeOF == "number" ? handleIncrementNumber(value) : findTypeOF == "string" ? handleStringCocat(value) : handleObjectString(value); //call function as per the typeof
        output_sample[key] = findOfOutPut;
    }
    return output_sample
}

/**
 *
 * @param {value}  - Sample Input Number value
 *
 * @return {Value} - Increment number
 *
 */
function handleIncrementNumber(value) {
    return (value+1)
}


/**
 *
 * @param {value}  - Sample Input String
 *
 * @return {Value} - Concat AI to string
 *
 */
function handleStringCocat(value) {
    return (value+ ' AI')
}

/**
 *
 * @param {value}  - Sample Input Object
 *
 * @return {Object} - nested output
 *
 */
function handleObjectString(value) {
    var output = value?.length > 0 ? handleLoopArray(value) : handleFunction(value);
    return output
}

function handleLoopArray(value) {
    //if array have number do concat and shift else do string cancat to the values inside array
    if(typeof value[0] == "number") {
        var lastDigit = value[value.length-1]
        var nextDigit = [lastDigit+1];
        var concatNextDigit = value.concat(nextDigit)
        concatNextDigit.shift()
        return(concatNextDigit)
    } else {
        var StringOutputArray = []
        value.forEach(element => {
            StringOutputArray.push(element+ ' AI')
        });
        return StringOutputArray;
    }

}

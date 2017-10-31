/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(dataInput, filters) {
  var outPutOfResults = [];
  var dataInputLength = dataInput.length;
  var filterLength = filters.length;
  var candidateOptions;
  var availableImmediately = false;
  var freshGrad = false;

  if (filterLength !== 0) {
    if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
      availableImmediately = true;
    } else if (filters.indexOf('FRESH_GRAD') !== -1) {
      freshGrad = true;
    }

    for (var i = dataInputLength; i--; ) {
      candidateOptions = dataInput[i].options && dataInput[i].options.length > 0; //has.options

      if (dataInput[i].options) {
        for (var k = filterLength; k--; ) {
          // loop through filters
          var hasFilter = false;
          for (var j = dataInput[i].options.length; j--; ) {
            if (!availableImmediately && !freshGrad) {
              if (filters[k].indexOf(dataInput[i].options[j]) !== -1) {
                hasFilter = true;
              }
            } else if (
              availableImmediately &&
              dataInput[i].options[j] === 'AVAILABLE_IMMEDIATELY'
            ) {
              hasFilter = true;
            } else if (freshGrad && dataInput[i].options[j] === 'FRESH_GRAD') {
              hasFilter = true;
            }
          }
          candidateOptions = candidateOptions && hasFilter;
        }
      }
      if (candidateOptions) {
        outPutOfResults.unshift(dataInput[i]);
      }
    }
  } else {
    outPutOfResults = dataInput;
  }
  return outPutOfResults;
}

module.exports = filter;

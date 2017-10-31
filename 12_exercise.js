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

function filter(candidates, filters) {

    function hasFilterz(){
        let hasFilter = false;
        
        candidates[i].options.forEach((option) => {
            if (!availableImmediatelyFilter && !freshGradFilter) {
                if (filters[k].indexOf(option) !== -1) {
                    hasFilter = true;
                }
            } else if (availableImmediatelyFilter && option === AVAILABLE_IMMEDIATELY) {
                hasFilter = true;
            } else if (freshGradFilter && option === FRESH_GRAD) {
                hasFilter = true;
            }
        });

        return hasFilter;
    }

    if (!filters.length) {
        return candidates
    }

    const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
    const FRESH_GRAD = 'FRESH_GRAD';
    const suitableCandidates = [];
    let hasCandidateOptions;

    const availableImmediatelyFilter = filters.includes(AVAILABLE_IMMEDIATELY);
    const freshGradFilter = !availableImmediatelyFilter && filters.includes(FRESH_GRAD);

    for (var i = candidates.length; i--;) {
        hasCandidateOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

        if (candidates[i].options) {
            for (var k = filters.length; k--;) {
                // loop through filters
                var hasFilter = hasFilterz();

                hasCandidateOptions = hasCandidateOptions && hasFilter;
            }
        }
        if (hasCandidateOptions) {
            suitableCandidates.unshift(candidates[i]);
        }
    }

    return suitableCandidates;


}

module.exports = filter;

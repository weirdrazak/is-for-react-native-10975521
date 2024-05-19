
const { processArray, formatArrayStrings } = require('./arrayManipulation');


function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}


module.exports = { createUserProfiles };



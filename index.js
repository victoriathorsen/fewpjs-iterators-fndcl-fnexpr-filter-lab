const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array, string) => {
    return array.filter(name => name.toLowerCase() == string.toLowerCase())
}


const fuzzyMatch = (array, string) => {
    return array.filter(name => name.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

const matchName = (array, sec) => {
    return array.filter(info => info.name.toLowerCase() == sec.toLowerCase())
}
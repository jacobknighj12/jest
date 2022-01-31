function capitalize(word) {
    return word[0].toUpperCase() + word.substr(1)
}
function isCool(name) {
    const coolPeople = ['Jacob', 'Kate']
    return coolPeople.includes(capitalize(name.trim()))
}
module.exports = {
    capitalize: capitalize,
    isCool: isCool,
};
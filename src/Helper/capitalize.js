const capitalize = (str) => {

    return str.split(' ').map((word) => {
        let first = word.slice(0, 1).toUpperCase()
        let rest = word.slice(1)
        return first + rest
    }).join(' ')
}

// console.log(capitalize('cap every word in this string')) // Cap Every Word In This String
// console.log(capitalize('cap Me partially Now')) // ''
// console.log(capitalize('cap')) // 'Cap'
// console.log(capitalize('')) // ''

export default capitalize
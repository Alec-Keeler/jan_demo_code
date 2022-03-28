const exp = /^[(]?[0-9]{3}[)-]?[0-9]{3}-[0-9]{4}$/
const num = '(123)456-7890'

function checkPhoneNum(exp, phoneNum) {
    if (exp.test(phoneNum)) {
        return true
    } else {
        return false
    }
}

function convertPhoneNum(exp, phoneNum) { 
    const isNum = checkPhoneNum(exp, phoneNum)

    const remove = /[\(\)-]/g;
    const replace = ''

    if (isNum) {
        const newNum = phoneNum.replace(remove, replace)
        console.log(newNum)
        console.log(parseInt(newNum, 10))
    } else {
        console.log('please provide a valid phone number')
    }
}

convertPhoneNum(exp, num)
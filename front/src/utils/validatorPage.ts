export const minLengthRule = (value:number) => {
    return {
        value: value,
        message: `Should contain no less than ${value} characters`
    }
}

export const maxLengthRule = (value:number) => {
    return {
        value: value,
        message:`Should contain no more than ${value} characters`
    }
}

export const requiredRule = () => {
    return {
        message: `The field must be filled`
    }
}

export const patternRule = (pattern:RegExp, restrictions:string) =>{
    return {
        value: pattern,
        message: `Should contain ${restrictions}`
    }
}

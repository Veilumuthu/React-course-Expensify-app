export const Adult = (x) => {
    if (x > 18) {
       return 'I m adult' 
    }else{
        return 'I m a child'
    }
};

export const canDrink = (y) => {
    if (y > 21) {
        return 'I have the right to drink'
    } else {
        return 'I dnt drink'
    }
};

const Senior = (z) => {
    if (z >= 65) {
        return 'I m a senior citizen'
    } else {
        return 'I m not a senioir citizen'
    }
};
export default Senior;
// export { Adult, canDrink }
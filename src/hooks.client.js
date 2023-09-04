export const handle = ({event}) => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log(userData)
    return {
        userData
    }
}

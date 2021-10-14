export default ()=>{
    const logout=()=>{
        localStorage.clear()
        window.location="/login"
    }
    return {logout}
}
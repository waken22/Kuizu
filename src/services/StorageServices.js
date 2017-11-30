// ****************************************************************************
// *                          Local Storage Functions                         *
// ****************************************************************************

export const setLocalStorage = (token) => localStorage.setItem('token', token)
export const getLocalStorage = () => localStorage.getItem('token')
export const removeLocalStorage = () => localStorage.removeItem('token')
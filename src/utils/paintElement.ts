export default (id) => {
    const element = document.getElementById(id)
    element.style.background = '#E50914'
}

export const removeFocus = (id, color) => {
    const element = document.getElementById(id)
    element.style.background = color
}
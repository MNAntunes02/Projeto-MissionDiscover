const html = document.querySelector("html")
/* const questionWrapper = document.querySelector(".question-wrapper") */
const checkbox = document.querySelector("input[name=theme]")
const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
const getStyle = (element,style) =>  window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    black: getStyle(html,"--black"),
    white: getStyle(html,"--white"),
    background: getStyle(html,"--background"),
    overlay: getStyle(html,"--overlay"),
}

const darkMode = {
    black: getStyle(html,"--white"),
    white: getStyle(html,"--overlay"),
    background: getStyle(html,"--overlay"),
    overlay: getStyle(html,"--background"),
}



const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty("--" + (key) , colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

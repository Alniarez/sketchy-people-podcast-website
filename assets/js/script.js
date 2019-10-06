var currentTheme = ''

function setTheme(theme) {
    $('body').removeClass(currentTheme)
    $('body').addClass(theme)
    currentTheme = theme
}


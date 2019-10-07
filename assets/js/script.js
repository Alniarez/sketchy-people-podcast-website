var currentTheme = ''

function setTheme(theme) {
    $('body').removeClass(currentTheme)
    $('body').addClass(theme)
    currentTheme = theme
}
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


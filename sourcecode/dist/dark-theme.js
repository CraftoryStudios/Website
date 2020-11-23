/**
 * Convenience method to change a certain class into another class.
 * 
 * @param  {string} remove The class to find and remove
 * @param  {string} add    The replacing class
 */
let toggleClass = (remove, add) => {
    var elements = Array.from(document.getElementsByClassName(remove));

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(remove);
        elements[i].classList.add(add);
    }
};

/**
 * This method saves the given theme as a cookie.
 *
 * @param  {string} theme The theme as a string ("light" or "dark")
 */
let saveTheme = (theme) => {
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = "theme=" + theme + "; samesite=strict; expires=" + date.toUTCString() + "; path=/";
};

/**
 * This will apply the "light mode" theme.
 */
let setLightTheme = () => {
    let widget = document.getElementById("craftory-discord");
    widget.src = widget.src.replace("theme=dark", "theme=light");

    let button = document.getElementById("toggle-theme");
    button.textContent = "Switch to dark mode";

    toggleClass("bg-dark", "bg-light");
    toggleClass("text-light", "text-dark");
    toggleClass("btn-light", "btn-dark");

    saveTheme("light");
};

/**
 * This will apply the "dark mode" theme.
 */
let setDarkTheme = () => {
    let widget = document.getElementById("craftory-discord");
    widget.src = widget.src.replace("theme=light", "theme=dark");

    let button = document.getElementById("toggle-theme");
    button.textContent = "Switch to light mode";

    toggleClass("bg-light", "bg-dark");
    toggleClass("text-dark", "text-light");
    toggleClass("btn-dark", "btn-light");

    saveTheme("dark");
};

/**
 * This method will load the currently selected theme
 * and apply it to the website.
 *
 * The selected theme is stored inside a cookie.
 */
var loadTheme = () => {
    let cookie = "; " + document.cookie;
    let values = cookie.split("; theme=");

    if (values.length === 2) {
        let theme =  values.pop().split(";").shift();

        if (theme === "dark") {
            setDarkTheme();
        } else if (theme === "light") {
            setLightTheme();
        }
    }
};

/**
 * This method toggles the currently selected theme.
 * Light theme will change to dark theme and vice-versa.
 */
var toggleTheme = () => {
    let button = document.getElementById("toggle-theme");

    if (button.classList.contains("btn-dark")) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
};

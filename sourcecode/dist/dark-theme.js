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
    if (!hasAllowedCookies()) {
        // Ensure that the user has allowed cookies
        return;
    }

    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `theme=${theme}; samesite=strict; expires=${date.toUTCString()}; path=/`;
};

/**
 * This will apply the "light mode" theme.
 */
let setLightTheme = () => {
    let widget = document.getElementById("craftory-discord");

    if (widget) {
        widget.src = widget.src.replace("theme=dark", "theme=light");
    }

    let button = document.getElementById("toggle-theme");
    button.textContent = "Switch to dark mode";

    toggleClass("bg-dark", "bg-light");
    toggleClass("bg-darker", "bg-lighter");
    toggleClass("text-light", "text-dark");
    toggleClass("btn-light", "btn-dark");
    toggleClass("table-dark", "table-light");

    saveTheme("light");
};

/**
 * This will apply the "dark mode" theme.
 */
let setDarkTheme = () => {
    let widget = document.getElementById("craftory-discord");

    if (widget) {
        widget.src = widget.src.replace("theme=light", "theme=dark");
    }

    let button = document.getElementById("toggle-theme");
    button.textContent = "Switch to light mode";

    toggleClass("bg-light", "bg-dark");
    toggleClass("bg-lighter", "bg-darker");
    toggleClass("text-dark", "text-light");
    toggleClass("btn-dark", "btn-light");
    toggleClass("table-light", "table-dark");

    saveTheme("dark");
};

/**
 * This method will load the currently selected theme
 * and apply it to the website.
 *
 * The selected theme is stored inside a cookie.
 */
var loadTheme = () => {
    let theme;

    if (hasAllowedCookies()) {
        // Ensure that the user has allowed cookies
        theme = cookieconsent.utils.getCookie("theme");
    } else {
        theme = "light";
    }

    let container = document.getElementById("discord-widget-container");

    if (container) {
        container.innerHTML = `<iframe id="craftory-discord" src="https://discord.com/widget?id=730061796093984840&amp;theme=${theme}" 
                        allowtransparency="false" width="350" height="450" frameborder="0" 
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                        </iframe>`;
    }

    if (theme === "dark") {
        setDarkTheme();
    } else if (theme === "light") {
        setLightTheme();
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

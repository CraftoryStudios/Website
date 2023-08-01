/**
 * This initialises the cookie-consent popup.
 */
cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#252e39"
    },
    "button": {
      "background": "#14a7d0"
    }
  },
  "theme": "edgeless",
  "position": "bottom-left",
  "type": "opt-in",
  "content": {
    "message": "This website uses cookies for storing personalisations settings on our wesbite.",
    "dismiss": "Decline",
    "allow": "Allow Cookies"
  }
});

/**
 * A very simple convenience method to check if cookies were enabled.
 *
 * @return {Boolean} Whether cookies have been allowed
 */
var hasAllowedCookies = () => cookieconsent.utils.getCookie("cookieconsent_status") === "allow";

/**
 * Now we start loading the theme.
 * If cookies were disabled, the preference cookie will not be checked.
 */
loadTheme();

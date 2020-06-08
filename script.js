const Settings = document.querySelector('.google-settings');
const MenuSetting = document.querySelector('.menu-settings');

let heddinMenuSettings = () => {
    if (MenuSetting.style.opacity == 1) {
        MenuSetting.style.opacity = '0';
        MenuSetting.style.visibility = 'hidden';
    } else {
        MenuSetting.style.opacity = '1';
        MenuSetting.style.visibility = 'visible';
    }
}

Settings.onclick = () => {
    heddinMenuSettings();
}

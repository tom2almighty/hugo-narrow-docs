# Theme Customization Guide

This document explains how to modify and customize the Hugo Narrow theme.

## Methods

### Using Git Submodules

When you add the theme using `git submodule`, copy the theme files you want to modify to the same path in your site's root directory and define your modifications there.

With this method, you **cannot** commit changes to GitHub.

If you want to save your modifications to a GitHub repository, you can fork the theme and then replace the `git submodule` address with your repository address.

### Direct Download Method

When you directly download the theme files to your site directory, you can modify the theme files directly. The drawback is that each update requires manual comparison of theme changes, making upgrades difficult.

## Custom Styles

Hugo Narrow support two methods modify style. 

1. Create a CSS file with any name in the site's `~/assets/css/custom/` directory and write your custom styles in it.

2. Install dependencies in the site root directory:

    ```javascript
    pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography
    ```

    Modify or add custom styles in `~/assets/css/custom.css` or other style files.

    ```javascript
    npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css
    ```

## Custom Javascript

Create `.js` files at `~/assets/js/custom/` directory, the theme will auto import it.

## Homepage Custom Section

Hugo Narrow supports adding custom templates between the homepage author information and recent posts sections. For detailed instructions, please visit [Homepage Custom Section](../configration/site#custom-section).

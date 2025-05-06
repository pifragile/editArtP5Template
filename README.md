# EditART p5.js Template Instructions

This is a template for p5.js for creating projects on EditART.

## Create your art

-   Use the variables `m0`, `m1`, `m2`, `m3`, `m4` which are tha values of the 5 sliders.
    > **_IMPORTANT:_** Every single part of the output must ONLY depend on the values `m0`..`m4`. Otherwise the pieces will change after minting.
-   The entrypoint is the `draw()` function which will be triggered automatically everytime the sliders change. Everything necessary for the sketch to render properly should be initialized in `draw()`. Find an example in `index.js`.
-   Call `triggerPreview()` at the point in time when the preview image should be renderd.
-   To handle window resizing please do everything necessary in `windowResizedUser()`. Do not overwrite `windowResized()` unless you know exactly what you are doing.
-   If your project is animated, please restart the animation when the sliders change. You can do this as follows:

    ```
    function draw() {
        if(resetAnimation) {
            // Do necessary steps to reset the animation
            resetAnimation = false;
        }
        // Rest of the draw() function
    }
    ```

-   If you use any libraries, include all source files in the project. Do not load any dependencies from the internet.

-   Make a sketch that **renders fast** for the best user experience.
-   All token previews will be in square format.

## Randomness

If you need randomness, you can use the functions `randomM0()`..`randomM4()`
these functions provide randomness seeded by the respective values `m0`..`m4`.

> **_NOTE:_** You can set the `randomSeedEditArt` variable in `index.html` to any string you like in order to distinguish your randomness from the one of other projects.
> **_IMPORTANT:_** Don't use any source of randomness other than the one described above.

## Testing

In order to test your project with the EditART platform, start a local development server of your project and paste its address in [the sandbox](https://www.editart.xyz/sandbox) and you can start playing around with the sliders.

## Project ready or questions?

Is you have a finished project or any questions, send me a DM on twitter [@pifragile](https://twitter.com/pifragile). Looking forward to hearing from you!

## License

[MIT License](./LICENSE)

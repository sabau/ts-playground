/**
 * @return {number}
 */
function FindLeftWindowBoundry()
{
    // In Internet Explorer window.screenLeft is the window's left boundry
    if (window.screenLeft)
        return window.screenLeft;

    // In Firefox window.screenX is the window's left boundry
    if (window.screenX)
        return window.screenX;

    return 0;
}

window.leftWindowBoundry = FindLeftWindowBoundry;

// Find Left Boundry of the Screen/Monitor
/**
 * @return {number}
 */
function FindLeftScreenBoundry()
{
    // If our main program is running on the right side, open on the left
    // This won't work properly on single screen
    if (window.leftWindowBoundry() >= window.screen.width)
        return 0;

    // Otherwise open on the right monitor
    return window.screen.width;
}

window.leftScreenBoundry = FindLeftScreenBoundry;
window.open('https://www.google.com', 'Sharing', 'directories=no, titlebar=no, location=no, resizable=0, scrollbars=0, fullscreen=1, toolbar=0, menubar=0, status=0, screenX=' + window.leftScreenBoundry() + ' , left=' + window.leftScreenBoundry());


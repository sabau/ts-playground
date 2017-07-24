/**
 * Created by web on 7/24/17.
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
function FindLeftScreenBoundry()
{
    return window.screen.width;
    // Check if the window is off the primary monitor in a positive axis
    // X,Y                  X,Y                    S = Screen, W = Window
    // 0,0  ----------   1280,0  ----------
    //     |          |         |  ---     |
    //     |          |         | | W |    |
    //     |        S |         |  ---   S |
    //      ----------           ----------
    if (window.leftWindowBoundry() > window.screen.width)
    {
        return window.leftWindowBoundry() - (window.leftWindowBoundry() - window.screen.width);
    }

    // Check if the window is off the primary monitor in a negative axis
    // X,Y                  X,Y                    S = Screen, W = Window
    // 0,0  ----------  -1280,0  ----------
    //     |          |         |  ---     |
    //     |          |         | | W |    |
    //     |        S |         |  ---   S |
    //      ----------           ----------
    // This only works in Firefox at the moment due to a bug in Internet Explorer opening new windows into a negative axis
    // However, you can move opened windows into a negative axis as a workaround
    if (window.leftWindowBoundry() < 0 && window.leftWindowBoundry() > (window.screen.width * -1))
    {
        return (window.screen.width * -1);
    }

    // If neither of the above, the monitor is on the primary monitor whose's screen X should be 0
    return 0;
}

window.leftScreenBoundry = FindLeftScreenBoundry;

console.log(window.screen.width);
console.log(window.leftScreenBoundry());

console.log(window.screen.height);
window.open('https://www.google.com', 'windowName', 'directories=no, titlebar=no, location=no, resizable=0, scrollbars=0, fullscreen=1, toolbar=0, menubar=0, status=0, screenX=' + window.leftScreenBoundry() + ' , left=' + window.leftScreenBoundry());
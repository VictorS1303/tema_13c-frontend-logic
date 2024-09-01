window.addEventListener('mousemove', (e) => updateBackgroundColor(e))

/*
function updateBackgroundColor(e)
{
    const xPosition = e.clientX
    const yPosition = e.clientY
    
    const hue = (xPosition / yPosition) * 360
    const saturation = (yPosition / window.innerWidth) * 100
    const lightness = (xPosition / window.innerWidth) * 100
    
    document.body.style.setProperty('--hue', hue)
    document.body.style.setProperty('--saturation', saturation)
    document.body.style.setProperty('--lightness', lightness)
    
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
*/

// Get mouse positions
function getMousePositions(e)
{   // X position
    const xPosition = e.clientX
    
    // Y position
    const yPosition = e.clientY
  
    // Return both variables
    return { xPosition, yPosition }
}

function calculateHSL(xPosition, yPosition)
{
    // Mapping the hue value to 360
    const hue = (xPosition / yPosition) * 360
    
    // Setting the saturation value to be within the viewport dimensions
    const saturation = (yPosition / window.innerWidth) * 100
  
    // Setting the lightness value to be within the viewport dimensions
    const lightness = (xPosition / window.innerWidth) * 100
  
    // Returning the values
    return { hue, saturation, lightness }
}

// Updating properties and background color
function updatePropertiesAndBackground(hue, saturation, lightness)
{
    // Setting the hue
    document.body.style.setProperty('--hue', hue)
    
    // Setting the saturation
    document.body.style.setProperty('--saturation', saturation)
    
    // Setting the lightness
    document.body.style.setProperty('--lightness', lightness)
    
    // Inserting the values to the background color
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

// Updating background color
function updateBackgroundColor(e)
{
    // Setting the mouse coordinates equal to the return value from the getMousePositions function
    const { xPosition, yPosition } = getMousePositions(e);
  
    // Setting the hue, saturation, and lightness  equal to the return value from the calculateHSL function
    const { hue, saturation, lightness } = calculateHSL(xPosition, yPosition);
  
    // Calling the updatePropertiesAndBackgroundColor with the hue, saturation, and lightness as parameters
    updatePropertiesAndBackground(hue, saturation, lightness)
}

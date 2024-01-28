document.addEventListener('DOMContentLoaded', function () {
    // Text to be typed
    const textToType = "Hello, I'm a Web Developer.";
  
    // DOM element to display the typing animation
    const typingTextElement = document.getElementById('typing-text');
  
    // Speed of typing (in milliseconds)
    const typingSpeed = 1000; // Adjust the typing speed as needed
  
    let charIndex = 0;
  
    function typeText() {
      if (charIndex < textToType.length) {
        typingTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Reset charIndex to 0 and clear the text after typing completes
        charIndex = 0;
        typingTextElement.textContent = '';
        setTimeout(typeText, typingSpeed);
      }
    }
  
    // Trigger the typing animation when the page loads
    typeText();
  });
  
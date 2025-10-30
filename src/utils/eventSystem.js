export const emitEvent = (eventName, detail) => {
    const event = new CustomEvent(eventName, { detail });
    window.dispatchEvent(event);
  };
  
  export const addEventListener = (eventName, callback) => {
    window.addEventListener(eventName, callback);
  };
  
  export const removeEventListener = (eventName, callback) => {
    window.removeEventListener(eventName, callback);
  };
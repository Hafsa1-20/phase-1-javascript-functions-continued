// code your solution here

// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression for mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function that returns another function for wrapping adjectives
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".increment-btn").forEach(button => {
      button.addEventListener("click", () => {
        const inputId = button.dataset.inputId;
        const input = document.getElementById(inputId);
        if (input) {
          let value = parseInt(input.value, 10);
          if (value < parseInt(input.max)) {
            input.value = value + 1;
          }
        }
      });
    });
  
    document.querySelectorAll(".decrement-btn").forEach(button => {
      button.addEventListener("click", () => {
        const inputId = button.dataset.inputId;
        const input = document.getElementById(inputId);
        if (input) {
          let value = parseInt(input.value, 10);
          if (value > parseInt(input.min)) {
            input.value = value - 1;
          }
        }
      });
    });
  });


/*
function incrementValue(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
      let value = parseInt(input.value, 10);
      if (value < parseInt(input.max)) {
        input.value = value + 1;
      }
    }
  }
  
  function decrementValue(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
      let value = parseInt(input.value, 10);
      if (value > parseInt(input.min)) {
        input.value = value - 1;
      }
    }
  }
*/
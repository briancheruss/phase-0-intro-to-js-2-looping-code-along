// Code your solutions in this file
// writeCards function
function writeCards(names, event) {
    const thankYouMessages = [];
    for (const name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  

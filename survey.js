const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What"s your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Your name is ${answer}`);
  
  rl.question('What"s an activity you like doing? ', (answer) => {
    console.log(`Your favorite hobby is ${answer}.`);
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`You listen to ${answer}.`);
      
      rl.question('Which meal is your favorite? ', (answer) => {
        console.log(`${answer} is your favorite meal.`);
        
        rl.question('What"s your favorite thing to eat for that meal? ', (answer) => {
          console.log(`Your favorite thing to eat for that meal is ${answer}.`);
          
          
          rl.question('Which sport is your absolute favorite? ', (answer) => {
            console.log(`${answer} is your favorite absolute sport.`);
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Your superpower is ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
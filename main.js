let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords);
//console.log(storyWords.length);

betterWords =
  storyWords.filter(word => !unnecessaryWords.includes(word));
//console.log(betterWords.length);

//initializing a counter for number of times an overUsed word is used
let overusedWordsCounter = 0;

//outer loop goes through the betterWords array
//inner loop checks if the word from the outer look matches any word in the overUsedWords array.
/*for (let betterWordsIndex = 0; betterWordsIndex < betterWords.length; betterWordsIndex++) {
  	for(let overusedWordsIndex = 0; overusedWordsIndex < overusedWords.length; overusedWordsIndex++) {
    	if(overusedWords[overusedWordsIndex] === betterWords[betterWordsIndex]) {
      overusedWordsCounter++;
       console.log(overusedWords[overusedWordsIndex]);
    }
  }
}
console.log(overusedWordsCounter)
*/

let reallyCount = 0;
let basicallyCount = 0;
let veryCount = 0;

//using for of... loop to do check and count
/*for (let word of storyWords) {
  if(word === 'really') {
  reallyCount += 1;
} else if(word === 'basically') {
  basicallyCount += 1;
} else if(word === 'very') {
  veryCount += 1;
}
}
console.log(reallyCount, basicallyCount, veryCount); */

//using forEach method on the storyWords Array!
storyWords.forEach(word => {
   if(word === 'really') {
  reallyCount += 1;
} else if(word === 'basically') {
  basicallyCount += 1;
} else if(word === 'very') {
  veryCount += 1;
}
})

//console.log(`The word really is used ${reallyCount} time(s)`);
//console.log(`The word basically is used ${basicallyCount} time(s)`);
//console.log(`The word very is used ${veryCount} time(s)`);

//initializing number of sentences counter
let sentences = 0;
storyWords.forEach(word => {
  if(word[word.length - 1] === '.' ||
    word[word.length - 1] === '!') {
    sentences += 1;
  }
})
//console.log(`There are ${sentences} sentences in this story`);

//creating function to log results to console formatted
let overusedWordsCount = [reallyCount, basicallyCount, veryCount];

const logResults = (wordCount, sentenceCount, array) => {
  console.log(`The total word count in this story is ${wordCount}`);
  console.log(`The total sentence count in this story is ${sentenceCount}`);
  console.log(`The word 'really' is used ${array[0]} time(s)`)
  console.log(`The word 'basically' is used ${array[1]} time(s)`)
  console.log(`The word 'very' is used ${array[2]} time(s)`)
}
logResults(storyWords.length, sentences, overusedWordsCount);

//logging betterWords array to console
console.log(betterWords.join(' '))

//function that randomly sorts the answers on the array in order for the correct answer to be in random positions

export const shuffleArray = (array: any[]) => 
[...array].sort(() => Math.random() - 0.5);
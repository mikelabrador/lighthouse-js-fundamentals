var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
i = 0;

while (i < ingredients.length) {
    console.log(ingredients[i]);
    i ++;
}

console.log("Task 1 done");

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i ++) {
    console.log(ingredients[i]);
}

console.log("Task 2 done");

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = ingredients.length; i !== 0; i --) {
    console.log(ingredients[i - 1]);
}

console.log("Task 3 done");
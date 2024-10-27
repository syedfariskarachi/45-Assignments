// Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwitch(...ingredients: string[]) {
  console.log(`Making a sandwitch with ${ingredients.join(", ")}.`);
}
make_sandwitch("chicken", "cheese");
make_sandwitch("ham", "cheese", "tomoto", "mayo");
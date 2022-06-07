function receivesAFunction (spy) {
    console.log(spy());
  }
receivesAFunction(function(){
    return "im the spy callback"
});

function returnsANamedFunction() {
    return function add() {
5 + 4;
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        "i am anonymous"
    };
}
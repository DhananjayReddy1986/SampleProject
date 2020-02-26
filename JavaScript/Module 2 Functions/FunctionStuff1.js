// Everything in JavaScript happens in functions. A function is a block of code, self contained, that can be defined once and run any times you want

const dosomething = (foo = 1, bar = 'hey') => {
    console.log(foo)
    console.log(bar)
    }
    const args = [2, 'ho!']
    dosomething(...args)

    
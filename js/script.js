const clear = () => {
    console.clear()
}

{
    // function animals(heads, legs){
    //     let chikens = 0,
    //         cows = 0
    //     let result = [chikens,cows]
    //     for (let i = 0; heads > i; i++){
    //         heads--
    //         chikens++
    //     }
    //     console.log(result)
    // }
    // animals(344, 872) //[252, 92] [Chickens, Cows]
    function animals(heads, legs) {
        if (heads === 0 && legs === 0) return [0, 0]
        if (legs % 2 != 0 || heads < 1 || legs < 2) return "No solutions";
        if (heads * 4 < legs) return "No solutions";
        for (let i = 0; i <= heads; i++) {
            let cow = (heads - i) * 4;
            let chick = i * 2;
            if (cow + chick === legs) return [chick / 2, cow / 4];
        }
        return "No solutions"
    }

    clear()
    {
        function makeChocolates(small, big, goal) {
            // let smallCandy = 0
            // let newGoal = goal
            // for (let i = 0; i < goal; i++){
            //     if (newGoal - 5 >= 2){
            //         smallCandy++
            //         newGoal -= 2
            //     }
            //     else if (newGoal - 5 <= 2 && newGoal - 5 === 0 ){
            //         newGoal -= 5
            //         break
            //     }
            // }
            // if (newGoal >0 ){
            //     smallCandy = -1
            // }
            // console.log(smallCandy)
        }

        makeChocolates(4, 1, 14)//4
        // can't' solve that sry
        // console.log(5 * 'box'); // NaN
        // console.log(Math.sqrt(-4)); // NaN, невозможно получение квадратного корня отрицательного числа
        // console.log(5 + 2 + +'kiwi'); // NaN, т.к. +'kiwi' в результате становится NaN
        // console.log(Number('5olives')); // NaN
        let num = true * 2;
        console.log(num)
        let str = 'apple'
        let nan = +str
        console.log('------------------')
        console.log('July' + 31)
        console.log('Three' + 'Two')
        console.log('Two' * 'Two')
        console.log('NaN')
        console.log(NaN + 2)
    }
    {
        clear()
        console.log(('July' + 31).valueOf())
        console.log(('Three' + 'Two').valueOf())
        console.log((+'One' * +'Five').valueOf())
        console.log(('to be' || !'to be').valueOf())
        console.log(('Two' * 'Two').valueOf())
        console.log(('NaN').valueOf())
        console.log((NaN + 2).valueOf())
        let notANumber = 'Two' * 2
        console.log(isNaN('23')); // false
        console.log(isNaN('fun')); // true
        console.log(0 / 0)
        const isReallyNaN = (val) => {
            // return isNaN(val);  // wasn't working as planned :-(
            return Number.isNaN(val) ? true : false
        };
    }
    {
        //Your task is to return a number from a string.
        const FilterString = (value) => {
            let arr = []
            for (let i = 0; i < value.length; i++) {
                if (!isNaN(value[i])) {
                    arr.push(+value[i])
                }
            }
            return +arr.join('')
        }
        FilterString("a1b2c3") //123
    }
    console.log(!isNaN('f'))

    function isValid(value) {
        if (!Number.isNaN(value)) {
            return ('Value is valid')
        } else return 'Value is not a number'
    }

    function isArgNaN(value) {
        clear()
        if (isNaN(value)) {
            return NaN
        } else return value
    }

    isArgNaN("13.826074336985506")
}

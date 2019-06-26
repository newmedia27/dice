import Gamer from "../gamer";
import {validatePlayer} from "../winner";

export const initPlayer = (arr,playerNumber) => {

    return arr.reduce((array, e, i) => {
        let result = prompt(e + 'you name', '')
        if (array && array.some(item => item.name === result)) {
            return [...array, new Gamer(`Player ` + ++playerNumber, 0, 0)]
        }
        if (result && validatePlayer(result)) {
            return [...array, new Gamer(result, 0, 0)]
        } else if (!result) {
            return [...array, new Gamer(`Player ` + ++playerNumber, 0, 0)]
        } else {
            if (confirm('Это точно ВЫ?')) {
                return [...array, new Gamer(result, 0, 0)]
            }
        }


    }, [])
}

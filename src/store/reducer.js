export const startGame = () => ({type: 'startGame'})
const data = {
    selectMatrix() {
        return Math.floor(Math.random() * this.dataMatrix.length);
    },
    dataMatrix: [
        [
            [
                [0, 5, 0, 0, 0, 1],
                [0, 0, 4, 6, 0, 0],
                [4, 0, 0, 0, 5, 0],
                [1, 0, 0, 0, 0, 4],
                [0, 4, 3, 0, 0, 0],
                [0, 6, 0, 2, 4, 0],
            ],
            [
                [6, 5, 2, 4, 3, 1],
                [3, 1, 4, 6, 2, 5],
                [4, 3, 6, 1, 5, 2],
                [1, 2, 5, 3, 6, 4],
                [2, 4, 3, 5, 1, 6],
                [5, 6, 1, 2, 4, 3],
            ],
        ],
        [
            [
                [5, 0, 4, 0, 0, 0],
                [6, 0, 0, 0, 3, 5],
                [1, 2, 0, 0, 0, 0],
                [0, 0, 0, 6, 0, 0],
                [0, 0, 1, 0, 0, 3],
                [4, 0, 3, 0, 6, 2],
            ],
            [
                [5, 3, 4, 2, 1, 6],
                [6, 1, 2, 4, 3, 5],
                [1, 2, 6, 3, 5, 4],
                [3, 4, 5, 6, 2, 1],
                [2, 6, 1, 5, 4, 3],
                [4, 5, 3, 1, 6, 2],
            ],
        ],
        [
            [
                [0, 3, 4, 0, 0, 0],
                [0, 0, 0, 0, 2, 4],
                [0, 5, 3, 0, 0, 0],
                [4, 0, 0, 1, 0, 5],
                [6, 0, 1, 2, 0, 0],
                [0, 0, 0, 0, 4, 1],
            ],
            [
                [2, 3, 4, 5, 1, 6],
                [5, 1, 6, 3, 2, 4],
                [1, 5, 3, 4, 6, 2],
                [4, 6, 2, 1, 3, 5],
                [6, 4, 1, 2, 5, 3],
                [3, 2, 5, 6, 4, 1],
            ],
        ],
    ],
}
const getInitialState = (data) => {
    const randomData = data.selectMatrix();
    return {
        matrix: {
            start: JSON.parse(JSON.stringify(data.dataMatrix[randomData][0])),
            end: data.dataMatrix[randomData][1],
        },
        values: [1, 2, 3, 4, 5, 6],
        errors: 0,
    }
}
const reducer = (state = getInitialState(data), action = startGame()) =>{
     switch(action.type){
        case 'set value': 
            let newState = {
                ...state,
                matrix: {
                    ...state.matrix,
                    start: [
                        ...state.matrix.start
                    ]
                }
            }
            let value = +action.value;
            if(state.matrix.end[action.indexArr[0]][action.indexArr[1]] === value){
                newState.matrix.start[action.indexArr[0]][action.indexArr[1]] = value;
            }
            return newState; 
        case 'startGame':
            return state;
    }
}

export default reducer;
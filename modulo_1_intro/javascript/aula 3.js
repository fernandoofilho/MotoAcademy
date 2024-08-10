const arr = [1, 2, 3, 5]
const modified_arr = arr.map(element => (
    element + 1
))
arr2 = arr.join('aabb')
arr2_e_meio = [{a: 'a'}, {b: 'b'}, {c: 'c'}, {d: 'd'}]
const arr3 = arr.concat(arr2_e_meio)

const arr4 = ['a', 'b',  // level 0
                        ['c', 'd', // level 1
                                    ['e', 'f', // level 2
                                               ['g', 'h'] // level 3
                                                            ]
                                                                ]
                                                                    ]


                                                              
// for (let index = 1; index < 4; index++) {
//     const newArr = arr4.flat(index)
//     console.log(`flat level ${index}: `, newArr)
// }

// console.log("map + 1", arr, "-> ", modified_arr)
// console.log("join", arr2)
// console.log("concat", arr2, "in", {arr2_e_meio}, " = ", arr3)


const aulas = ['aula 2', 'aula 1']
const aulas2 = ['aulas 3', 'aulas 1']
index = aulas.push('aula 3') - 1

function handleSort(a, b) {
    console.log(a,b)
    if (a > b){
        return  - 1
    }
    else {
        return + 1
    }
}
// console.log(index)
console.log(aulas)
console.log(aulas2.sort())
console.log(aulas.sort(handleSort))


const array_de_objetos = [{aluno: 'fernando', idade: 21}, {aluno: 'cacau', idade: 3}, {aluno: 'cacau 2', idade: 21}]
console.log(array_de_objetos.filter((e) => e.idade === 21))
// console.log(aulas.shift())
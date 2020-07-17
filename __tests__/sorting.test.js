const expect = require('expect')
const bubbleSort = require('../sorting-algorithms/bubble_sort')
const mergeSort = require('../sorting-algorithms/merge_sort')
const selectionSort = require('../sorting-algorithms/selection_sort')
const quickSort = require('../sorting-algorithms/quick_sort')

describe('Sorting algorithms', ()=>{
    const algorithms = {
        bubbleSort,
        mergeSort,
        selectionSort, 
        quickSort
    }

    for (const key in algorithms){
        it(`Sorts a simple array with ${key}`, ()=>{
            expect(algorithms[key]([3,2,1])).toEqual([1,2,3])
        })
        it(`Handles an empty array with ${key}`, ()=>{
            expect(algorithms[key]([])).toEqual([])
        })
        it(`Handles a previously sorted array with ${key}`, ()=>{
            expect(algorithms[key]([1,2,3])).toEqual([1,2,3])
        })
        it(`Sorts a random array with ${key}`,()=>{
            const randomArray = Array.from({length: Math.floor(Math.random()*100)}, el=> Math.floor(Math.random()*100))
            expect(algorithms[key](randomArray)).toEqual([...randomArray].sort((a,b)=>a-b))
        })
    }
})
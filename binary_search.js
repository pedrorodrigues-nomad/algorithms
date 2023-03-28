const array_list = [1, 3, 5, 7, 9]


function binarySearch(arr, item) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = arr[mid]

        if(guess == item) {
            return mid
        }
        
        if(item < arr[mid]) {
            high = mid + 1
        } else {
            low = mid + 1
        }
    }

    return undefined
}

console.log(binarySearch(array_list, 3))
console.log(binarySearch(array_list, 10))

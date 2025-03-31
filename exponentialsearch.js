function binarySearch(arr, low=0, high=null) {

    if (high === null) {
        high = arr.length - 1
    }

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

    return -1
}

function exponencialSearch(arr, target) {

    if (arr[0] === target) {
        return 0
    }

    for (let i = 1; i < arr.length; i *= 2) {
        if (arr[i] === target) {
            return i
        }

        if (arr[i] > target) {
            return binarySearch(arr, target, i / 2, i)
        }
    }
}

console.log(exponencialSearch([1, 3, 5, 7, 9], 3))


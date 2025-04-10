my_list = [1, 3, 9, 7, 5]

def Binary_search (list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) // 2
        print('mid number', mid)
        guess = list[mid]

        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

print (Binary_search(my_list, 3))
print (Binary_search(my_list, 1))
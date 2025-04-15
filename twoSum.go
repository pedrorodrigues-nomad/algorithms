package algorithms

func twoSum(nums []int, target int) []int {
	dict := make(map[int]int)
	for index, item := range nums {
		if val, ok := dict[target-item]; ok {
			return []int{val, index}
		}
		dict[item] = index
	}
	return []int{}
}

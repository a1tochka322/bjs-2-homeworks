function compareArrays(arr1, arr2) {
	return (arr1.every((value, index) => value === arr2[index])) && (arr1.length === arr2.length)
}

function advancedFilter(arr) {
	return arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10) // array
}

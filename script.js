const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
	let currentSubArray=[];
	let currentSum = 0;
	for (const num of arr) {
		if(currentSum+num >n){
			result.push(currentSubArray);
			currentSubArray=[];
			currentSum=0;
		}
		currentSubArray.push(num);
		currentSum+=num;
	}
	if(currentSubArray.length);
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));

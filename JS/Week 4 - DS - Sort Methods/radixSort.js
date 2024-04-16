// Es un método de ordenamiento que no hace comparaciones. Utilizando la logica de "entre más números
// haya en un elemento", de mayor magnitud será este número

function getDigit(num, i) {
    // el valor absoluto (Math.pow) permite que funcione con numeros negativos
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getNumberLength(num) {
    if (num < 10) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function longestDigitCount(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, getNumberLength(nums[i]));
    }
    return maxDigits;
  }

  function radixSort(nums){
    let L = longestDigitCount(nums);
    for(let i = 0; i < L; i++){
        let digitBoxes = Array.from({length: 10}, () => []);
        for(let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j],i);
            digitBoxes[digit].push(nums[j]);
        }
        nums = [].concat(...digitBoxes);
    }
    return nums;
}
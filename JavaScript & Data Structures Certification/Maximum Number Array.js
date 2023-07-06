function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
      if (num > max_num) {
        max_num = num; // Update max_num with the current number
      }
    }
    return max_num;
  }  
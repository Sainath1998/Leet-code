var findMedianSortedArrays = function(nums1, nums2) {
    var numArray = nums1.concat(nums2);
    var mergedArray = numArray.sort(function(a,b){
        return a-b;
    });
    console.log(mergedArray)
    if (mergedArray.length % 2 == 0) {
        index = (mergedArray.length / 2);
        return (mergedArray[index-1] + mergedArray[index]) / 2;
    } else {
        return mergedArray[Math.round(mergedArray.length / 2) - 1];
    }   
};
nums1 = [1,2,3,4]
nums2 = [5,6,7,8]
console.log(findMedianSortedArrays(nums1,nums2))
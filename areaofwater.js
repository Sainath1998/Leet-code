
 var maxArea = function(height) {
    var l = 0;
    var r = height.length - 1;
    var max = 0;
    while (l < r) {
        let lh = height[l];
        let rh = height[r];
        let h = Math.min(lh, rh);
        let area = h * (r - l);
        if(area > max) {
            max = area;
        }
        if (lh > rh) {
            while(l != r && height[r] <= rh) {
                r--;
            }
            
        } else {
             while(l != r && height[l] <= lh) {
                l++;
            }
        }
    }
    return max;
}
var height = [4,3,2,1,4]
console.log(height.length)
console.log(maxArea(height))
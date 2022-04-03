var trap = function(height) {
  var n = height.length
  var left = []
  var right = [] 
  left [0] = height[0]
  for(let i = 1;i < n ; i++)
  {
      left[i] = Math.max(left[i-1],height[i])
  } 
  right[n-1] = height[n-1]
  for(let i = n-2 ; i >=0; i--)
  {
      right[i]=Math.max(right[i+1],height[i])
  }

  var ans = 0
  for(let i = 0; i < n; i++)
  {
      ans = ans + Math.min(left[i],right[i]) - height[i]
  }
  return ans;
};

height = [4,2,0,3,2,5]
console.log(trap(height))

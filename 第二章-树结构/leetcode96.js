//给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
/**
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var numTrees = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
      for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i-j-1] 
      }
  }
  return dp[n]
};
numTrees(8)
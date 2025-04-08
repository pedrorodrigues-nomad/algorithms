/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  targetSum -= root.val;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

console.log(
  hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22),
);

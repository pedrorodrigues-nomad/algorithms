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

function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }

  const rootVal = postorder.pop();
  const root = new TreeNode(rootVal);
  const rootIndex = inorder.indexOf(rootVal);

  root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder);

  return root;
}


console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
console.log(buildTree([-1], [-1]))
console.log(buildTree([1], [1]))


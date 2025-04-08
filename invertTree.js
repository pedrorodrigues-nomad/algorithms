
var invertTree = function(root) {
    invert(root)
    return root
    
};

function invert(root) {
  if (!root) {
    return;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invert(root.left);
  invert(root.right);
}

console.log(invertTree([4,2,7,1,3,6,9]))
   

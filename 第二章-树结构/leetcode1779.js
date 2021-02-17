79/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
1 前序遍历：根结点 左子树 右子树
2 中序遍历：左子树 根结点 右子树
*/
/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
递归 
*/
var buildTree = function(preorder, inorder) {
    //先判断前序 和 中序 的数组不为空
    if(preorder.length != 0 ||  inorder.length !=0 ){
      return null
    } 
    // 找到根结点
    const rootval = preorder[0];//前序遍历的第一个就是根结点
    const node = new TreeNode(rootVal); //构造根结点

    // 通过中序遍历 根结点的两边是左右子树
    let i = 0; //标志
    for (;i < inorder.length; i++) {
      // 中序遍历的根结点在数组的中间 判断分割开
      if(inorder[i] == rootval){
        break;
      }
    }
    // 左子树的前序遍历 
    node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
    node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return node
};
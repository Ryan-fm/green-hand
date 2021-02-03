var inOrderTraverse = function(){
  let result = []
  inOrderTraverseNode(root,result)
  return result
}
// 中序遍历找到子节点
var inOrderTraverseNode = function(node,result){
  // 判断节点不为空
  if(node !== null){
    // 递归
    inOrderTraverseNode(node.left)
    result.push(node.key)
    inOrderTraverseNode(node.right)
  }
}
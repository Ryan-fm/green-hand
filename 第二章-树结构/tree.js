// 树结构
function BinarySearychTree(){

  // 初始化node
  var Node = function(key){
    this.key = key
    this.left = null;
    this.right = null;
  }
  // 跟结点
  var root = null;

  // 插入结点
  this.insert = function(key){
    var newNode = new Node(key)
    // 判断根结点是否为空
    if(root == null){
      root = newNode
    }else{
      insertNode(root,newNode)
    }
  }
  // 私有的方法
  var insertNode = function(node,newNode){
    // 先判断插入的元素是落在左子树还是右子树
    if(newNode.key < node.key){
      // 新插的结点在左边
      if(node.left === null){
        // 判断左边是否为空
        node.left = newNode
      }else{
        // 递归在去寻找子子树
        insertNode(node.left,newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right,newNode)
      }
    }
  }
  // 中序遍历 
  /**
   * 
   * 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从小到大得到顺序访问所有节点，中序遍历是一种应用就是对数的顺序操作
   */
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root,callback)
  }
  // 中序遍历找到子节点
  var inOrderTraverseNode = function(node,callback){
    // 判断节点不为空
    if(node !== null){
      // 递归
      inOrderTraverseNode(node.left,callback)
      callback(node.key)
      inOrderTraverseNode(node.right,callback)
    }
  }

  /**
   * 先序遍历：是以优先与后代节点的顺序访问每个节点，先序遍历的一种应用就是打印一种结构
   *
   */
  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root,callback)
  }
  var preOrderTraverseNode = function(node,callback){
    if(node !== null){
      callback(node.key)
      preOrderTraverseNode(node.left,callback)
      preOrderTraverseNode(node.right,callback)
    }
  }

  /**
   * 
   * 后序遍历 ：先访问节点的后代节点，在访问节点本身。
   * 后序遍历的一种应用是计算一个目录和他的子目录中所有文件所占空间大小
   */
  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root,callback)
  }
  var postOrderTraverseNode = function(node,callback){
    if(node !== null){
      postOrderTraverseNode(node.left,callback)
      postOrderTraverseNode(node.right,callback)
      callback(node.key)
    }
  }
  /**
   * 最大值 
   * 树最右子树的节点
   */
  this.max = function(){
    return maxNode(root)
  }
  var maxNode = function(node){
    if(node){
      while(node && node.right != null){
        node = node.right
      }
      return node.key
    }
    return null
  }
  
  /**
   * 最小值
   */
  this.min = function(){
    return minNode(root)
  }
  var minNode = function(node){
    if(node){
      while(node && node.left != null){
        node = node.left
      }
      return node.key
    }
    return null
  }

  // 寻找特定的值
  this.search = function(key){
    return searchNode(root,key)
  }
  /**
   * 
   * @param {node} 节点 
   * @param {key} 值 
   */
  var searchNode = function(node,key){
    if(node == null){
      return false
    }
    // 在左边的子树找
    if(key < node.key){
      return searchNode(node.left,key)
    }else if(key > node.key){
      // 在右边子树
      return searchNode(node.right,key)
    }else{
      // 找到
      return true
    }
  }
}
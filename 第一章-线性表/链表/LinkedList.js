// 链表
//链表初始化
function LinkedList(){
  var Node = function(element){
    this.element = element
    this.next = null;
  }
  var length = 0
  // 头部
  var head = null;

  //插入一个元素
  this.insert = function(position,element){
    // 检查越界
    if(position >= 0 && position < length){
      // 先构造初始的节点
      var node = new Node(element),
          current = head,//头部的节点
          provious, //上一个元素
          index = 0; //记录当前的遍历的下标
      // 如果position 为0  头部插入
      if(position == 0){
        node.next = current
        head = node
      }else{
        // 在中间插入 找到位置后 将当前的current.next = node
        while (index < position){
          provious = current
          current = current.next
          index ++;
        }
        // 找到之后插入
        node.next = current
        provious.next = node
      }
      // 更新链表的长度
      length ++;
      return true

    }else{
      return false
    }
  }
  // 移除指定位置的元素
  this.removeAt = function(position){
    // 先检查越界
    if(position > -1 && position < length){
      var current = head,
          previous,//前一个元素
          index = 0
      // 如果要移除的是第一个
      if (position == 0){
        head = current.next
      }else{
        // index 为游标 找到那位
        while(index ++ < position){
          previous = current
          current = current.next
        }
        previous.next = current.next
      } 
      length -- ;
      return current.element
    }else{
      return null
    }
  }
 
  // 向链表的尾部追加元素
  this.append = function(element){
    var node = new Node(element),
        current;
    // 如果表中没有元素
    if(head === null){
      head = node
    }else{
      current = head;
      // 循环列表找到最后一项
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    length++;
  }
  // indexOf 方法，返回数组的位置 没有返回-1
  this.indexof = function(element){
    var current = head,
        index = -1;  //没有返回-1
    while(current){
      if(element === current.element){
        return index
      }
      index ++
      current = current.next
    }
    return index
  },
  this.toString = function(){ 
    var current = head, //{1} 
    string = ''; //{2} 
    while (current) { //{3} 
    string += current.element; //{4} 
    current = current.next; //{5} 
    } 
    return string; //{6} 
   };
  //  移除的方法
  this.remove = function(element){
    var index = this.indexof(element)
    return this.removeAt(index)
  }
  // 判断是否为空
  this.isEmpty = function() { 
    return length === 0; 
   };
   this.size = function() { 
    return length; 
   };
}
var link = new LinkedList()
link.append(1)
link.append(4)
link.append(7)
link.insert(2,22)
console.log(link.indexof(1))
console.log(link.toString());
link.removeAt(1)
console.log(link.toString());


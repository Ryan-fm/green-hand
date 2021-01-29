/**
 * 对链表进行插入排序。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let node = head;
  // 定义头部 插入链表头
  let newLinkList = new LinkedNode('0')
  newLinkList.next = head; //从next开始插入元素
  let current  = node, // 当前需要遍历的那个元素
  lastSorted = node.next;    //当前的元素排序的元素
  // 前一个元素
  while(current !=null){
      // 依次对每一个元素排序
      // 证明顺序证据 继续往后
      if(lastSorted.val <= current.val){
        lastSorted = lastSorted.next
      }else{
        // 如果比排序好的数小，则需要往后继续 找到比他pre 那个 放在他后边
        let previous = newLinkList
        while(previous.next.val <= current.val){
          previous = previous.next;
        }
        // 打开中间的链 把current放进去   
        // current 拿出 先建立关系 
        lastSorted.next = current.next
        curr.next = previous.next;
        previous.next = curr;
      }
      // 继续往后
      current = lastSorted.next
      // 找到了
  }
  return newLinkList.next
};
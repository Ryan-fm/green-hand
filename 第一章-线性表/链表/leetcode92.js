/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4  输出: 1->4->3->2->5->NULL
/** m< middle
 * m =>n   
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  // 判断异常的情况
  if(m >= n || head == null){
    return head
  }
  // 新的头部
  let newHead = new ListNode('0');
  newHead.next = head;
  let i = 0;//记录遍历的位置
  let current = head;//当前的元素
  let pre = newHead;
  // 先找到m 的位置
  while(i< n - 1) {
    i++;
    // 先找到待排序的前一个节点
    if(i === m-1){
      pre = current
    }
    // 找到需要排序的点
    if(i < m){
      current = current.next
    }
    // 开始调换
    if(i >= m){
      // 下一个元素
      let tem = current.next  // 2 3 4 
      // 调换位置
      current.next = tem.next // 
      tem.next = pre.next // 
      pre.next = tem
    } 
  }
  return newHead.next
};




// while(i < middle){
//   // 找到每个元素的位置
//    // 调换位置

//   if(current != null){
//     let targetNode = current; //上一个元素的位置
//     while (i <= m-j){
//       targetNode = targetNode.next
//     } 
//     pre.next = current.next
//     current.next = targetNode.next
//     targetNode.next = current
//     j ++;
//   }
 
// }
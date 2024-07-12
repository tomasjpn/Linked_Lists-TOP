import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.addStart("moin");
list.addStart(2);
list.addEnd(15);

list.insertAt(4, 2);

list.removeAt(1);

console.log(list.toString());
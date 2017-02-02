const Node = require('./node');

class LinkedList {
    constructor() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    }

    append(data) {
    	var node = new Node(data);
    	if(this.length === 0){
    		this._head = node;
    		this._tail = node;
    	}else{
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}
    	this.length++;
    	return this;
    }

    head() {
    	return this._head.data;
    }

    tail() {
    	return this._tail.data;
    }

    at(index) {
    	var node = this._head;
    	var i = 0;
    	while(i != index){
    		node = node.next;
    		i++;
    	}
    	return node.data;
    }

    nodeAt(index) {
    	var node = this._head;
    	var i = 0;
    	while(i != index){
    		node = node.next;
    		i++;
    	}
    	return node;
    }

    insertAt(index, data) {
    	var node = new Node(data)
    	if(index < this.length){
    		var current_node = this.nodeAt(index);
    		var node_previous = current_node.prev;
    		var node_next = current_node.next;

    		node.prev = node_previous;
    		node.next = current_node;
    		node_previous.next = node;
    		current_node.prev = node;

    		this.length++;
    		return this;
    	}
    }

    isEmpty() {
    	if(this.length === 0){
    		return true;
    	}else{
    		return false;
    	}
    }

    clear() {
    	this._head.data = null;
    	this._tail.data = null;
    	this.length = 0;
    	return this;
    }

    deleteAt(index) {
    	if(index < this.length){
    		var node = this._head;
    		var i = 0;
    		while(i < index){
    			node = node.next;
    			i++;
    		}
    		while(i != this.length - 1){
    			node.data = node.next.data;
    			this._tail = node;
    			node = node.next;
    			i++;
    		}
    		this.length--;

    	}
    	return this;
    }

    reverse() {

    	// var temp_node = new Node(null, null, null);
    	// var node_current = this._head;

    	// while(node_current != null){
    	// 	temp_node = node_current.prev;
    	// 	node_current.prev = node_current.next;
    	// 	node_current.next = temp_node;
    	// 	node_current = node_current.prev;
    	// }

    	var node_buf = new Node(null, null, null);
    	var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            node_buf.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node_buf.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }
        return this;
    }

    indexOf(data) {
    	var node = this._head;
    	var i = 0;
    	while(i != this.length){
    		if(node.data == data){
    			return i;
    		}
    		node = node.next;
    		i++;
    	}
    	return -1;
    }
}

module.exports = LinkedList;

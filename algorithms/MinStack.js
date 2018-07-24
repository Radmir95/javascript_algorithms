function Node(data){
	this.data = data;
	this.next = null;
}

function MinStack() {
	
	this.header = null;

	this.push = (data)=>{
		const n = new Node(data);

		if (this.header == null){
			this.header = n;
		}
		else{
			n.next = this.header;
			this.header = n;
		}

	}

	this.pop = ()=>{
		let retval = null;

		if (this.header != null){
			retval = this.header.data;
			this.header = this.header.next;
		}
		return retval;
	}


	this.top = ()=>{
		let retval = null;

		if (this.header != null)
			retval = this.header.data;
		return retval;
	}


	this.getMin = ()=>{
		let header = this.header;

		let min = header.data;

		header = header.next;

		while (header != null){
			if (header.data < min)
				min = header.data;
			header = header.next;
		}
		return min;
	}

}

const minStack = new MinStack();

minStack.push(1);
minStack.push(1);
minStack.push(1);
minStack.push(99);
minStack.push(-1);
minStack.push(1);

console.log(minStack.getMin());


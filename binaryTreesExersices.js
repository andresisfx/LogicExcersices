function BinarySearchTree(value) {
    this.root=value;
    this.left=null;
    this.right=null;
 }
 BinarySearchTree.prototype.insert=function(val){
    if(val<this.root){
       if(this.left){
          this.left.insert(val)
       }else{
          this.left= new BinarySearchTree(val)
       }
    }else{
        if(this.right){
             this.right.insert(val)
          }else{
             this.right= new BinarySearchTree(val)
          }
       
    }
   }
    BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
       //in-order left-root-rigth
       //pre-order root-left-rigth
       //post-order left-rigth-root
       if(order==="in-order"){
          if(this.left&&this.left.depthFirstForEach(cb,order));
          cb(this.root);
          if(this.right&&this.left.depthFirstForEach(cb,order));
 
       }
       if(order==="pre-order"){
            cb(this.root);
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));

     }
       if(order==="post-order"){
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));
            cb(this.root);

     }
    }
    BinarySearchTree.prototype.size=function(){
      // if(this.left===null&&this.right===null)return 1;
      // if(this.left!==null&&this.right===null)return 1 +this.left.size();
      // if(this.left===null&&this.right!==null)return 1+this.right.size();
      // if(this.left!==null&&this.right!==null)return 1+this.right.size()+ this.left.size();

      let counter=1
      if(this.left) counter+= this.left.size();
      if(this.right) counter += this.right.size();
      return counter
}
BinarySearchTree.prototype.contain=function(value){
   if(this.value===value)return true
   if(this.value<value){
      if(!this.right)return false
      return this.right.contain(value)
   }else{
      if(!this.left)return false
      return this.left.contain(value)
   }
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,arr=[]){
   if(this.left!==null){
      arr.push(this.left)
   }
   if(this.right!==null){
      arr.push(this.right)
   }
   cb(this.value)
   if(arr.length>0){
      arr.shift().breadthFirstForEach(cb,arr)
   }
}
 
 let myTree = new BinarySearchTree(10)
 myTree.insert(8)
 myTree.insert(11)
 console.log(myTree)








// serch for  AVL tree &  max heap
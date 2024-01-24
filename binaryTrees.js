function BinarySearchTree(value) {
    this.root=value;
    this.left=null;
    this.right=null;
 }
 BinarySearchTree.prototype.insert=function(val){
    if(val<this.root){
       if(this.left){
          this.left.inset(val)
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
 
    BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
       //in-order left-root-rigth
       //pre-order root-left-rigth
       //post-order left-rigth-root
       if(order==="in-order"){
          if(this.left&&this.left.depthFirstForEach(cb,order));
          cb(this.root)
          if(this.right&&this.left.depthFirstForEach(cb,order));
 
       }
       if(order==="pre-order"){
            cb(this.root)
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));

     }
       if(order==="post-order"){
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));
            cb(this.root)

     }
    }
 }
 let myTree = new BinarySearchTree(10)
 myTree.insert(8)
 myTree.insert(11)
 console.log(myTree)








// serch for  AVL tree &  max heap
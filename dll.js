function Node(){
    this.data=1;
    this.next=null;
    this.prev=null;
    this.top=null;
}
function DDl(){
    this.head=null;
    this.tail=null;
    this.current=null;


}
DDl.prototype.add=function(row,colum){
    
    

    var node = new Node();
    this.head=node;
    this.tail=node;
    this.curren =node;
    //console.log(this.head);
    for (let i = 0; i < row; i++) {
       var node = new Node();
       var ran=Math.floor(Math.random() * 10);
        if (i == 0) {
            this.head=node;
            this.tail=this.head;
            this.head.data= 1;
           // console.log("D___>",this.tail,this.head)
        }else{

            this.tail.top= node;
            this.tail=this.tail.top;
            this.tail.data=-1 ;
           
           // console.log("D--->",this.tail);
            
        }
    
    
    this.current=this.tail;
    for (let j = 0; j<row ; j++) {
        var ran=Math.floor(Math.random() * 10);
        var node = new Node();
        this.current.next=node;
        this.current=node;
        this.current.data+=ran;
 
       // console.log("dataC:",this.current.data,i);
        
    }
    this.current=this.head;
    
    }

};
DDl.prototype.show=function(row,colum){
    var string="";
    this.current = this.head;
    this.tail=this.head;
    
    for (let i = 1; i <=row ; i++) {
        this.current=this.current.next;
       for(let j =1; j<=colum ; j++){
           
           string+=this.current.data+",";
           this.current=this.current.next;
           //console.log(current); 
           
       
       }
       this.tail=this.tail.top;
       this.current=this.tail;

       console.log("[",string,"]");
       string=""
      }
      
       
      
  //  
    
    };  
 
  DDl.prototype.insert=function(row,colum,data){
    
    var data_in=data
    this.current = this.head;
    this.tail=this.head;
    
    for (let i = 1; i <=row ; i++) {
        this.current=this.current.next;
       for(let j =1; j<=colum ; j++){
        if (i==row&&j==colum) {
           this.current.data=data_in
           
        }
        else{
            this.current=this.current.next;
        }   
        
       }
       this.tail=this.tail.top;
       this.current=this.tail;

       string=""
      }
  };


var loop_1=new DDl()
loop_1.add(4,4)

loop_1.show(4,3)
loop_1.insert(2,2,11)
loop_1.insert(2,1,12)
loop_1.show(4,3)
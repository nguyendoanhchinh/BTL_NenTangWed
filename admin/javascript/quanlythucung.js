
var data=[
    {   Id: 1, Ten : "Alaskamummim", SL : "2", Tien : "300.000"},
    {   Id: 2, Ten : "Becgieduc", SL : "4", Tien : "150.000"},
    {   Id: 3, Ten : "Becgie Ha Lan", SL : "5", Tien : "500.000"}
]
render()
function add(){
    var item_id=document.getElementById("id").value
    var item_ten=document.getElementById("ten").value
    var item_sl=document.getElementById("sl").value
    var item_tien=document.getElementById("tien").value
 
    var item={
        Id : item_id,
        Ten : item_ten,
        SL : item_sl,
        Tien:item_tien
        
    }

    let index = data.findIndex((c)=>c.Id==item.Id)

    if(index>=0){
        data.splice(index,1,item)
    }else{
        data.push(item)
    }
    
    render()
    clear()
}
    function render(){
        table =` <tr>
        <th scope="col">ID</th>
        <!-- <th scope="col">Ảnh thú cưng</th> -->
        <th scope="col">Tên </th>
        <th scope="col">Số lượng</th>
        <th scope="col">Giá tiền</th>
        <th scope="col"></th>
        <th scope="col"></th>
    
      </tr>`
      for(let i=0; i<data.length;i++){
        table +=` <tr>
        <th scope="col">${data[i].Id}</th>
        <!-- <th scope="col">Ảnh thú cưng</th> -->
        <th scope="col">${data[i].Ten}</th>
        <th scope="col">${data[i].SL}</th>
        <th scope="col">${data[i].Tien}</th>
        <th scope="col"><button onclick="deleteItem(${data[i].Id})">Delete </button></th>
        <th scope="col"><button onclick="editItem(${data[i].Id})">edit </button></th>
    
      </tr>`
      }
      document.getElementById("render").innerHTML=table
    }
    function clear(){
        document.getElementById("id").value="";
        document.getElementById("ten").value="";
        document.getElementById("sl").value="";
        document.getElementById("tien").value="";
    }
    function deleteItem(x){
        for(let i=0;i<data.length; i++){
            if(data[i].Id==x){
                data.splice(i,1)
                render()
            }
            
        }
    }
    function editItem(x){
        for(let i=0;i<data.length; i++){
            if(data[i].Id==x){
             document.getElementById("id").value=data[i].Id;
             document.getElementById("ten").value=data[i].Ten;
             document.getElementById("sl").value=data[i].SL;
             document.getElementById("tien").value=data[i].Tien;
            }
            
        }  
    }


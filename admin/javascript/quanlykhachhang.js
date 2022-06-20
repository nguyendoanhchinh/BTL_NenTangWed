
var data=[
    {   Id: 1, Ten : "Nguyễn Anh Đức", Email : "aducodong@gmail.com", Diachi : "Nam Định", SDT : "0867951701"},
    {  Id: 2, Ten : "Trần Đức Anh", Email : "ducanh@gmail.com", Diachi : "Hà Nội", SDT : "097654324"},
    {   Id: 3, Ten : "Nguyễn Doanh Chính", Email : "doanhchinh@gmail.com", Diachi : "Ninh Bình", SDT : "097654324"},

]
render()
function add(){
    var item_id=document.getElementById("id").value
    var item_ten=document.getElementById("ten").value
    var item_email=document.getElementById("email").value
    var item_diachi=document.getElementById("diachi").value
      var item_sdt=document.getElementById("sdt").value
    var item={
        Id : item_id,
        Ten : item_ten,
        Email : item_email,
        Diachi : item_diachi,
        SDT:  item_sdt,
        
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
                                 
                                  <th scope="col">Tên </th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Địa chỉ</th>
                                  <th scope="col">SĐT</th>
                                  <th scope="col"></th>
                                  <th scope="col"></th>
    
      </tr>`
      for(let i=0; i<data.length;i++){
        table +=` <tr>
        <th scope="col">${data[i].Id}</th>
        
        <th scope="col">${data[i].Ten}</th>
        <th scope="col">${data[i].Email}</th>
        <th scope="col">${data[i].Diachi}</th>
        <th scope="col">${data[i].SDT}</th>
        <th scope="col"><button onclick="deleteItem(${data[i].Id})">Delete </button></th>
        <th scope="col"><button onclick="editItem(${data[i].Id})">edit </button></th>
    
      </tr>`
      }
      document.getElementById("render").innerHTML=table
    }
    function clear(){
        document.getElementById("id").value="";
        document.getElementById("ten").value="";
        document.getElementById("email").value="";
        document.getElementById("diachi").value="";
        document.getElementById("sdt").value="";
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
             document.getElementById("email").value=data[i].Email;
             document.getElementById("diachi").value=data[i].Diachi;
             document.getElementById("sdt").value=data[i].SDT;
            }
            
        }  
    }


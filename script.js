function myFunction1(id="") {
    document.querySelectorAll('.demo').forEach(element => {
        element.style.display='none'
        
    });
   document.getElementById(id).style.display='block'
  
  }
 console.log(document.querySelectorAll('.demo'))
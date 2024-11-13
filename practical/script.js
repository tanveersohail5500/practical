let arrayOfItems = [
  {
    prodName : 'Rayban',
    prodImage : 'card-1.webp',
    prodPrize : 'PKR 4200',
    prodButton : 'Read Me'
    },{
        prodName : 'Gucci',
    prodImage : 'card-2.webp',
    prodPrize : ' PKR 3040',
    prodButton : 'Read Me'
    },
    {prodName : 'Tomy Hillfiger',
    prodImage : 'card-3.webp',
    prodPrize : ' PKR 10200',
    prodButton : 'Read Me'
    },
  ]
    let wrapper = document.getElementById('wrapper')
    arrayOfItems.map(({prodName,prodImage,prodPrize,prodButton}) =>{
        wrapper.innerHTML+=
        `<div class="card" style="width: 18rem; margin:2.5rem; display:flex;">
  <img src="${prodImage}" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">${prodName}</h5>
    <p class="card-text">${prodPrize}.</p>
    <a href="#" class="btn btn-primary"style="display:flex; justify contant:center;">Read Me</a>
  </div>
</div>
        `
    } )
   
    

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  document.getElementById('emailError').textContent = '';


  const email = document.getElementById('exampleInputEmail1').value;

  
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  
  if (!emailRegex.test(email)) {
     
      document.getElementById('emailError').textContent = "Please enter a valid email address.";
  } else {
      
      alert("Email is valid!");
      
     
  }
});

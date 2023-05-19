
function login(event) 
{
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('u_name').value;
    var password = document.getElementById('pwd').value;
  
    if (username === 'admin' && password === '12345') 
    {
      redirectToMainPage();
    } 
    else
    {
      alert('Invalid username or password');
      document.getElementById('u_name').value="";
      document.getElementById('pwd').value="";

    }
  }
  
  function redirectToMainPage()
  {
    window.location.href = 'todo.html';
  }
  
  function logout() 
  {
    window.location.href = 'index.html';
  }
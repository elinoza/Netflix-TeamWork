window.onload=async()=>{
    const url= "https:striveschool-api.herokuapp.com/api/movies/"

    try{
        let response= await fetch(url,{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNGRhZmFkOGMzODAwMTc1YTMxYjAiLCJpYXQiOjE2MDUyNjMyNDEsImV4cCI6MTYwNjQ3Mjg0MX0.2wS2vqKOgwvGs8sqWRA3Uy5WjIT9mrxctVexGeSB5Vo",
                }
            });
        let movies = await response.json();
        console.log(movies)
        
        if (response.ok) {
            
            
        
          } else {
            alert("Something went wrong!");
          }
    }
    catch(error){console.log(error)}
    
}


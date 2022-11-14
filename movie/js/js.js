
window.addEventListener('load',() => {
    
    enlaces = document.querySelectorAll('.enlaces');

	for(i = 0; enlaces.length >= i; i++)
	{
       
        enlaces[i].addEventListener('click', function(){
            
            for (k = 0; enlaces.length >= k; k++) {
             
                if(k < 4 ) 
                {

                    enlaces[k].classList.remove('activo');
               	  
                }

            }

            this.classList.toggle('activo');
        
        });

	}

});

const cargar = () => {
    
    resultado = document.getElementById('resultado');
    container = document.getElementById('container');
    container2 = document.getElementById('container2');

    req = new XMLHttpRequest();

    req.open('GET', 'http://www.omdbapi.com/?s=car&apikey=32dd73b9&type=series', true);

    req.onreadystatechange = function () 
    {

        if (req.readyState == 4) 
        {

            data = JSON.parse(req.response);

            for(i = 0; data['Search'].length >= i; i++)
            {

                Title  = data['Search'][i].Title;
                Poster = data['Search'][i].Poster;
                Year   = data['Search'][i].Year;

                movie = document.createElement('a');
                movie.classList.add('movie');
                           
                h4 = document.createElement('h4');
                h4.textContent = Title ;
                h4.classList.add('titulo');

                movie.appendChild(h4);

                img = document.createElement('img');
                img.classList.add('img');
                img.src = Poster;

                h5 = document.createElement('h5');
                h5.textContent = Year;
                h5.classList.add('ano');
                movie.appendChild(h5);

                movie.appendChild(img);
                container.appendChild(movie);
                       
            }

        }

    }
        
    req.send(null);

}

setTimeout(function() {

    usuario   = document.getElementById('usuario');
    menuLogin = document.getElementById('menuLogin');

    usuario.addEventListener('click',function(){
        
 
        menuLogin.classList.toggle('block');
        
           
    });

    buscar = document.getElementById('buscar');
       
    buscar.addEventListener('keyup', () =>
    {
            
        var respuestaSearch = document.getElementById('respuesta-search');
        value = buscar.value;
            
        if(value!=''){

            var req = new XMLHttpRequest();

            enlaces = document.querySelectorAll('.enlaces');

            var type = '';

            for(i = 0; enlaces.length >= i; i++)
            {
                    
                if(i < 4 ) 
                {
                            
                    if (enlaces[i].className.indexOf('activo') > -1) 
                    {
                                     
                            type = enlaces[i].textContent;   
 
                    }

                }

            }
                
            if (type != '') {
                   
                req.open('GET','http://www.omdbapi.com/?s='+value+'&apikey=32dd73b9',true); 


            }else{
                  
                req.open('GET','http://www.omdbapi.com/?s='+value+'&apikey=32dd73b9&type='+type,true);

            }
                
            req.onreadystatechange = () =>
            {
                
                if (req.readyState==4) 
                {

                    if (respuestaSearch.hasChildNodes()) 
                    {

                        respuestaSearch.removeChild(respuestaSearch.children[0]);

                    }
                        
                    data = JSON.parse(req.response);
                     
                    let modal = document.getElementById('modal');
                    modal.style.display = 'block';
                        
                    for(i = 0; data['Search'].length >= i; i++)
                    {
                        Title  = data['Search'][i].Title;
                        Poster = data['Search'][i].Poster;
                        Year   = data['Search'][i].Year;


                        movie = document.createElement('a');
                        // movie.href = 'movie/index.html';
                        movie.classList.add('movie');


                        h4 = document.createElement('h4');
                        h4.textContent = Title ;
                        h4.classList.add('titulo');
                        movie.appendChild(h4);

                        img = document.createElement('img');
                        img.classList.add('img');
                        img.src = Poster;

                        h5 = document.createElement('h5');
                        h5.textContent = Year;
                        h5.classList.add('ano');
                        movie.appendChild(h5);

                        movie.appendChild(img);

                        respuestaSearch.appendChild(movie);


                    }

                }
            }
              
        }else{

            let modal = document.getElementById('modal');
            modal.style.display = 'none';

        }

        req.send(null);

    });

    cerrar = document.getElementById('close');

    cerrar.addEventListener('click',() => {
           
        let modal = document.getElementById('modal');
        modal.style.display = 'none';

    });


    movie = document.querySelectorAll('.movie');

	for (i = 0; i<movie.length; i++) { 

        movie[i].addEventListener('click',function(){

            window.location.href = 'movie/index.html';
            localStorage.setItem('movie',this.firstChild.textContent);
         
        });

    }

    menuHamburgesa =  document.getElementById('menuHamburgesa');

    menuIcon =  document.getElementById('menuIcon');

    menuIcon.addEventListener('click',()=>{

      menuHamburgesa.classList.toggle('menuHamburgesa');

    });

}, 1000);




 
class  WindowModal extends HTMLElement
{
    
    constructor()
    {
       
       super();

    }

    connectedCallback()
    {

    

        this.innerHTML = `
       
            <div id="modal">
                <div id="contenido-modal">
                    <div class="contenido-header">
                       <span id="close">&times;</span>
                    </div>

                    <div id="contenido-body">
                        <div id="respuesta-search"></div>
                    </div>

                <div>
            <div>

            <style>

                #modal
                {
                    width:100%;
                    height:100%;
                    background-color:rgba(0,0,0,0.6);
                    z-index:1;
                    position:absolute;
                    left:0;
                    top:50px;
                    display : none;
                  
                }

                #close
                {
                    float: right;
                    font-size: 40px;
                    font-weight: bold;
                    cursor: pointer;
                    color: #bbb;
                    margin-right:20px
                }

                #respuesta-search
{
  
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   width: 100%;
   background-color: #0B0B14;
   

}
            </style>

              
        `;

    }

}

window.customElements.define('window-modal',WindowModal);
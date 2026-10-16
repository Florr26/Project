import { useState } from 'react'

function Note(){

return(

<div className = "Container">

    <header  className = "Encabezado">
        <div className= "logo">
            <img src= "https://media.canva.com/v2/image-resize/format:PNG/height:650/quality:100/uri:ifs%3A%2F%2FM%2F48d7b94e-2e2c-41bf-aafb-f4150565dedc/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAOq95Z8vJiBb8sSxiA5niLCHbOwDgK_Ibj2e_7DN509A&exp=1792106108&osig=AAAAAAAAAAAAAAAAAAAAAEa-Jx-m8ViRVDaHHzPxGE82XTxix_Lc5filtDAchAD7&signer=media-rpc&token=AAIAAU0AJDQ4ZDdiOTRlLTJlMmMtNDFiZi1hYWZiLWY0MTUwNTY1ZGVkYwAAAAABoUHZFGCzbdz9Xrv9kKj6w_Pk4kvnkNVYGmqaIAlnLEcZy6L-hg&x-canva-quality=screen" alt= "Logo" className = "renault"/> 

               <div className = "head_titulo">
                   <h1> SISTEMA ESCOLAR DE APUNTES</h1>
                   <h2> Centro de copiado</h2>
               </div> 

               <div className = "head_perfil">
               
                <img src = "https://media.canva.com/v2/image-resize/format:PNG/height:512/quality:100/uri:ifs%3A%2F%2FM%2F974e6e64-e1ab-40b2-ac7e-10dbea9ecdd3/watermark:F/width:512?csig=AAAAAAAAAAAAAAAAAAAAACUMHL_cEpD2gqGRDDWUq6LJXZZAjt0Mw7UJ2WxAuOlN&exp=1792105075&osig=AAAAAAAAAAAAAAAAAAAAAFEikceCBt_j8BQJSA24QjEDS0qlyWGM2WE-ybrUxkJ5&signer=media-rpc&token=AAIAAU0AJDk3NGU2ZTY0LWUxYWItNDBiMi1hYzdlLTEwZGJlYTllY2RkMwAAAAABoUHJUThMT0Y4-CFJHzT7vX-Z6KcSYzoGDde40NXzYJLk9UXFQw&x-canva-quality=screen" alt = "foto perfil" className="icon"/>
               


               </div>

        </div> 
    </header>


    <main className = "central">
        <section className = "formulario">

          <div className="titulo_formulario">
             <h2> CENTRO DE COPIADO </h2>
             <p> Completa los datos para realizar tu pedido </p>
          </div>

          <div className="inputs">
             <label className="etiqueta"> Nombre y Apellido </label>
             <input  type="text" className="texto" placeholder =" Ej: Juan Mangionez"/>
          </div>

          <div className="inputs">
             <label className="etiqueta"> Curso</label>
             <input type="text"  className ="texto"  placeholder =" Ej: 5to P"/>
          </div>

         <div className="opciones">
      
         <div className="inputs input_corto">
             <label className="etiqueta"> Cantidad</label>
             <input type="number" className="texto" defaultValue ="1" min =" 1"/>
         </div>

         <div className="checkboxes">
             <label> <input type="checkbox" /> Simple faz </label>
             <label> <input type="checkbox" /> Doble Faz </label>
             <label> <input type="checkbox" /> Anillado </label>
             <label> <input type="checkbox" /> A4 </label>
             <label> <input type="checkbox" /> A5 </label>
             <label> <input type="checkbox" /> Blanco y negro </label>
            <label> <input type="checkbox" /> A color </label>
         </div>

         <div className="up">
             <input type="file" id="archivo" style={{ display: 'none' }} />
            <label htmlFor="archivo" className="upload">
                
         <div className="icono_upload">
            <img src = "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F4cfee196-b41e-4778-b302-0827af093000/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAADBCtxS2osTACgDgeU5LUtHrz-mGko6sbDzP2NHt9Y3Z&exp=1792107981&osig=AAAAAAAAAAAAAAAAAAAAAI4lAnlJ0So1FO4O5fmDHwPjhTAT9AqD9kSMJLd3mQvq&signer=media-rpc&token=AAIAAU0AJDRjZmVlMTk2LWI0MWUtNDc3OC1iMzAyLTA4MjdhZjA5MzAwMAAAAAABoUH1qMj2NXahzkA8sGXO0azqBkOSki4WswLT2FdjwutWiuy9-Q&x-canva-quality=thumbnail" alt = "descarga" className ="descarga_icon"/>
         </div>
             <p>Arrastra y solta tu archivo aqui<br /><span>o clickea para seleccionar</span></p>
           </label>
         </div>

         <button type="button" className="btn_principal"onClick={() => alert("Pedido enviado")} >
             Enviar pedido
         </button>

         <button type="button" className="btn_secu">
             Ver pedidos Pendientes
         </button>

         </ div>


        </section>

     <aside className = "historial"> 

        <div className="titulo_historial">

         <img src = "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2Fdce481a7-70ea-4762-8242-90da1f5be16f/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAJJ1_Bnux4TKsiZI2cXQbrukE_HOfEIWORfE9eusPelS&exp=1792106908&osig=AAAAAAAAAAAAAAAAAAAAANrqzE23Vmz1KfCRBLOZJDT3Rg4x1SGOC4l4zoTHcYLu&signer=media-rpc&token=AAIAAU0AJGRjZTQ4MWE3LTcwZWEtNDc2Mi04MjQyLTkwZGExZjViZTE2ZgAAAAABoUHlSWAtYf7Z5_yTWGXQqDkPFlqWL9_Q2oTW9nDOPPR0Oy6vWw&x-canva-quality=thumbnail" alt = "reloj "className="icono_reloj"/>
         <h2> Historial de Pedidos</h2>
        </div>


     <table className="tabla_historial">

       <thead>
         <tr>
           <th> Apunte</th>
           <th> Fecha</th>
           <th> Estado</th>
         </tr>
       </thead>

       <tbody>
        <tr>
           <td>—</td>
           <td>—</td>
           <td>—</td>
        </tr>
       </tbody>

     </table>
     </aside>
   
     </main>


</div>
    )
}
export default Note
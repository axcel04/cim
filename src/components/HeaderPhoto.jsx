 function HeaderPhoto() {

    return(<>
        <div className="relative " >
            <img src="image.jpg" alt="image"className="h-60 w-50"/>
        <div className="absolute top-0 z-50 bg-black opacity-70 w-50 h-60">
            <p className="bottom-8 pl-4 font-semibold 
               text-blue-600 opacity-80 text-white flex justify-center"
               >Bienvenue a la site de Club Informatique et Multimédia</p>
        </div>

        </div>
    </>)
 }
 export default HeaderPhoto;
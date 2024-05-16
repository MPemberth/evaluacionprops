function CardsData(props){
    return(
        <div class="cards">
            <p>Servicio: { props.title}</p>
            <p>Descripción: { props.descripcion}</p>
            <p>Imagen: { props.imagen}</p>
            <p>link: { props.link}</p>
        </div>

    );
}
export  default CardsData;
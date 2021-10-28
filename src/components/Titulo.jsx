import './Titulo.css'
export const Item = () => {
    return (
      <>
        <h2>Hola soy Item </h2>
      </>
    )
  }
  
  
export function Input() {
    return (
      <div>
        <h2>Hola soy Input </h2>
        <input type="text" placeholder="hola soy input" />
      </div>
    )
  }


const Titulo = ({ titulo,subtitulo, children}) => {
    return (
        <>
            <h2>{ titulo }</h2>
            <h2>{ subtitulo }</h2>
        </>
    );
}

export default Titulo;


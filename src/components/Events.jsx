const Events = () => {
    const HandleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    }
    
    const RenderSomething = (x) => {
        if (x){
            return (
                <h1>renderizando isso!</h1>
            )
            
        } else {
                return (
                    <h1>também posso renderizar!</h1>
                )
            }
        }
    
    return (
        <div>
            <div>
                <button onClick={HandleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}> Clique aqui também</button>
                <button onClick={() => console.log("terceiro botão clicado")}> Clica aqui, por favor</button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    )
}
export default Events
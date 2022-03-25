import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted = useRef(true); //mantiene la referencia cuando este componente esta vivo

    const [state, setState] = useState({ data: null, loading: true, error: null })

    //usamos el useeffect para que cuando se desmonte, no nos de un error al mostrar multiplecustom
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])//devolvemos un arreglo vacio para poder renderizarlo una vez 

    useEffect(() => {


        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {
                    
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } 
                    else {
                        console.log('setState no se llamo');
                    }
                }, 2000);
            });
    }, [url]);

    return state;
}

import React,{useState,useEffect} from 'react';


export default function Hierarchical() {
    const [ showItem, setShowItem ] = useState( false );

    useEffect( () => {
        console.log( 'useEffect Called' );
    }, [] )

    console.log( showItem )
    return(
        <div>
            Hello
            <button onClick={ () => setShowItem( false ) }>Toggle</button>
        </div>
    )
}

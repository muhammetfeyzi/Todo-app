import React, { useEffect } from 'react'

export default function MyChild() {

    useEffect(() => {
        console.log('Child Component: Mounted');

        return () => {
            console.log('Child Component: Unmounted');
        }
    })
    return (
        <div>
            <div>child component</div>
        </div>
    )
}

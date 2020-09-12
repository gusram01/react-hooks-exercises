import React, { useCallback } from 'react'
import Child from './Child'
import { useState } from 'react';
import './memorize.css';

const Parent = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    // const increment = (num: number) => {
    //     setValue(value + num)
    // }

    const increment = useCallback((num: number) => {
        setValue(prev => prev + num)
    }, [setValue]);

    return (
        <div>
            <h1>Parent</h1>
            <p> Total: {value} </p>

            <hr />

            {
                numeros.map(n => (
                    <Child
                        key={n}
                        num={n}
                        increment={increment}
                    />
                ))
            }
        </div>
    )
}

export default Parent;
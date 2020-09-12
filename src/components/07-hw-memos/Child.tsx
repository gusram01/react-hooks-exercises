import React from 'react'

interface Props {
    num: number;
    increment: (num: number) => void;
}

const Child: React.FC<Props> = React.memo(({ num, increment }) => {

    console.log('  Recall :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(num)}
        >
            { num}
        </button>
    );
});

export default Child;
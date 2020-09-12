import React from 'react'

interface Props {
  increment: (num: number) => void;
}

const ShowIncrement: React.FC<Props> = React.memo(({ increment }) => {

  console.log('Recall :(')

  return (
    <button
      className="btn btn-primary"
      onClick={() => increment(5)}
    >
      Increment
    </button>
  );
});

export default ShowIncrement;

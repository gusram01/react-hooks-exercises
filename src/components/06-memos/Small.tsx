import React from 'react'

interface Props {
  value: number;
}

const Small: React.FC<Props> = React.memo(({ value }) => {
  console.log('Recall :(');
  return (
    <small>
      {value}
    </small>
  )
});

export default Small;
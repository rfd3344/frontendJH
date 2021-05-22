// import React from 'react';

// type IProps = {
//   name: string
// }

// function customHook() {
//   const [count, SetCount] = React.useState(0);
//   let effect = 1;
//   React.useEffect(() => {
//     effect = 10;
//   }, []);

//   return {
//     count,
//     effect,
//   }
// }

// export default function Button({ name } : IProps) {
//   const [v, setV] = React.useState<string>('');
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.warn('input', e.target.value);
//     setV(e.target.value);
//   };

//   console.warn('rfd v', v);
//   return (
//     <section>
//       <input value={v} onChange={handleInput} onBlur={(e) => console.warn(e.target.value)} />
//       { name }
//       {count}
//       {effect}
//     </section>
//   );
// }

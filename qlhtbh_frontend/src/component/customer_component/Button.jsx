export default function Button({ number, updateNumber }) {
	console.log(number);
	return (
		<>
			<button onClick={() => updateNumber(0)} className={number == 0 ? 'updateDot' : undefined}></button>
			<button onClick={() => updateNumber(1)} className={number == 1 ? 'updateDot' : undefined}></button>
			<button onClick={() => updateNumber(2)} className={number == 2 ? 'updateDot' : undefined}></button>
			<button onClick={() => updateNumber(3)} className={number == 3 ? 'updateDot' : undefined}></button>
		</>
	);
}

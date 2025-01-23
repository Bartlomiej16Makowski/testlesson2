import { useState } from 'react'
import styles from './App.module.css'

function App() {
	const [currentValue, setCurrentValue] = useState('') // Użyj stringa zamiast tablicy
	const [tableActionUpdate, setTableActionUpdate] = useState('')
	const [table, setTable] = useState([])

	console.log(table)

	function handleTakeValue(e) {
		const val = e.target.textContent
		setCurrentValue(prev => prev + val) // Dodawaj wartości jako string
	}

	function handleTakeAction(e) {
		const action = e.target.textContent
		setTableActionUpdate(action)
		setTable(prev => [...prev, currentValue]) // Dodaj currentValue do tablicy
		setCurrentValue('') // Wyczyść currentValue po zapisaniu akcji
	}

	function handleGetResult() {
		const number = parseFloat(currentValue) // Użyj currentValue do obliczeń
		let result

		if (tableActionUpdate === '-') {
			result = parseFloat(table[0]) - number
		} else if (tableActionUpdate === '+') {
			result = parseFloat(table[0]) + number
		} else if (tableActionUpdate === '*') {
			result = parseFloat(table[0]) * number
		} else if (tableActionUpdate === '/') {
			result = parseFloat(table[0]) / number
		}

		setCurrentValue(result.toString()) // Ustaw wynik jako string
		setTable([]) // Wyczyść tabelę po obliczeniu
		setTableActionUpdate('') // Wyczyść akcję po obliczeniu
	}

	return (
		<>
		<div>dsaf</div>
			<div className={styles.body}>
				<div className={styles.main}>
					<input className={styles.displayer} value={currentValue} type="text" /> {/* Upewnij się, że typ jest tekstowy */}
					<button className={styles.button} onClick={handleTakeValue}>
						1
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						2
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						3
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						4
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						5
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						6
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						7
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						8
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						9
					</button>
					<button className={styles.button} onClick={handleTakeValue}>
						0
					</button>
					<button className={styles.button} onClick={handleGetResult}>
						=
					</button>
					<button className={styles.button} onClick={handleTakeAction}>
						+
					</button>
					<button className={styles.button} onClick={handleTakeAction}>
						-
					</button>
					<button className={styles.button} onClick={handleTakeAction}>
						/
					</button>
					<button className={styles.button} onClick={handleTakeAction}>
						*
					</button>
					<button className={styles.button} onClick={() => setCurrentValue('')}>
						C
					</button>{' '}
					{/* Przycisk do czyszczenia */}
					<button className={styles.button} onClick={() => setCurrentValue(prev => prev + '.')}>
						.
					</button>{' '}
					{/* Przycisk do dodawania kropki */}
				</div>
			</div>
		</>
	)
}

export default App

<script>
	let name = 'dbax';
	let age =18;

	const handleClick = () => {
		age += 1;
	};

	const handleInput = (e) => {
		age = e.target.value;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Welcome to my domain</p>
	<p style="font-size: {age}px">You are {age} years old</p>
	<!-- this input changes even if the age is changed from another source -->
	<!-- <input type="number" on:change={handleInput} value={age} /> -->
	 <input type="text" bind:value={age} />
	 <!-- this bind keyword does the twoway binding all at once -->
	<button on:click={handleClick}>update age</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
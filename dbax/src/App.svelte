<script>
	import Modal from'./Modal.svelte'
	let name = 'dbax';
	let age =18;

	let showModal = false;

	const handleClick = () => {
		age += 1;
	};

	const handleInput = (e) => {
		age = e.target.value;
	}

	let people = [
		{name:'dbax',beltColour: 'black', age:18, id:1},
		{name:'fere', beltColour:'red',age:12,id:2},
		{name:'ebun',beltColour:'white',age:16,id:4}
	]

	const handleDelete = (id) => {
		// console.log(id)
		//if this returns true, the element will be kept in the array
		//if it returns false, the element will be removed from the array
		people = people.filter((person) => person.id != id);
		//delete a person from people
	}
	const toggleModal = () => {
		showModal = !showModal
	}
	let num = 15;
</script>

<!-- {#if num > 20}
	<p>the number is greater than 20</p>
{:else if num > 5}
	<p>greater than 5</p>
{:else}
	<p>not greater than 5</p>
{/if} -->

<Modal message="my first svelte prop" isPromo={true} showModal={showModal} on:click={toggleModal} />
<main>
	<button on:click={toggleModal}>Open Modal</button>
	<h1>Hello {name}!</h1>
	<p>Welcome to my domain</p>
	<p style="font-size: {age}px">You are {age} years old</p>
	<!-- this input changes even if the age is changed from another source -->
	<!-- <input type="number" on:change={handleInput} value={age} /> -->
	 <input type="text" bind:value={age} />
	 <!-- this bind keyword does the twoway binding all at once -->
	<button on:click={handleClick}>update age</button>
	<!-- this is to loop through a given array -->
	{#each people as person (person.id)}
	<div>
		<h4>{person.name}</h4>
		{#if person.beltColour === 'black'}
			<p>Master Ninja</p>
		{/if}
		<p>{person.age} years old, {person.beltColour} belt.</p>
		<button on:click={() => {handleDelete(person.id)}}>delete</button>
	</div>
	{:else}
	<p>There are no people</p>
	{/each}
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
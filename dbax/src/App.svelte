<script>
	import Modal from'./Modal.svelte'
	import AddPersonForm from './addPersonForm.svelte';
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
	const addPerson = (e) => {
		// console.log(e.detail)
		const person = e.detail
		people = [person, ...people]
	}
</script>

<!-- {#if num > 20}
	<p>the number is greater than 20</p>
{:else if num > 5}
	<p>greater than 5</p>
{:else}
	<p>not greater than 5</p>
{/if} -->

<!-- you can use showModal directly if it is the same name in the modal folder -->
<Modal {showModal} on:click={toggleModal}> 
	<AddPersonForm on:addPerson={addPerson} />
	<!-- <div slot="title">
		<h3>Add a person</h3>
	</div> -->
</Modal>	
<main>
	<!-- once removes it after the first time run -->
	<button on:click|once={toggleModal}>Open Modal</button>
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
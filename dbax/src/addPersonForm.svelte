<script>
    let name;
    let beltColour, age;
    // let fighting = false;
    // let sneaking = false;
    // let running = false;
    let skills = []

    const handleSubmit = () => {
        console.log(name,beltColour,age, skills);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="name" bind:value={name}/>
    <input type="number" placeholder="age" bind:value={age} />
    <!-- you can bind more than values, you can also bind other things like checked -->
    <label>Skills:</label>
    <!-- <input type="checkbox" bind:checked={fighting}>Fighting<br>
    <input type="checkbox" bind:checked={sneaking}>Sneaking<br>
    <input type="checkbox" bind:checked={running}>Running<br> -->
    <input type="checkbox" bind:group={skills} value="fighting">Fighting<br>
    <input type="checkbox"bind:group={skills} value="sneaking">Sneaking<br>
    <input type="checkbox"bind:group={skills} value="running">Running<br>
    <!-- in this style, every thing that the user checks is added to the array and taken note of -->

    <label>Belt Colour</label>
    <select bind:value={beltColour}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>

    </select>
	<button>Add person</button>
</form>

<style></style>
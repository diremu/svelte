<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Tabs from './shared/Tabs.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte';
	//tabs
	let items = ['Current Polls', 'Add new Poll'];
	let activeItem = 'Current Polls';
	// activeItem = items[0]
	const tabChanger = (e) => {
		activeItem = e.detail;
	}
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChanger}/>
	{#if activeItem===items[0]}
		<div class="currentpolls">Poll list component goes here</div>
	{:else}
		<div class="addpoll"><CreatePollForm /></div>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
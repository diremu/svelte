<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Tabs from './shared/Tabs.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';
	//tabs
	let items = ['Current Polls', 'Add new Poll'];
	let activeItem = 'Current Polls';
	// activeItem = items[0]
	const tabChanger = (e) => {
		activeItem = e.detail;
	}
	// let polls = [
	// 	{
	// 		id: 1,
	// 		question: 'Python or Javascript',
	// 		answerA: 'Python',
	// 		answerB: 'Javascript',
	// 		votesA: 10,
	// 		votesB:15,
	// 	},
	// ]

	const pollAdder = (e) => {
		//to switch back to current polls after adding a new poll
		activeItem = items[0]
	}
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChanger}/>
	{#if activeItem===items[0]}
		<div class="currentpolls">
			<PollList />
		</div>
	{:else}
		<div class="addpoll"><CreatePollForm on:add={pollAdder} /></div>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
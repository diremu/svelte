<script>
    import { fade, slide, scale} from "svelte/transition"
    import { flip } from "svelte/animate"
    import PollStore from "../stores/PollStore.js";
    import PollDetails from "./PollDetails.svelte";
    // import { onMount, onDestroy } from 'svelte';
    export let polls = []; 

    //the subscribe method takes in the data from the store passed as a parameter
    // const unsub = PollStore.subscribe((data) => {
    //     polls = data;
    // })
    // onMount(() => {
    //     //more useful to fetch data from an API before the page is rendered
    //     console.log('mounted')
    // })

    // onDestroy(() => {
    //     console.log('destroyed')
    //     unsub()
    //     //unsubscribes from the store
    // })
</script>

<!-- this will make the pollstore subs and unsubs
    only useful if you want to simply use the data from the store
    otherwise, you use the onMount and onDestroy methods
-->
<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
    <!-- //transition:fade -->
     <!-- |local occurs when an individual one is affected or deleted -->
        <div in:fade out:scale|local animate:flip={{duration: 550}}>
            <!-- this forwards the event to the parent element -->
            <PollDetails {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        /* fr is for fraction */
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px
    }
</style>
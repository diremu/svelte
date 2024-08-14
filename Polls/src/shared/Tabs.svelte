<script>
    export let items;
    export let activeItem;
    // this is to allow you to click on the tabs and send the clicked tab to the app.svelte and update the activeItem
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => {dispatch("tabChange", item)}}>
                <!-- this will apply a conditional class of active if the item is the same as the activeItem -->
                <div class:active={item===activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
    .tabs {
        margin-bottom: 40px;
    }
    li {
        margin: 0 16px;
        font-size: 16px;
        color: #555;
        cursor: pointer;
    }
    ul {
        display: flex;
        justify-content: center;
        padding:0;
        list-style-type: none;
    }
</style>
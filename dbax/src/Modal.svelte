<script>
    //for variables that get their values from outside, you export them first
    export let message = 'Im the default value';
    export let showModal = false
    export let isPromo = false
</script>


{#if showModal}
<!-- this will assign a promo class if what is in the curly braces evaluates to true -->
 <!-- this is called event forwarding -->
    <div class="backdrop" class:promo={isPromo} on:click|self><!--this will apply the onclick event handler only when the div itself is clicked-->
        <div class="modal">
            <p>{message}</p>
        </div>
    </div>
{/if}


<style>
.backdrop {
   width: 100%;
   height: 100%;
   position: fixed;
   background: rgba(0,0,0,0.8); 
}

.modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
}
.promo .modal{
    background: crimson;
    color: white;
}
</style>
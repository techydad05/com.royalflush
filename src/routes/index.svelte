<script>
    import { getProducts, productStore } from "../stores/productStore";
    getProducts();
    let modalOpen = false;
    const images = [
        {
            src: "/IMG_2496.png",
            alt: "open royal flush gummies"
        },
        {
            src: "/IMG_2497.png",
            alt: "closed royal flush gummies"
        },
        {
            src: "/IMG_2505.png",
            alt: "royal flush strawberry cough disposable"
        },
        {
            src: "/IMG_2507.png",
            alt: "royal flush wedding cake disposable"
        },
    ]
    const openImage = (e) => {
        console.log(e.target.src)
        modalOpen = !modalOpen;
    }
</script>
<!-- {#each $productStore as product}
    <img src={product.thumbnail} width="400px" alt={""} />
{/each} -->
<div class="bg-[#070c1b]">
    <video src="/royalflushlogo_new.mp4" width="100%" autoplay playsinline muted></video>
    <div class="carousel carousel-center">
        {#each $productStore as product}
            <div on:click={(e) => openImage(e)} class="carousel-item p-4">
            <img src={product.thumbnail} width="300px" alt={""} />
            </div> 
        {/each}
      </div>
</div>
<div class:modal-open={modalOpen} class="modal">
  <div class="modal-box relative">
    <label on:click={() => modalOpen = false} for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
<h1 class="bg-black text-lg font-bold font-sans text-center">&copy; 2022 royalflush-vip.com All Rights Reserved</h1>

<style>
    video {
        width: 100% !important;
        height: auto !important;
    }
</style>
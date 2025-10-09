<script lang="ts">
    import * as Dialog from "$components/ui/dialog";
    import { onDestroy } from "svelte";
    import { Slider } from "$components/ui/slider";
    import { Button } from "$components/ui/button";

    interface Props {
        userImage: File;
        onCancel: () => void;
        onSubmit: (canvas: HTMLCanvasElement) => void;
    }

    let { userImage, onCancel, onSubmit }: Props = $props();

    let toLoad: Record<string, string> = {
        outline: "/gimCreator/outline.png",
        userMask: "/gimCreator/userMask.png",
        eyes: "/gimCreator/eyes.png",
        bodyMask: "/gimCreator/bodyMask.png",
        blankSpritesheet: "/gimCreator/blankSpritesheet.png",
        leftLegMask: "/gimCreator/leftLegMask.png",
        rightLegMask: "/gimCreator/rightLegMask.png"
    }
    
    let images: Record<string, HTMLImageElement> = {};
    for(let key in toLoad) {
        images[key] = new Image();
        images[key].src = toLoad[key];
        images[key].onload = () => render();
    }

    let offsetX = $state(0);
    let offsetY = $state(0);
    let scale = $state(1);
    let minScale = $state(1);

    let userImg = new Image();
    let imgLoaded = $state(false);
    userImg.src = URL.createObjectURL(userImage);

    onDestroy(() => {
        URL.revokeObjectURL(userImg.src);
    });

    userImg.onload = () => {
        imgLoaded = true;

        // center the image
        offsetX = (500 - userImg.width) / 2;
        offsetY = (500 - userImg.height) / 2;

        // make the image as small as possible while still being over 212x194
        minScale = Math.max(212 / userImg.width, 194 / userImg.height);
        scale = minScale;

        render();
    }

    let canvas: HTMLCanvasElement = $state(null);
    let ctx: CanvasRenderingContext2D;

    $effect(() => {
        if(canvas && !ctx) {
            ctx = canvas.getContext('2d')!;
        }
    });

    let includeEyes = $state(true);
    let isLoading = $state(true);

    let tempCanvas: OffscreenCanvas;
    let tempCtx: OffscreenCanvasRenderingContext2D;

    function render() {
        if(!ctx || !imgLoaded) return;
        isLoading = false;

        for(let key in images) {
            if(!images[key].complete) return;
        }

        if(!tempCanvas) {
            tempCanvas = new OffscreenCanvas(500, 500);
            tempCtx = tempCanvas.getContext("2d")!;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw everything outside the mask at 20% opacity
        ctx.globalAlpha = 0.15;
        ctx.drawImage(userImg, offsetX, offsetY, userImg.width * scale, userImg.height * scale);
        ctx.globalAlpha = 1;

        tempCtx.clearRect(0, 0, 500, 500);
        tempCtx.globalCompositeOperation = "source-over";
        tempCtx.drawImage(images.userMask, (500 - 212) / 2, (500 - 194) / 2, 212, 194);
        tempCtx.globalCompositeOperation = "source-in";
        tempCtx.drawImage(userImg, offsetX, offsetY, userImg.width * scale, userImg.height * scale);

        ctx.drawImage(tempCanvas, 0, 0);
        ctx.drawImage(images.outline, (500 - 212) / 2, (500 - 194) / 2, 212, 194);

        if(includeEyes) {
            ctx.drawImage(images.eyes, (500 - 212) / 2, (500 - 194) / 2, 212, 194);
        }
    }

    let dragging = false;

    function moveInbounds() {
        // clamp it so that the image is always inside the mask
        if(offsetX > (500 - 212) / 2) offsetX = (500 - 212) / 2;
        if(offsetY > (500 - 194) / 2) offsetY = (500 - 194) / 2;
        if(offsetX < 500 - (500 - 212) / 2 - userImg.width * scale) offsetX = 500 - (500 - 212) / 2 - userImg.width * scale;
        if(offsetY < 500 - (500 - 194) / 2 - userImg.height * scale) offsetY = 500 - (500 - 194) / 2 - userImg.height * scale;
    }

    function onMouseMove(e: MouseEvent) {
        if(!dragging) return;
        offsetX += e.movementX;
        offsetY += e.movementY;

        moveInbounds();
        render();
    }

    function createOutput() {
        let outputCanvas = document.createElement('canvas');
        outputCanvas.width = 1024;
        outputCanvas.height = 832;
        let outputCtx = outputCanvas.getContext('2d')!;

        // draw the user image to the temp canvas
        tempCtx.globalCompositeOperation = 'source-over';
        tempCtx.clearRect(0, 0, 500, 500);
        tempCtx.drawImage(images.bodyMask, (500 - 212) / 2, (500 - 194) / 2, 212, 194);
        tempCtx.globalCompositeOperation = 'source-in';
        tempCtx.drawImage(userImg, offsetX, offsetY, userImg.width * scale, userImg.height * scale);

        // copy the body onto the spritesheet
        outputCtx.drawImage(tempCanvas, 70, 263);

        tempCtx.globalCompositeOperation = "copy";
        tempCtx.drawImage(images.leftLegMask, (500 - 212) / 2, (500 - 194) / 2, 212, 194);
        tempCtx.globalCompositeOperation = "source-in";
        tempCtx.drawImage(userImg, offsetX, offsetY, userImg.width * scale, userImg.height * scale);

        outputCtx.drawImage(tempCanvas, 53, 70);

        tempCtx.globalCompositeOperation = "copy";
        tempCtx.drawImage(images.rightLegMask, (500 - 212) / 2, (500 - 194) / 2, 212, 194);
        tempCtx.globalCompositeOperation = "source-in";
        tempCtx.drawImage(userImg, offsetX, offsetY, userImg.width * scale, userImg.height * scale);

        outputCtx.drawImage(tempCanvas, 395, 231);
        outputCtx.drawImage(images.blankSpritesheet, 0, 0);
        
        if(!includeEyes) {
            outputCtx.clearRect(0, 0, 1024, 63);
        }

        return outputCanvas;
    }
</script>

<svelte:window onmouseup={() => dragging = false} onmousemove={onMouseMove} />

<Dialog.Root open>
    <Dialog.Content class="!w-[590px] !max-w-full"
        escapeKeydownBehavior="ignore" interactOutsideBehavior="ignore">
        <div class="bg-secondary p-5 w-[540px] h-[540px]">
            {#if isLoading}
                <h1 class="w-full text-3xl text-center">
                    Loading...
                </h1>
            {/if}
            <canvas width={500} height={500} bind:this={canvas} class:hidden={isLoading}
            onmousedown={() => dragging = true}></canvas>
        </div>
        {#if imgLoaded}
            <div class="flex items-center gap-3">
                Show eyes?
                <input type="checkbox" class="w-6 h-6"
                bind:checked={includeEyes} onchange={render} />
            </div>
            <div class="flex items-center justify-between">
                Small
                <Slider type="single" min={minScale} max={minScale * 3.5} step={0.001} class="w-[80%]" 
                    onValueChange={(val) => {
                    let ratio = val / scale;

                    // Calculate the new offset to keep the fixed point in the same position relative to the image
                    offsetX = 250 - (250 - offsetX) * ratio;
                    offsetY = 250 - (250 - offsetY) * ratio;

                    // Update the image scale
                    scale = val;

                    moveInbounds();
                    render();
                }} />
                Large
            </div>
            <Dialog.Footer>
                <Button type="reset" onclick={onCancel}>Cancel</Button>
                <Button type="submit" onclick={() => onSubmit(createOutput())}>Confirm</Button>
            </Dialog.Footer>
        {/if}
    </Dialog.Content>
</Dialog.Root>
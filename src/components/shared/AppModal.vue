<template>
    <div id="dialogModal" class="modal">
        <div class="modal-content">
            <span class="close-icon" @click='closeModal'>&times;</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { close } from '@/helper/toggleModal';

export default {
    setup() {
        let closeModal = () => {
            close()
        }

        return {
            closeModal
        }
    }
}
</script>

<style scoped>
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.597);
}

.modal-content {
    padding: 50px;
    width: auto;
    height: auto;
    background-color: white;
    border-radius: 26px;
}

.close-icon {
    color: #3b82f6;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
}

.close-icon:hover {
    color: #bbbbbb;
    text-decoration: none;
    cursor: pointer;
}

.open {
    display: flex;
    justify-content: center !important;
    align-items: start;
}

h2,
h6 {
    color: #3b82f6;
}

h5 {
    color: #000000;
}
</style>
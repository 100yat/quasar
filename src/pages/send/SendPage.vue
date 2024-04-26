<script>
</script>
<template>
    <div class="wrapper">
        <div class="inputHolder" style="  width: 700px; height: 300px; ">
            <q-item class="text-h6">{{ $t('titles.send') }}</q-item>
            <q-input filled :label="$t('placeholder.p4')" label-color="white" @update:model-value="update"
                class="q-mt-md" style="width: 45%;" />
            <q-input filled :label="$t('placeholder.p2')" label-color="white" @update:model-value="update"
                class="q-mt-md" style="width: 45%;" />
            <q-input filled :label="$t('placeholder.p3')" label-color="white" @update:model-value="update"
                class="q-mt-md" style="width: 45%;" />

            <q-btn color="primary" style="margin-top: 20px; border-radius: 4px;">{{ $t('send') }}</q-btn>

        </div>
    </div>

</template>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

.inputHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>

<template>
     <div class="mt-10">
           <small>Toplam {{courseCount}} adet kurs vardır</small>
           <br>
           <small> kaydedilmiş {{saveCount}} adet kurs vardır</small>
           <br>
           <small>kaydedilmemiş {{notsaveCount}} adet kurs vardır</small>

    </div>
</template>

<script>
export default {
    props:["courseCount","saveCount","notsaveCount"]
}
</script>

<style >

</style>
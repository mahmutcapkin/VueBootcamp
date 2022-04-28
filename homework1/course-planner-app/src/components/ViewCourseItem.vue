<template>
     <li class="course-item list-item" :class="item.status? 'bg-success':'bg-danger' ">
              <span>{{item.text}}</span>
              <input type="checkbox" @change="$emit('change-status',item)"/>
    </li>
    <!-- <li>
        <span>
          {{item}}
        </span>
    </li> -->
</template>

<script>
export default {
    props:["item"],
}
</script>
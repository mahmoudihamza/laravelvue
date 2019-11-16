<template>

        <header class="top-header">
            <span><i class="glyphicon glyphicon-th-large" ></i> Control Panel</span>
            <span><i class="glyphicon glyphicon-user"></i> ADMIN <a class="glyphicon glyphicon-off logout-btn"></a> </span>
        </header>


</template>

<script>
    export default {
        name: 'TopHeader',

    }
</script>

<style>
    .top-header {
        width : 100%;
        height : 40px;
        background-color : #2980b9;
        border-bottom: #333;
        position : relative;
        margin-bottom : 10px;
    }


    .top-header span:first-child {
        color : #fff;
        position : absolute;
        left : 10px;
        top : 8px;
        font-size : 18px;
    }

    .top-header span:last-child {
        color : #fff;
        position : absolute;
        top : 10px;
        right : 20px;
        font-size : 14px;
    }

    .logout-btn {
        color : #fff;
        cursor : pointer;
    }
    .logout-btn:hover {
        color : red;
    }
</style>

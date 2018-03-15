<template>
    <Collapse >
        <Panel v-for="game in games" :key="game.name">
            {{ game.name }} <Icon type="ios-navigate"></Icon>  <span style="float:right">next:10:00:00</span>
            <p slot="content"> description: {{ game.description }} </p>
            <p slot="content"> answer: {{ game.answerInfo.answer }} </p>
        </Panel>
    </Collapse >
</template>

<script>
    export default {
        props: {
            games: {
                type: Array,
                default: () => []
            }
        },
        methods:{
            updateInfo: function(){
                let timer = setInterval(
                    function(){
                        //todo: change the info
                    },
                    this.gameInfo.timerInverval);
            }
        }
    }
</script>
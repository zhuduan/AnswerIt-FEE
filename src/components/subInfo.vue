<template>
    <Collapse>
        <Panel v-for="game in gameConfigs" :key="game.name">
            {{ game.name }} <Icon type="ios-navigate"></Icon>  <span style="float:right">next:10:00:00</span>
            <p slot="content"> description: {{ game.description }} </p>
            <p slot="content"> answer:  </p>
            <p slot="content"> <Button type="info" @click="subcribeThis(game.name)">Info</Button> </p>
        </Panel>
    </Collapse>
</template>

<script>
    let currentGameKey = "";
    
    export default {
        props: {
            gameConfigs: {
                type: Array,
                default: () => []
            },
            showInfo: {
                type: Function
            },
            currentGameInfo: {
                type: Object,
                default: () => { return { name:"", answerInfo: { question:"", answer:"" } } }
            }
            
        },
        methods:{
            updateInfo: function(){
                let timer = setInterval(
                    function(){
                        //todo: change the info
                    },
                    this.gameInfo.timerInverval);
            },
            subcribeThis: function(panelKey){
                this.currentGameKey = panelKey;
                alert("key is: " + this.currentGameKey);
            }
        }
    }
</script>
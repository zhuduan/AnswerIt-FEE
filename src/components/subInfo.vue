<template>
    <Collapse>
        <Panel v-for="game in gameConfigs" :key="game.name" :id="game.name">
            {{ game.name }} <Icon type="ios-navigate"></Icon>  <span style="float:right" name="time">next:10:00:00</span>
            <p slot="content"> description: {{ game.description }} </p>
            <p slot="content"> answer:   </p>
            <p slot="content"> <Button type="info" @click="subcribeThis(game.name)">Info</Button> </p>
            <p slot="content"> <Button type="info" @click="updateInfo()">Update</Button> </p>
        </Panel>
    </Collapse>
</template>

<script>
    let currentGameKey = "";
    let dispatchEvent = false;
    let currentQuestion = "hello";
    let currentAnswer = "wolrd";
    
    export default {
        props: {
            gameConfigs: {
                type: Array,
                default: () => []
            },
            showInfo: {
                type: Function
            }
        },
        data: function(){
            return {
                currentConfigs: null
            }
        },
        // computed: {
        //     normalizedConfigs: function () {
        //         return this.gameConfigs;
        //     }
        // },
        created(){
            this.currentConfigs = this.gameConfigs;
        },
        mounted(){
            this.updateInfo(this.gameConfigs);
        },
        methods:{
            // we should pass the value to the method rather than use the props, for in method to get the props may hava problems
            updateInfo: function(configs){
                let timer = setInterval(
                    function(){
                        // no config info, should not do update
                        if ( !configs ) {
                            console.log("no info for " + configs)
                            return;
                        }

                        // todo: change the info
                        for ( let value of configs ){
                            let date = new Date();
                            let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                            let nextTime = currentTime;
                            let beginFlag = false;
                            for( let s of value.schedule ) {
                                let tempStart = s.startTime;
                                let tempEnd = s.endTime;
                                if ( tempStart<=currentTime && currentTime<=tempEnd ){
                                    // todo: change the status to begin, and start a interval to get the question and answer
                                    nextTime = "ing";
                                    beginFlag = true;
                                    break;
                                } else if ( nextTime===currentTime && nextTime<=tempStart ) {
                                    nextTime = tempStart;
                                    break;
                                }
                            }
                            if ( nextTime===currentTime ){
                                nextTime= "暂无信息";
                            }

                            // todo: change the status
                            let panelElement = document.getElementById(value.name);
                            for ( let spanElement of panelElement.getElementsByTagName('span') ){
                                if ( spanElement.getAttribute('name')==="time" ){
                                    spanElement.textContent = nextTime;
                                    if ( beginFlag ) {
                                        spanElement.setAttribute("style", "float:right; color:red");
                                    } else {
                                        spanElement.setAttribute("style", "float:right; color:black");
                                    }
                                }
                            }

                            // start get question task
                        }
                    },
                    5000);
            },
            notify: function(){
                let currentGameInfo = {
                    name: this.currentGameKey,
                    question: this.currentQuestion,
                    answer: this.currentAnswer
                }
                this.$emit('new-answer-info', currentGameInfo);
            },
            subcribeThis: function(panelKey){
                this.currentGameKey = panelKey;
                this.dispatchEvent = true;
                this.currentQuestion = panelKey;
                this.currentAnswer = panelKey;
                //alert('key: ' + this.currentGameKey );
                this.notify();
            }
        }
    }
</script>
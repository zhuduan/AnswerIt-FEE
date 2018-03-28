<template>
    <Collapse>
        <Panel v-for="game in gameConfigs" :key="game.name" :id="game.name">
            {{ game.name }}   <span style="float:right" name="time"><Icon type="ios-navigate"></Icon>&nbsp&nbsp<span>next:10:00:00</span></span>
            <p slot="content">
                <Tooltip :content="game.description">
                    <Card :bordered="false" style="width: 100%">
                        <p slot="title">
                            <Row>
                                <Col span="18"> <span :id="game.name + 'question'"> default question: xxxx </span></Col>
                                <Col span="6"> <Button @click="subcribeThis(game.name)" type="ghost" shape="circle" size="small">显示搜索结果</Button> </Col>
                            </Row>
                        </p>
                        <p>
                            <span :id="game.name + 'answer'"> default answer </span>
                        </p>
                    </Card>
                </Tooltip>
            </p>
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

            }
        },
        mounted(){
            this.updateInfo(this.gameConfigs);
            let timer = setInterval(
                this.updateInfo(this.gameConfigs),
                1000);
        },
        methods:{
            // we should pass the value to the method rather than use the props, for in method to get the props may hava problems
            updateInfo: function(configs){
                // no config info, should not do update
                if ( !configs ) {
                    console.log("no info for " + configs)
                    return;
                }

                //  check if should begin the game, and the next begin time
                for ( let value of configs ) {
                    let date = new Date();
                    let currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                    let nextTime = currentTime;
                    let beginFlag = false;
                    for (let s of value.schedule) {
                        let tempStart = s.startTime;
                        let tempEnd = s.endTime;
                        if (tempStart <= currentTime && currentTime <= tempEnd) {
                            nextTime = "答题ing";
                            beginFlag = true;
                            break;
                        } else if (nextTime === currentTime && nextTime <= tempStart) {
                            nextTime = tempStart;
                            break;
                        }
                    }
                    if (nextTime === currentTime) {
                        nextTime = "暂无信息";
                    }

                    // update the info to show time starting info
                    let panelElement = document.getElementById(value.name);
                    for (let spanElement of panelElement.getElementsByTagName('span')) {
                        if (spanElement.getAttribute('name') === "time") {
                            spanElement.getElementsByTagName('span')[0].textContent = nextTime;
                            if (beginFlag) {
                                spanElement.getElementsByTagName('span')[0].setAttribute("style", "color:red");
                                spanElement.getElementsByTagName('i')[0].setAttribute("class", "ivu-icon ivu-icon-ios-lightbulb-outline");
                            } else {
                                spanElement.getElementsByTagName('span')[0].setAttribute("style", "color:black");
                                spanElement.getElementsByTagName('i')[0].setAttribute("class", "ivu-icon ivu-icon-ios-lightbulb");
                            }
                        }
                    }

                    // when game started, post to server to get the game info
                    if (beginFlag) {
                        //  post to get info
                        let result = { name:'xxx', quetion:'hello', answer:'world' };

                        document.getElementById(value.name + 'question').textContent = result.quetion;
                        document.getElementById(value.name + 'answer').textContent = result.answer;
                    }
                }
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
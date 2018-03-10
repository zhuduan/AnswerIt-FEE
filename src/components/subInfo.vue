<template>
    <Collapse>
        <Panel>
            {{ gameInfo.name }} <Icon type="ios-navigate"></Icon>  <span style="float:right">next:10:00:00</span>
            <p slot="content"> description: {{ gameInfo.description }} </p>
            <p slot="content"> answer: {{ answerInfo.answer }} </p>
        </Panel>
        <Panel>
            {{ gameInfo.name }} <Icon type="ios-navigate"></Icon>
            <p slot="content"> {{ gameInfo.description }} </p>
            <p slot="content"> {{ answerInfo.answer }} </p>
        </Panel>
    </Collapse >
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            gameInfo: {
                name: '',
                description: '',
                timerInverval: 1000,
                schedule: [
                    {
                        startTime: '10:00:00'
                    }
                ]
            },
            answerInfo :{
                question: 'this is question',
                answer: 'this is answer'
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
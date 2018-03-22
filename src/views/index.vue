<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="home">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="explanation">
                            <Icon type="ios-keypad"></Icon>
                            说明
                        </MenuItem>
                        <MenuItem name="reward">
                            <Icon type="ios-analytics"></Icon>
                            赞赏
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '12px 12px', minHeight: '480px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff', minWidth:'40%'}">
                            <subInfo v-bind:gameConfigs="gameConfigs" v-bind:showInfo="testInfo" v-bind:currentGameInfo.sync="currentGameInfo"></subInfo>
                            <announcementInfo></announcementInfo>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '480px', background: '#fff'}">
                            <Tag type="dot" color="green" style="float:right">标签一</Tag>
                            <iframe id="contentFrame" src="https://www.baidu.com/s?wd=jetty" height="90%" width="100%" overflow-x='hidden'>
                            </iframe>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Layout :style="{padding: '0 50px', margin: '16px 0'}">
                <Content :style="{padding: '24px 0', minHeight: '120px', background: '#fff'}">
                    some extra info here

                </Content>
            </Layout>
            <Footer class="layout-footer-center">2018-now &copy; Answer It</Footer>
        </Layout>
    </div>
</template>
<script>
    import subInfo from './../components/subInfo'
    import announcementInfo from './../components/announcementInfo'

    export default {
        data() {
            return {
                gameConfigs: [
                    {
                        name: '冲顶',
                        description: 'this parent Info',
                        timerInverval: 1000,
                        schedule: [
                            {
                                startTime: '10:00:00',
                                endTime: '10:30:00'
                            }
                        ]
                    },
                    {
                        name: '冲顶2',
                        description: 'this parent Info2',
                        timerInverval: 1000,
                        schedule: [
                            {
                                startTime: '10:00:00',
                                endTime: '10:30:00'
                            }
                        ]
                    }
                ],
                currentGameInfo: {
                    name: "this is subscriber",
                    answerInfo: {
                        question: "this is question",
                        answer: "this is answer"
                    }
                },
                otherInfo: true
            }
        },
        components: {
            subInfo: subInfo,
            announcementInfo: announcementInfo
        },
        methods: {
            showSearchResult: function(searchContent){
                if ( !searchContent || 0 === searchContent.length ){
                    return;
                }
                let showUrl = 'https://www.baidu.com/s?wd=' + searchContent;
                let frame = document.getElementById('contentFrame');
                frame.src = showUrl;
            },
            testInfo: function(){
                alert("input is anything");
            }
        }
    }
</script>

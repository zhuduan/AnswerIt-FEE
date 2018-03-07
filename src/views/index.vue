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
                <Content :style="{padding: '24px 0', minHeight: '480px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff', minWidth:'380px'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="PeekMeeting">
                                    <template slot="title">
                                        <Icon type="lightbulb" color="#000000"></Icon>
                                        <!-- TODO: use component to show the info
                                                    1. a counter down to show the begin time
                                                    2. when start, change the Icon's color -->
                                        冲顶
                                    </template>
                                    <!-- TODO: 1. whether should adjust the show style here ( the info may not show as this way )
                                               2. when click, should show the details in right -->
                                    <MenuItem name="PeekMeetingAns">Some answers</MenuItem>
                                    <MenuItem name="PeekMeetingInfo">Info</MenuItem>
                                </Submenu>
                                <Submenu name="MillionHero">
                                    <template slot="title">
                                        <Icon type="lightbulb" color="#000000"></Icon>
                                        百万
                                    </template>
                                    <MenuItem name="MillionHeroAns">Answers</MenuItem>
                                    <MenuItem name="MillionHeroInfo">Some Info</MenuItem>
                                </Submenu>
                                <Submenu name="MillionHero">
                                    <template slot="title">
                                        <Icon type="lightbulb" color="#000000"></Icon>
                                        百万
                                    </template>
                                    <MenuItem name="MillionHeroAns">Answers</MenuItem>
                                    <MenuItem name="MillionHeroInfo">Some Info</MenuItem>
                                </Submenu>
                                <Submenu name="MillionHero">
                                    <template slot="title">
                                        <Icon type="lightbulb" color="#000000"></Icon>
                                        百万
                                    </template>
                                    <MenuItem name="MillionHeroAns">Answers</MenuItem>
                                    <MenuItem name="MillionHeroInfo">Some Info</MenuItem>
                                </Submenu>
                                <Submenu name="MillionHero">
                                    <template slot="title">
                                        <Icon type="lightbulb" color="#000000"></Icon>
                                        百万
                                    </template>
                                    <MenuItem name="MillionHeroAns">Answers</MenuItem>
                                    <MenuItem name="MillionHeroInfo">Some Info</MenuItem>
                                </Submenu>
                                
                                <div style="background:#eee; padding: 20px; margin-top: 20px;">
                                    <Card :bordered="false">
                                        <p slot="title">公告</p>
                                        <p> Enjoy~ </p>
                                        <p>
                                            <Icon type="android-mail"></Icon> timeline9001@gmail.com
                                        </p>
                                    </Card>
                                </div>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '480px', background: '#fff'}">
                            <!-- todo: use component to do the iframe -->
                            <iframe src="https://www.baidu.com/s?wd=%E4%BA%91%E5%8D%97%E7%9A%84%E7%9C%81%E8%8A%B1" height="100%" width="100%" overflow-y='scroll' overflow-x='hidden'></iframe>
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
</div>
</template>
<script>
    export default {
        
    }
</script>

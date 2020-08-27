<template>
       <baidu-map
               class="map"
               :center="center"
               :zoom="zoom"
               @ready="handler"
               :scroll-wheel-zoom="true"

       >
           <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 200, height: 200}}">
               <bm-label content="信息产业园" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 110, height: 120}"/>
           </bm-marker>
           <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true" ></bm-geolocation>
       </baidu-map>
</template>
<script>
    export default {
        data () {
            return {
                center: {lng: 118.08052, lat: 24.957241},
                zoom: 15
            }
        },
        methods: {
            handler ({BMap, map}) {
                // console.log(BMap, map);
                this.center.lng = 118.08052;
                this.center.lat = 24.957241;
                this.zoom = 16;
            }


        }

    }
</script>
<style scoped lang="less">
    .map {
        width: 100%;
        height: 400px;
    }

    /deep/.anchorBL{
        margin-bottom: 120px;
        img{
            display: none;
        }

    }

</style>

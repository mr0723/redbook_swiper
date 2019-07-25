var app = getApp();
Page({    
    data: {        
        img_data: [           {                
                "title": "图片一",
                "img_url": "https://cdn.petlemon.com/static/images/cat.png",
                          
            },
            {                
                "title": "图片二",
              "img_url": "https://cdn.petlemon.com/static/images/cat1.png"            
            },
            {                
                "title": "图片三",
              "img_url": "https://cdn.petlemon.com/static/images/cat2.png"            
            },
            {                
                "title": "图片四",
              "img_url": "https://cdn.petlemon.com/static/images/cat.png"            
            },
            {                
                "title": "图片五",
              "img_url": "https://cdn.petlemon.com/static/images/cat1.png"            
            },
            {
                "title": "图片六",
              "img_url": "https://cdn.petlemon.com/static/images/cat3.png"            
            },
            {
                "title": "图片七",
              "img_url": "https://cdn.petlemon.com/static/images/cat1.png"
            },
            // {
            //     "title": "图片八",
            //     "img_url": "https://cdn.petlemon.com/static/images/cat3.png"
            // },
            // {
            //     "title": "图片八",
            //     "img_url": "https://cdn.petlemon.com/static/images/cat2.png"
            // }        
        ],
        swiper_data_num: 0,
        swiperCurrent: 0,
        swiper_style: 1,
        fourShow: 'none',
        fiveShow: 'none' ,
        sixShow: 'none',
        sevenShow: 'none',
        eightShow: 'none',
        nineShow: 'none',
        maskshow: 'none',
        img_data1: 3,
        img_data2: 3,
    },
    onLoad: function() {        
        this.setData({
            swiper_data_num: this.data.img_data.length
        });    
    },
    swiperChange: function(e) {
        this.setData({
            swiperCurrent: e.detail.current
        });
        // 9张轮播图的效果
        if (this.data.swiper_data_num == 9) {
            if (this.data.swiperCurrent < 3) {
                this.setData({
                    fiveShow: 'block' ,
                    maskshow: 'none',
                    nineShow: 'none',
                })
            } else if (this.data.swiperCurrent >= 3 && this.data.swiperCurrent < 6) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'block',
                    nineShow: 'none'
                })
            } else if (this.data.swiperCurrent >= 6) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'none',
                    nineShow: 'block'
                })
            }
            // 8张轮播图的效果
        } else if (this.data.swiper_data_num == 8) {
            if (this.data.swiperCurrent < 3) {
                this.setData({
                    fiveShow: 'block' ,
                    maskshow: 'none',
                    eightShow: 'none',
                })
            } else if (this.data.swiperCurrent >= 3 && this.data.swiperCurrent < 5) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'block',
                    eightShow: 'none'
                })
            } else if (this.data.swiperCurrent >= 5) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'none',
                    eightShow: 'block'
                })
            }
            // 7张轮播图的效果
        } else if (this.data.swiper_data_num == 7) {
            if (this.data.swiperCurrent < 3) {
                this.setData({
                    fiveShow: 'block' ,
                    maskshow: 'none',
                    sevenShow: 'none'
                })
            } else if (this.data.swiperCurrent >= 3 && this.data.swiperCurrent < 4) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'block',
                    sevenShow: 'none'
                })
            } else if (this.data.swiperCurrent >= 4) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'none',
                    sevenShow: 'block'
                })
            }
            // 6张轮播图的效果
        } else if (this.data.swiper_data_num == 6) {
            if (this.data.swiperCurrent < 3) {
                this.setData({
                    fiveShow: 'block' ,
                    maskshow: 'none',
                    sixShow: 'none'
                })
            } else if (this.data.swiperCurrent >= 3) {
                this.setData({
                    fiveShow: 'none' ,
                    maskshow: 'none',
                    sixShow: 'block'
                })
            }
            // 5张轮播图以内的效果
        } else if (this.data.swiper_data_num <= 5) {
            this.setData({
                fiveShow: 'none' ,
                sixShow: 'none',
                sevenShow: 'none',
                eightShow: 'none',
                nineShow: 'none',
                maskshow: 'none',
                fourShow: 'block'
            })
        }

    },
    onShow: function() {
        if (this.data.swiper_data_num<=5){
            this.setData({
                fiveShow: 'none' ,
                sixShow: 'none',
                sevenShow: 'none',
                eightShow: 'none',
                nineShow: 'none',
                maskshow: 'none',
                fourShow: 'block'
            })
        }else{
            this.setData({
                fiveShow: 'block' ,
                sixShow: 'none',
                sevenShow: 'none',
                eightShow: 'none',
                nineShow: 'none',
                maskshow: 'none',
                fourShow: 'none'
            })
        }
    },

})
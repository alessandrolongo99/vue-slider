const slides = [
    {
        image: './img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: './img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: './img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: './img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: './img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue({
    el: '#root',
    data: {
        index: 0,
        array: slides,
        autoPlay: null,
    },
    methods: {
        prevSlide: function () {
            this.index--;
            if (this.index < 0) {
                this.index = this.array.length - 1;
            }
        },
        nextSlide: function () {
            this.index++;
            if (this.index > this.array.length - 1) {
                this.index = 0;
            }
        },
        changeSlide: function (clickIndex) {
            this.index = clickIndex;
        },
        startAutoPlay: function () {
            if (this.autoPlay === null) {
                this.autoPlay = setInterval(() => {
                    this.nextSlide();
                }, 2000);
            }
        },
        stopAutoPlay: function () {
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        },
    },
    created() {
        this.startAutoPlay();
    }
});
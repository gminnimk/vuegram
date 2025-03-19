import {defineStore} from 'pinia'
import postData from "@/assets/postData.js"
import axios from "axios"

export const useMainStore = defineStore('main', {
    state: () => ({
        step: 0,
        post: postData,
        amount: 0,
        imgUrl: '',
        selectedFilter: '',
        write: '',
        likes: 0,
        liked: false
    }),
    actions: {
        async more() {
            try {
                const res =
                    await axios
                        .get(`https://codingapple1.github.io/vue/more${this.amount}.json`)
                        .then((res) => {
                            this.post.push(res.data)
                            console.log(res.data)
                            this.amount++
                        })
            } catch (error) {
                console.log('데이터 추가 실패', error)
            }
        },
        uploadImage(e) {
            let file = e.target.files
            let url = URL.createObjectURL(file[0])
            console.log(url)
            this.imgUrl = url
            this.step++
        },
        publish() {
            const currentFilter = this.selectedFilter

            const myPost = {
                name: "Kim Hyun",
                userImage: "https://picsum.photos/100?random=3",
                postImage: this.imgUrl,
                likes: 0,
                date: "May 15",
                liked: false,
                content: this.write,
                filter: currentFilter
            }
            this.post.unshift(myPost)
            this.step = 0
        },
        setSelectFilter(filter) {
            this.selectedFilter = filter
            console.log("선택된 필터:", filter)
        },
        setWriteContent(content) {
            this.write = content
        },
        increaseStep() {
            this.step++
        },
        cancel() {
            this.step--
        },
        increaseLikes() {
            if (this.liked !== true) {
                this.likes++
                this.liked = true
            } else {
                this.likes--
                this.liked = false
            }
        },
    }
})

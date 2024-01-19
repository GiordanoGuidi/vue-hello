console.log('Vue ok', Vue)

const {createApp}= Vue;
const app = createApp({
    data(){
        return{
            name:'Giordano',
            lastName:'Guidi',
            role:'WebDeveloper'
        }
    }
});
app.mount('#root');
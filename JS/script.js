console.log('Vue ok', Vue)

const {createApp}= Vue;
const app = createApp({
    data(){
        return{
            name:'Giordano',
            lastName:'Guidi',
            role:'WebDeveloper',
            logo:'https://brescia.unicusano.it/wp-content/uploads/2020/10/come-diventare-programmatore-freelance.jpg'
        }
    }
});
app.mount('#root');
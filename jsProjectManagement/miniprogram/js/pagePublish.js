module.exports = {
    inputChange(e){
        console.log('--')
        let id = e.target.id,
            val = e.detail.value,
            newObj = {};

        newObj[id] = val;

        //this 指向page对象
        this.setData(newObj);
    }
};
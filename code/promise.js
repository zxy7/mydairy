class PromiseA {
    status = 'pending'
    result = null
    resloveCallBack =[]
    rejectCallBack =[]

    resolve(result){
        setTimeout(()=>{
            if(this.status==='pending'){
                this.status = 'fullfilled'
                this.result = result
                console.log(result)
                this.resloveCallBack.forEach(fn=>{
                    fn(result)
                })
            }
        })

    }
    reject(result){
        setTimeout(()=>{
            if(this.status==='pending'){
                this.status = 'reject'
                this.result = result
                console.log(result)
                this.rejectCallBack.forEach(fn=>{
                    fn(result)
                })
            }
        })
    }

    then(onResolve, onReject){
        return new PromiseA((reslove,reject)=>{
            onResolve= typeof onResolve === 'function'? onResolve: ()=>{}
            onReject= typeof onReject === 'function'? onReject: (error)=> {throw error}
            try{
                if(this.status ==="fullfilled"){
                    setTimeout(()=>{
                        onResolve(this.result)
                    })
                }
                if(this.status ==="reject"){
                    setTimeout(()=>{
                        onReject(this.result)
                    })
                }
                if(this.status ==="pending"){
                    this.rejectCallBack.push(onReject)
                    this.resloveCallBack.push(onResolve)
                }
            }catch(error){
                console.log(error,10)
                this.reject(error)
            }
        })

    }

    constructor(fn){
        try{
            fn(this.resolve.bind(this),this.reject.bind(this))
        }
        catch(error){
            console.log(error)
            this.reject(error)
        }
    }
}

console.log(0)
new PromiseA((reslove,reject)=>{
    console.log(1)
    setTimeout(()=>{
        reslove('reslove')
        reject('reject')
    })
}).then(
    (result)=>{console.log(result, 5)
        setTimeout(()=>{
        })},
    (error)=>{console.log(error,6)}
).then(
    (result)=>{console.log(result, 7)},
    (error)=>{console.log(error,8)}
)

setTimeout(()=>{
    console.log(3)
})

console.log(4)
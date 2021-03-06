module.exports = { 
    //Calcula quantos dias restantes
    remainingDays(job){
        //ajuste jobs
        //calculo de tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
        
        const timeDiffInMs = dueDateInMs -  Date.now()
    
        //transformar milli em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
        //Retorna restam X dias
        return dayDiff
    },
    calculeteBudget: (job, valueHour) => valueHour * job["total-hours"]
}
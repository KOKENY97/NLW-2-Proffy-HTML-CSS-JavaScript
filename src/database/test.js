const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //INSERIR DADOS

    proffyValue = {
        name: "Batman", 
        avatar: "https://i.etsystatic.com/7070980/r/il/6e8d6a/1265471719/il_570xN.1265471719_h4ps.jpg", 
        whatsapp: "012345679", 
        bio: "Perito em lidar com traumas de infância.<br><br>Apaixonado por mudar a vida das pessoas através da orientação, sobre como lidar com a perda dos pais. Especializado na reabilitação de jovens garotos.", 
    }

    classValue = {
        subject: 1, 
        cost: "R$20,00", 
        //O PROFFY id VIRA PELO BANCO DE DADOS
    }

    classScheduleValues = [
        //class_id VIRA PELO BANCO DE DADOS APOS CADASTRARMOS A AULA
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //CONSULTAR DADOS INSERIDOS

    //TODOS OS PROFFYS
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //CONSULTAR AS CLASSES DE UM DETERMINADO PROFESSOR E TRAZER JUNTO OS DADOS DO PROFESSOR
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // O HORARIO QUE A PESSOA TRABALHA, POR EXEMPLO, É DAS 8h ATÉ AS 18h - NESTE CASO, O time_from (8h) PRECISA SER MENOR OU IGUAL AO HORARIO SOLICITADO
    //O time_to PRECISA SER ACIMA
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > 520
    `)

    // console.log(selectClassesSchedules)
})

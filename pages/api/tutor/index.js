const { connectToDatabase } = require('../../../database')


export default async (req, res) => {

    const method = req.method

    switch(method) {
        case 'POST':
            let data = req.body
            await addTutor(data)

            res.status(200).json({ status: 'success' })
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const addTutor = async (data) => {
    const { db } =  await connectToDatabase()
    const tutorsObj = db.collection("tutors")
    await tutorsObj.insertOne(data)
}
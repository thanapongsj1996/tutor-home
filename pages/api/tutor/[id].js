const { ObjectId } = require('mongodb')
const { connectToDatabase } = require('../../../database')

export default async (req, res) => {
    const method = req.method
    const id = req.query.id

    switch(method) {
      case 'GET':
          const tutorsResponse = await getTutorByID(id)
          res.status(200).json({ tutor: tutorsResponse })
          break
      case 'PUT':
          const data = req.body
          await updateTutorByID(id, data)
          res.status(200).json({ status: 'success' })
          break
      case 'DELETE':
          await deleteTutorByID(id)
          res.status(200).json({ status: 'success' })
          break
      default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
          res.status(405).end(`Method ${method} Not Allowed`)
  }
}

const getCollection = async () => {
    const { db } =  await connectToDatabase()
    const tutorsObj = db.collection("tutors")
    return tutorsObj
}

const getTutorByID = async (id) => {
    const tutorsObj = await getCollection()
    const tutorsResponse = await tutorsObj.findOne({ _id: ObjectId(id) })
    return tutorsResponse
}
const updateTutorByID = async (id, data) => {
    const tutorsObj = await getCollection()
    await tutorsObj.updateOne({ _id: ObjectId(id) }, { $set: data })
}
const deleteTutorByID = async (id) => {
    const tutorsObj = await getCollection()
    await tutorsObj.deleteOne({ _id: ObjectId(id) })
}

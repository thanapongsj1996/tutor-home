const { connectToDatabase } = require('../../../database')


export default async (req, res) => {
    const { db } =  await connectToDatabase()
    const tutorsObj = db.collection("tutors")
    const tutors = await tutorsObj.find()
    const tutorsResponse = []
    await tutors.forEach(tutor => tutorsResponse.push(tutor))

    res.status(200).json({ tutors: tutorsResponse })
}

    /*
      1./api/articles [GET]
      show all

      2./api/article/[id] [GET]
      show article by id

      3./api/article [POST]
      create article

      4./api/article/[id] [PUT]
      update article by id

      5./api/article/[id] [DELETE]
      delete article by id

    */

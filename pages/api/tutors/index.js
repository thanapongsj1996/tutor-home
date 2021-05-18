const { MongoClient } = require("mongodb")
const uri = process.env.MONGO_DB_CONNECTION
const client = new MongoClient(uri)


export default async (req, res) => {
    await client.connect()
    const database = client.db("tutor-home")
    const tutorsObj = database.collection("tutors")
    const query = { fname: "Thanapong" }
    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { rating: -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // }
    const tutors = await tutorsObj.find(query)
    const tutorsResponse = []
    await tutors.forEach(tutor => tutorsResponse.push(tutor))

    // const tutorsResponse = await tutorsObj.findOne(query)

    res.status(200).json({ tutors: tutorsResponse })
  }
  
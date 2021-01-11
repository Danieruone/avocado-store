import DB from "@database/db.js";

const AvoDetail = async (req, res) => {
  try {
    const db = new DB();
    const avoId = req.query.id;
    const avo = await db.getById(avoId);
    res.status(200).json(avo);
  } catch (e) {
    console.error(e);
    res.status(404).end();
  }
};

export default AvoDetail;

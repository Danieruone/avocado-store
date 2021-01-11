import DB from "@database/db.js";

const allAvos = async (req, res) => {
  try {
    const db = new DB();
    const allEntries = await db.getAll();
    const lenght = allEntries.length;
    res.json({
      lenght,
      data: allEntries,
    });
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ length: 0, data: [], error: "Something went wrong" })
    );
  }
};

export default allAvos;

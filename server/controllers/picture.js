
export const create = async (req, res) => {
  try {   
    const file = req.file;
    const picture = { img : file.location };

    res.send(picture);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};
